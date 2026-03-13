#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      const mask = -(crc & 1);
      crc = (crc >>> 1) ^ (0xedb88320 & mask);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  const crc = crc32(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crc, 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function encodePng(width, height, rgba) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // bit depth
  ihdr.writeUInt8(6, 9); // color type RGBA
  ihdr.writeUInt8(0, 10); // compression
  ihdr.writeUInt8(0, 11); // filter
  ihdr.writeUInt8(0, 12); // interlace

  // Raw scanlines with filter=0.
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[(stride + 1) * y] = 0;
    rgba.copy(raw, (stride + 1) * y + 1, stride * y, stride * (y + 1));
  }

  const idatData = zlib.deflateSync(raw, { level: 9 });
  const png = Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", idatData),
    chunk("IEND", Buffer.alloc(0)),
  ]);
  return png;
}

function fillRect(width, height, rgba, x, y, w, h, r, g, b, a = 255) {
  const x0 = Math.max(0, Math.floor(x));
  const y0 = Math.max(0, Math.floor(y));
  const x1 = Math.min(width, Math.ceil(x + w));
  const y1 = Math.min(height, Math.ceil(y + h));
  for (let yy = y0; yy < y1; yy++) {
    for (let xx = x0; xx < x1; xx++) {
      const i = (yy * width + xx) * 4;
      rgba[i + 0] = r;
      rgba[i + 1] = g;
      rgba[i + 2] = b;
      rgba[i + 3] = a;
    }
  }
}

function generateIcon(size) {
  const width = size;
  const height = size;
  const rgba = Buffer.alloc(width * height * 4);

  // Background: #c8102e
  fillRect(width, height, rgba, 0, 0, width, height, 0xc8, 0x10, 0x2e, 0xff);

  // Swiss cross (simple proportions).
  const arm = Math.round(size * 0.58);
  const thickness = Math.round(size * 0.18);
  const cx = Math.floor(size / 2);
  const cy = Math.floor(size / 2);

  fillRect(width, height, rgba, cx - thickness / 2, cy - arm / 2, thickness, arm, 255, 255, 255, 255);
  fillRect(width, height, rgba, cx - arm / 2, cy - thickness / 2, arm, thickness, 255, 255, 255, 255);

  return encodePng(width, height, rgba);
}

function main() {
  const outDir = path.join(process.cwd(), "icons");
  fs.mkdirSync(outDir, { recursive: true });

  const icon192 = generateIcon(192);
  const icon512 = generateIcon(512);
  const apple180 = generateIcon(180);

  fs.writeFileSync(path.join(outDir, "icon-192.png"), icon192);
  fs.writeFileSync(path.join(outDir, "icon-512.png"), icon512);
  fs.writeFileSync(path.join(outDir, "apple-touch-icon.png"), apple180);
}

main();

