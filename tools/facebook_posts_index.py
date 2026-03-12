#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from collections import defaultdict
from dataclasses import dataclass
from html import unescape
from pathlib import Path


TARGET_GROUP_DEFAULT = "Españoles que realmente se ayudan en Suiza"
AUTHOR_DEFAULT = "Oscar Antonio"


def _clean_html(value: str) -> str:
    value = re.sub(r"<br\s*/?>", "\n", value)
    value = re.sub(r"</p>\s*<p>", "\n\n", value)
    value = re.sub(r"<[^>]+>", "", value)
    return unescape(value)


def _norm(value: str) -> str:
    value = value.lower()
    value = re.sub(r"\s+", " ", value).strip()
    return value


TOPICS = {
    "permisos": [r"\bpermiso\b", r"\bpermisos\b", r"\bpermiso\s*[lbc]\b", r"\bresidenc"],
    "registro_llegada": [r"\bregistr", r"control de habitantes", r"\bcomuna\b", r"\bgemeinde\b", r"attestation"],
    "trabajo_contrato": [r"\btrabaj", r"\bempleo\b", r"\bcv\b", r"curricul", r"\bcontrat", r"preaviso", r"periodo de prueba", r"\bdespid"],
    "rav_paro": [r"\brav\b", r"\bparo\b", r"desemple", r"\balv\b", r"ch[oô]mage"],
    "lamal_salud": [r"\blamal\b", r"\bseguro\b", r"franquicia", r"copago", r"prima", r"\bmedic"],
    "impuestos": [r"\bimpuest", r"quellensteuer", r"fiscal", r"\bdeclaraci"],
    "vivienda_alquiler": [r"\balquil", r"\bviviend", r"\bpiso\b", r"fianza", r"dep[oó]sit", r"asloca", r"subalquil"],
    "bancos_pagos": [r"\bbanco\b", r"\bcuenta\b", r"\btarjeta\b", r"\biban\b", r"twint"],
    "coche_import": [r"\bcoche\b", r"\bauto\b", r"import", r"aduana", r"\bmatr[ií]cul", r"placas"],
    "escuela_ninos": [r"\bescuel", r"\bcoleg", r"kita", r"guarder", r"cr[eè]che", r"\bniñ"],
    "transporte": [r"\bsbb\b", r"\bcff\b", r"halbtax", r"abono general", r"\bag\b", r"\bga\b", r"\btren\b"],
    "cantones": [r"\bcant[oó]n", r"\bcomuna\b", r"\bvd\b", r"\bge\b", r"\bzh\b", r"vaud", r"gen[eè]ve", r"zurich", r"berna"],
    "sistema_social": [r"\bavs\b", r"\bahv\b", r"\bai\b", r"\blpp\b", r"pillar", r"2[oº] pilar", r"\bseguro social"],
    "naturalizacion": [r"naturaliz", r"\bnacionalidad\b", r"pasaporte suizo", r"citoyennet", r"einb[uü]rger"],
}


TOPIC_RES = {topic: [re.compile(pat, re.I) for pat in patterns] for topic, patterns in TOPICS.items()}


@dataclass(frozen=True)
class PostMeta:
    author: str
    group: str
    timestamp: str
    text_len: int
    image_paths: list[str]
    topics: list[str]
    durable_score: float


def _durable_score(text: str) -> float:
    n = _norm(text)
    length = len(text)
    is_short_request = bool(re.search(r"\b(busco|alguien|recomienda|alguno|necesito|hola\b|buenas\b|bonjour\b)\b", n)) and length < 500
    has_structure = ("\n" in text and length > 600) or bool(re.search(r"\b(requisitos|pasos|gu[ií]a|importante|ojo|consejo)\b", n))
    score = (length / 300.0) + (2.0 if has_structure else 0.0) - (2.0 if is_short_request else 0.0)
    return score


