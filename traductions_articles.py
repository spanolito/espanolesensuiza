#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Traductions des 5 articles pour espanolesensuiza.ch
Toutes les traductions sont en FRANÇAIS suisse.
"""

import re

# =====================================================================
# ARTICLE 1: articulo-impuestos
# Traduit intégralement de l'ES au FR
# =====================================================================

articulo_impuestos_fr = """    "articulo-impuestos": {
        title: "Impôts en Suisse : fédéral, cantonal et communal",
        description: "Comprendre le système de triple imposition en Suisse : de la Confédération, des cantons et des communes.",
        keywords: "impôts Suisse, fiscalité Suisse, cantons impôts",
        audience: 'worker',
        category: 'Régime Fiscal',
        hub: 'impuestos',
        slug: "impuestos-en-suiza",
        readingTime: 12,
        featuredImage: "media/guides/impuestos-suiza.png",
        imageAlt: "Formulaires d'impôts, calculatrice et pièces de monnaie suisses sur un bureau ordonné",
        summary: 'En Suisse, vous payez les impôts à 3 niveaux. Les impôts cantonaux et communaux constituent la plus grande charge et varient drastiquement même en traversant la rue.',
        content: `
            <div class="article-content">
                <h2>Introduction</h2>
                <p>En Suisse, les impôts ne se comprennent pas en regardant simplement un « taux national » et c'est tout. Le pays est fédéral, et votre charge fiscale dépend beaucoup de <strong>l'endroit où vous vivez</strong> (canton et commune), votre état civil, vos enfants et votre niveau de revenus. Deux personnes ayant le même salaire peuvent payer différemment simplement en vivant dans des communes différentes.</p>

                <div class="callout info">
                    <strong>Points clés :</strong>
                    <ul>
                        <li>Vous payez les impôts à <strong>trois niveaux</strong> : Confédération, canton et commune.</li>
                        <li>Ce qui varie généralement le plus (et ce qui compte le plus dans votre budget), c'est cantonal et communal.</li>
                        <li>De nombreux nouveaux arrivants avec un permis L/B commencent par l'<a href="#/impuesto-fuente-suiza">impôt à la source</a> (retenue sur le salaire).</li>
                    </ul>
                </div>

                <h2>Comment fonctionne le système</h2>
                <h3>1) Impôt fédéral direct</h3>
                <p>C'est le composant national. Il s'applique uniformément dans tout le pays, avec des barèmes progressifs. C'est généralement une part mineure de votre facture totale comparé au canton et à la commune.</p>

                <h3>2) Impôts cantonaux</h3>
                <p>Chaque canton définit ses barèmes, déductions et règles. En plus de l'impôt sur le revenu, de nombreux cantons appliquent un impôt sur la <strong>fortune/patrimoine</strong> (avec des seuils et des règles propres). C'est pour cela que parler d'« impôts en Suisse » sans mentionner le canton, c'est rester incomplet.</p>

                <h3>3) Impôts communaux</h3>
                <p>Dans de nombreux cantons, la commune applique un coefficient ou un multiplicateur sur l'impôt cantonal de base. Résultat : vous déplacer « de quelques kilomètres » peut changer votre situation fiscale sans changer d'emploi.</p>

                <h3>4) Retenue vs déclaration annuelle</h3>
                <p>Il existe deux grands modes de paiement :</p>
                <ul>
                    <li><strong>Impôt à la source :</strong> votre employeur retient mensuellement sur le salaire (très courant avec les permis L/B).</li>
                    <li><strong>Déclaration ordinaire :</strong> vous déclarez annuellement et payez/ajustez selon le décompte (fréquent avec permis C et autres cas).</li>
                </ul>
                <p>Dans certains cas, même si vous êtes à la source, vous pouvez être obligé de faire une déclaration ordinaire ou une régularisation (selon canton et situation). Si vous avez des doutes, ne la mettez pas de côté en pensant « quand la lettre arrivera » : consultez rapidement.</p>

                <h3>5) Année fiscale, factures et « surprises »</h3>
                <p>En déclaration ordinaire, il est habituel qu'il y ait des paiements provisionnels ou des factures à compte (selon le canton) et des ajustements ultérieurs. C'est pourquoi, même si votre salaire est stable, une liquidation peut arriver des mois plus tard. La recommandation pratique est simple : <strong>gardez une réserve</strong> et ne planifiez pas vos finances au centime près.</p>

                <h3>6) Impôt ecclésiastique (selon le canton et l'affiliation)</h3>
                <p>Dans certains cantons, il existe un impôt lié à l'affiliation religieuse (église). Si vous n'en êtes pas membre, en principe cela ne devrait pas s'appliquer. Comme c'est un sujet sensible et cantonal, consultez la documentation de votre canton si vous voyez un concept que vous ne comprenez pas.</p>

                <h2>Conditions et règles</h2>
                <h3>Documents qui forment généralement la base de votre fiscalité</h3>
                <ul>
                    <li><strong>Certificat salarial / Lohnausweis :</strong> le document annuel contenant votre salaire et ses éléments.</li>
                    <li><strong>État civil et enfants :</strong> ils impactent les tarifs à la source et les déductions.</li>
                    <li><strong>Domicile fiscal (commune) :</strong> détermine une grande partie de votre facture.</li>
                    <li><strong>Patrimoine et dettes :</strong> si applicable (particulièrement pertinent dans les cantons avec impôt sur la fortune).</li>
                </ul>

                <h3>Ce que signifie « être à la source » en pratique</h3>
                <p>Si vous êtes à la source, l'administration fiscale applique un tarif standard basé sur des catégories (état civil, enfants, etc.). Ce qui est important pour vous :</p>
                <ul>
                    <li>Vérifier que votre catégorie est correcte (les changements familiaux importent).</li>
                    <li>Savoir si votre canton permet des <strong>corrections</strong> ou régularisations pour déductions (par exemple, cotisations au 3e pilier, frais de formation, etc.).</li>
                    <li>Comprendre que certains seuils/situations peuvent vous mener à une déclaration ordinaire (selon les règles cantonales et fédérales).</li>
                </ul>

                <h3>Ce qui se passe si vous faites une déclaration ordinaire</h3>
                <p>Dans la déclaration, le canton et la commune vous appliquent les règles de déductions et les barèmes. Il peut y avoir des déductions pour :</p>
                <ul>
                    <li>Cotisations de prévoyance (par exemple, 3e pilier).</li>
                    <li>Frais professionnels (selon règles cantonales).</li>
                    <li>Frais de garde d'enfants (selon canton).</li>
                    <li>Intérêts des dettes (selon canton).</li>
                </ul>
                <p>La liste exacte des déductions et des limites est <strong>dépendante du canton</strong>. C'est pourquoi, ne copiez pas les conseils fiscaux d'un canton à un autre sans vérifier.</p>

                <h3>Vous déménagez en Suisse : pourquoi tout change</h3>
                <p>En Suisse, le domicile fiscal est clé. Si vous déménagez de commune ou de canton, ce ne sont pas que les pourcentages qui changent : peuvent changer les déductions, formulaires, délais et formes de paiement. Il n'est pas rare que la première année après un déménagement, des ajustements apparaissent parce que le système « se recalcule » avec votre nouveau domicile.</p>

                <h2>Exemples concrets</h2>
                <h3>Exemple 1 – Même salaire, commune différente</h3>
                <p>On vous offre le même salaire dans la même entreprise, mais vous hésitez entre deux communes proches. Si une commune a un multiplicateur élevé et l'autre bas, votre « salaire net réel » change. C'est pourquoi, en comparant les loyers, comparez aussi les impôts (en Suisse, ils vont ensemble).</p>

                <h3>Exemple 2 – Vous vous mariez en milieu d'année</h3>
                <p>Un changement d'état civil peut changer le tarif à la source ou vos déductions. En pratique, il faut notifier les changements et garder la documentation. L'erreur typique est de la laisser pour la fin et d'être surprise par des ajustements.</p>

                <h3>Exemple 3 – Revenus supplémentaires (indépendant, loyer, investissements)</h3>
                <p>Si vous avez des revenus supplémentaires, la retenue standard peut ne pas refléter votre situation finale. C'est un cas typique où il peut y avoir obligation de déclarer ou de régulariser. Le conseil pratique : anticipez et mettez de l'argent de côté.</p>

                <h3>Exemple 4 – Vous déménagez de canton en été</h3>
                <p>Vous travaillez toute l'année, mais vous changez de canton à la moitié. Même si c'est « le même pays », fiscalement c'est un changement important : communiquez-le dans vos démarches de domicile et acceptez que le calcul final puisse varier par rapport à ce que vous attendiez.</p>

                <h2>Erreurs courantes</h2>
                <ul>
                    <li><strong>Croire que « en Suisse on paie peu » sans regarder le canton/la commune :</strong> la différence peut être grande.</li>
                    <li><strong>Ne pas vérifier la catégorie à la source :</strong> une erreur de catégorie peut vous faire mal payer toute l'année.</li>
                    <li><strong>Ne pas garder le certificat salarial :</strong> c'est la pièce centrale de toute correction ou déclaration.</li>
                    <li><strong>Ne pas planifier la liquidité :</strong> en Suisse, des ajustements et des factures peuvent arriver après coup ; ne vivez pas à la limite.</li>
                </ul>

                <h2>Conseils pratiques</h2>
                <ul>
                    <li>Si vous venez d'arriver, commencez par comprendre l'<a href="#/impuesto-fuente-suiza">impôt à la source</a>.</li>
                    <li>Quand vous choisissez où vivre, regardez le « paquet complet » : loyer + impôts + transport.</li>
                    <li>Si vous changez de commune ou de canton, acceptez que les règles changent et révisez votre budget.</li>
                    <li>Créez un dossier fiscal annuel (PDFs et lettres) : certificat salarial, contrats, reçus du 3e pilier et communications du canton.</li>
                    <li>Si vous avez des doutes, consultez l'autorité fiscale de votre canton : un appel à temps évite des erreurs coûteuses.</li>
                    <li>Connectez ce guide avec le <a href="#/presupuesto-suiza">coût de la vie</a> et les <a href="#/trabajadores-fronterizos-suiza">travailleurs frontaliers</a> si applicable.</li>
                </ul>

                <h2>Sources officielles</h2>
                <ul>
                    <li><a href="https://www.estv.admin.ch/" target="_blank" rel="noopener noreferrer">AFC / ESTV – Administration fédérale des contributions</a></li>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch – Portail officiel suisse</a></li>
                </ul>
            </div>
        `
    },"""

print("✓ Traduction articulo-impuestos générée")
print(f"Longueur: {len(articulo_impuestos_fr)} caractères")

# Vérifier que le texte est en français
test_words_fr = ['vous', 'est', 'sont', 'impôts', 'Confédération']
test_words_es = ['usted', 'también', 'trabajo', 'patrimonio']
fr_found = sum(1 for w in test_words_fr if w in articulo_impuestos_fr)
es_found = sum(1 for w in test_words_es if w in articulo_impuestos_fr)

print(f"Marqueurs français trouvés: {fr_found}/{len(test_words_fr)}")
print(f"Marqueurs espagnols trouvés: {es_found}/{len(test_words_es)}")

if es_found == 0 and fr_found >= 3:
    print("✓ CONFIRMÉ : Texte en FRANÇAIS")
else:
    print("⚠ ATTENTION : Vérifier la langue!")