def iter_posts(html_text: str, *, target_group: str, author: str) -> list[PostMeta]:
    sections = re.findall(r'<section class="_a6-g"[\s\S]*?</section>', html_text)
    results: list[PostMeta] = []

    for sec in sections:
        h2m = re.search(r"<h2[^>]*>(.*?)</h2>", sec)
        if not h2m:
            continue

        header = _clean_html(h2m.group(1))
        if " a publié dans " not in header:
            continue

        header_author, rest = header.split(" a publié dans ", 1)
        group = rest.strip().rstrip(".")
        if header_author.strip() != author:
            continue
        if group != target_group:
            continue

        tm = re.search(r'<div class="_a72d">(.*?)</div>', sec)
        timestamp = _clean_html(tm.group(1)) if tm else ""

        blocks = [_clean_html(b).strip() for b in re.findall(r'<div class="_2pin"><div>([\s\S]*?)</div></div>', sec)]
        blocks = [b for b in blocks if b]

        def block_score(b: str) -> int:
            if re.fullmatch(r"https?://\S+", b.strip()):
                return 0
            return len(b)

        main_text = max(blocks, key=block_score, default="").strip()
        images = re.findall(r'<img src="([^"]+)"', sec)

        n = _norm(main_text)
        topics = [t for t, regs in TOPIC_RES.items() if any(r.search(n) for r in regs)]
        score = _durable_score(main_text)

        results.append(
            PostMeta(
                author=author,
                group=group,
                timestamp=timestamp,
                text_len=len(main_text),
                image_paths=images,
                topics=sorted(set(topics)),
                durable_score=score,
            )
        )

    return results


def main() -> int:
    parser = argparse.ArgumentParser(description="Index Facebook group posts export (metadata only).")
    parser.add_argument(
        "--input",
        type=Path,
        required=True,
        help="Path to `group_posts_and_comments.html` export file.",
    )
    parser.add_argument("--group", default=TARGET_GROUP_DEFAULT)
    parser.add_argument("--author", default=AUTHOR_DEFAULT)
    parser.add_argument("--min-score", type=float, default=8.0, help="Keep only posts with durable_score >= min-score.")
    parser.add_argument(
        "--format",
        choices=["json", "md"],
        default="md",
        help="Output format. `md` is a shortlist by topic; `json` is full metadata list.",
    )
    parser.add_argument("--output", type=Path, required=True, help="Output file path.")
    args = parser.parse_args()

    html_text = args.input.read_text("utf-8", errors="ignore")
    posts = iter_posts(html_text, target_group=args.group, author=args.author)
    posts = [p for p in posts if p.durable_score >= args.min_score and p.topics]

    if args.format == "json":
        payload = [
            {
                "author": p.author,
                "group": p.group,
                "timestamp": p.timestamp,
                "text_len": p.text_len,
                "image_paths": p.image_paths,
                "topics": p.topics,
                "durable_score": round(p.durable_score, 2),
            }
            for p in sorted(posts, key=lambda x: (-x.durable_score, -x.text_len, x.timestamp))
        ]
        args.output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", "utf-8")
        return 0

    by_topic: dict[str, list[PostMeta]] = defaultdict(list)
    for p in posts:
        for t in p.topics:
            by_topic[t].append(p)

    lines: list[str] = []
    lines.append(f"# Facebook posts shortlist (metadata only)\n")
    lines.append(f"- Group: `{args.group}`")
    lines.append(f"- Author: `{args.author}`")
    lines.append(f"- Filter: `durable_score >= {args.min_score}`\n")

    for topic in sorted(by_topic.keys()):
        cands = sorted(by_topic[topic], key=lambda x: (-x.durable_score, -x.text_len, x.timestamp))[:12]
        lines.append(f"## {topic}\n")
        for p in cands:
            lines.append(f"- {p.timestamp} (score {p.durable_score:.1f}, ~{p.text_len} chars, images {len(p.image_paths)})")
        lines.append("")

    args.output.write_text("\n".join(lines).rstrip() + "\n", "utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

