(function() {
/**
 * content-articles.js
 * Contains the 20 SEO optimized deep-dive articles.
 */

window.siteContent = window.siteContent || {};
window.siteContent.en = window.siteContent.en || { global: {}, pages: {}, articles: {} };

window.siteContent.en.articles = {
	    // 1. Permisos de residencia
    "articulo-permisos": {
        title: "Residence permits in Switzerland: L, B, C and differences",
        description: "Everything about Swiss residence permits for foreigners: L, B, C and their differences.",
        keywords: "residence permits switzerland, permit L, permit B, permit C, living in switzerland, SEM",
        category: 'Ordinary Procedures',
        hub: 'tramites',
        slug: "residence-permits-switzerland",
        readingTime: 4,
        featuredImage: "media/guides/tramites-llegada-suiza.jpg",
        imageAlt: "The three types of Swiss residence permits (L, B, C) displayed as cards over a map of Switzerland",
        summary: "A complete guide to understanding Swiss residence permits: L (short-term), B (resident) and C (settlement).",
        content: `
            <div class="article-content">
                <p>Moving to Switzerland involves registering and obtaining a residence permit. If you come from an EU/EFTA country (including Spain), the process is facilitated by the Agreement on Free Movement of Persons (ALCP).</p>

                <h2>Quick comparison</h2>
                <p>Switzerland has several residence permits for citizens of the European Union.<br>
                The most common are the L permit, the B permit and the C permit.<br>
                Each one corresponds to a different situation depending on the type of contract and the length of stay.<br>
                The following table summarizes their main characteristics. If you're planning your move, see also <a href="#/mudarse-a-suiza-desde-espana">the step-by-step guide</a>.</p>

                <table class="info-table">
                    <thead><tr><th>Permit</th><th>Typical situation</th><th>Duration</th><th>Notes</th></tr></thead>
                    <tbody>
                        <tr><td><strong>L</strong></td><td>Temporary contract</td><td>Tied to the contract</td><td>More restrictions; depends on the case/canton</td></tr>
                        <tr><td><strong>B</strong></td><td>Residence with work/studies</td><td>Usually several years</td><td>Withholding tax is common at the beginning</td></tr>
                        <tr><td><strong>C</strong></td><td>Settlement</td><td>Renewable</td><td>Greater administrative stability</td></tr>
                        <tr><td><strong>G</strong></td><td>Cross-border workers</td><td>Usually several years</td><td>Special tax rules depending on agreements</td></tr>
                    </tbody>
                </table>

                <div class="callout info">
                    <strong>Practical tip</strong>
                    <p>With an L permit it can be harder to rent a home through a real estate agency. Many agencies prefer tenants with a B permit or an open-ended employment contract.</p>
                </div>

                <h3>Useful links</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch</a></li>
                    <li><a href="https://www.sem.admin.ch/" target="_blank" rel="noopener noreferrer">sem.admin.ch</a></li>
                </ul>

                <h2>L Permit (Short Term)</h2>
                <p>Aimed at people who stay in Switzerland for a period of less than 12 months.</p>
                <ul>
                    <li><strong>Temporary contracts:</strong> If you have a contract between 3 and 12 months, you will be assigned this permit.</li>
                    <li><strong>Job seekers:</strong> After 3 months looking for a job, you can apply for an L Permit to continue searching, which is renewed under certain conditions by proving you have financial means.</li>
                </ul>

                <h2>Permission B (Residence Permit / Livret B)</h2>
                <p>For residents with long-term or indefinite contracts.</p>
                <ul>
                    <li><strong>Validity:</strong> 5 years for EU/EFTA citizens if they have a contract of at least 12 months or indefinite.</li>
                    <li><strong>Rights:</strong> Allows cantonal mobility and easy change of employer within the country.</li>
                </ul>

                <h2>Permission C (Establishment Permit / Livret C)</h2>
                <p>It is equivalent to permanent residence and does not depend on working conditions.</p>
                <ul>
                    <li><strong>Obtained:</strong> It is granted after 5 years of uninterrupted and regular residence for Spanish (and EU-15) citizens.</li>
                    <li><strong>Advantages:</strong> Same rights as the Swiss (except voting), you can open your company freely and taxes are no longer withheld at source (Quellensteuer), but through a normal annual declaration.</li>
                </ul>

                <div class="callout info">
                    <strong>Official Source:</strong> Check the renewal conditions on the portal of the <a href="https://www.sem.admin.ch/" target="_blank">State Secretariat for Migration</a>.
                </div>
            </div>
        `
    },

    "articulo-mudarse-suiza": {
        title: "Moving to Switzerland from Spain: step-by-step guide",
        description: "A practical checklist for Spaniards planning to move to Switzerland: jobs, registration, permits, insurance, housing and budget.",
        keywords: "move to switzerland from spain, living in switzerland as a spaniard, how to move to switzerland",
        category: 'Ordinary Procedures',
        hub: 'tramites',
        slug: "moving-to-switzerland-from-spain",
        readingTime: 5,
        featuredImage: "media/guides/mudarse-a-suiza-desde-espana.jpg",
        imageAlt: "A person with a suitcase looking at a Swiss landscape, representing the migratory project from Spain",
        summary: "Short, practical steps to move to Switzerland from Spain with links to the key pages.",
        content: `
            <div class="article-content">
                <p>Many Spaniards want to live or work in Switzerland because of salaries, stability and opportunities. This page summarizes the <strong>main steps</strong> to get settled, with short blocks and direct links.</p>

                <h2>1) Before you come to Switzerland</h2>
                <ul>
                    <li><strong>Job search</strong> and understand the market by canton/language.</li>
                    <li>Prepare a <strong>Swiss-style CV</strong> (complete application dossier).</li>
                    <li>Check the <a href="#/cost-of-living-in-switzerland">cost of living</a> and adjust expectations.</li>
                    <li>Have some <strong>savings</strong> for the first months (rent, insurance, admin fees).</li>
                </ul>
                <div class="callout info">
                    <strong>Practical tip</strong>
                    <p>Many employers prefer candidates who are already in Switzerland or who can travel easily for an interview.</p>
                </div>

                <h2>2) Arriving in Switzerland</h2>
                <ul>
                    <li>Find <strong>temporary accommodation</strong> so you can register.</li>
                    <li>Register at your commune: <a href="#/registering-in-switzerland-commune">commune registration</a>.</li>
                    <li>Apply for the <a href="#/residence-permits-switzerland">residence permit</a> that matches your situation.</li>
                </ul>

                <h2>3) Health insurance</h2>
                <ul>
                    <li>Health insurance is <strong>mandatory</strong>.</li>
                    <li>You must arrange it within the <strong>first 3 months</strong> (often retroactive).</li>
                    <li>You choose your insurer: compare and decide.</li>
                </ul>
                <p>Guide: <a href="#/health-insurance-switzerland-lamal">Health insurance (LAMal)</a>.</p>

                <h2>4) Finding a job</h2>
                <p>Where to search and how to apply: <a href="#/job-searching-platforms-and-strategies">Job searching in Switzerland</a>.</p>
                <h3>Main portals</h3>
                <ul>
                    <li><a href="https://www.jobs.ch/" target="_blank" rel="noopener noreferrer">jobs.ch</a></li>
                    <li><a href="https://www.jobup.ch/" target="_blank" rel="noopener noreferrer">jobup.ch</a></li>
                    <li><a href="https://ch.indeed.com/" target="_blank" rel="noopener noreferrer">indeed.ch</a></li>
                    <li><a href="https://www.job-room.ch/" target="_blank" rel="noopener noreferrer">job-room.ch</a></li>
                </ul>
                <div class="callout info">
                    <strong>Practical tip</strong>
                    <p>In Switzerland it's often more effective to search in the local language (German, French or Italian).</p>
                    <p><strong>Google example:</strong> <code>Glaser Arbeit Zürich</code></p>
                </div>

                <h2>5) Housing</h2>
                <ul>
                    <li>You'll need <strong>documents</strong> (ID, payslips/contract, etc.).</li>
                    <li>A strong <strong>rental dossier</strong> matters a lot and competition is high.</li>
                    <li>With an <strong>L permit</strong> it can be harder to rent through an agency.</li>
                </ul>
                <p>Guide: <a href="#/renting-apartment-switzerland">Renting in Switzerland</a>.</p>

                <h2>6) Cost of living</h2>
                <p>Costs vary by canton (and by city). As a quick reference:</p>
                <table class="info-table">
                    <thead><tr><th>Expense</th><th>Indicative range</th><th>Notes</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Rent</strong></td><td>1,500 – 2,200 CHF</td><td>Higher in Geneva/Zurich; depends on area and size</td></tr>
                        <tr><td><strong>Health insurance</strong></td><td>350 – 450 CHF</td><td>Varies by canton/age/model/deductible</td></tr>
                        <tr><td><strong>Food</strong></td><td>400 – 600 CHF</td><td>Retailers and personal habits matter</td></tr>
                        <tr><td><strong>Transport</strong></td><td>70 – 150 CHF</td><td>Depends on city passes; intercity trains increase costs</td></tr>
                    </tbody>
                </table>
                <p>More detail: <a href="#/cost-of-living-in-switzerland">Cost of living in Switzerland</a>.</p>

                <div class="callout info">
                    <strong>Final tip</strong>
                    <p>Moving to Switzerland takes planning, but with the right information the process becomes much easier.</p>
                </div>

                <h3>Useful links</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch</a></li>
                    <li><a href="https://www.sem.admin.ch/" target="_blank" rel="noopener noreferrer">sem.admin.ch</a></li>
                </ul>
            </div>
        `
    },

    // 2. Registro en la comuna
    "articulo-registro": {
        title: "How to register upon arrival in Switzerland",
        description: "Everything about the process of registering at the commune (Einwohnerkontrolle) after your arrival in Switzerland.",
        keywords: "registering in switzerland, commune registration, einwohnerkontrolle, residence permit application",
        category: 'Initial Steps',
        hub: 'tramites',
        slug: "registering-in-switzerland-commune",
        readingTime: 3,
        featuredImage: "media/guides/registrarse-en-suiza.jpg",
        imageAlt: "The entrance to a Swiss Swiss commune office (Contrôle des habitants) with the Swiss flag",
        summary: "If you move to Switzerland to live, you usually must register with your commune quickly (often within 14 days). The registration confirmation is typically enough to start working while the physical permit card is produced.",
        content: `
            <div class="article-content">
                <p>Registering with your commune (<i>Contrôle des habitants / Einwohnerkontrolle</i>) is the step that <strong>formalizes your residence</strong> in Switzerland. It triggers the administrative chain: residence permit processing, health insurance, taxes, schooling, and more.</p>

                <h2>How the system works</h2>
                <ol>
                    <li>Identify your commune office and check whether an appointment is required.</li>
                    <li>Bring the requested documents and declare your address (even if temporary).</li>
                    <li>Pay the administrative fee and receive a <strong>registration confirmation</strong> (varies by canton/commune).</li>
                    <li>Your file is forwarded to the cantonal migration authority; the <strong>permit card</strong> arrives later by post.</li>
                </ol>
                <div class="callout warning">
                    <strong>Deadlines:</strong> many communes require registration within <strong>14 days</strong> (sometimes less) and usually <strong>before starting work</strong>. Rules vary by canton and commune—always confirm locally.
                </div>

                <h2>Requirements and rules</h2>
                <h3>Who needs to register?</h3>
                <ul>
                    <li><strong>Moving to reside (job, studies, family):</strong> Yes—registration is normally required within the local deadline.</li>
                    <li><strong>Short stay (up to 90 days):</strong> Typically as a tourist, no resident registration is needed.</li>
                </ul>

                <h3>Common documents</h3>
                <ul>
                    <li>Passport or ID card.</li>
                    <li>Employment contract or proof of sufficient financial means.</li>
                    <li>Lease agreement or accommodation confirmation (logement).</li>
                    <li>Civil status documents (for families).</li>
                </ul>

                <h2>Practical advice</h2>
                <ul>
                    <li>Check your commune website for the exact list of documents and fees.</li>
                    <li>After registration, prioritize <a href="#/health-insurance-switzerland-lamal">LAMal</a> and your bank account setup.</li>
                </ul>

                <h2>Official Swiss sources</h2>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch — Living in Switzerland</a></li>
                    <li><a href="https://www.sem.admin.ch/" target="_blank" rel="noopener noreferrer">SEM — Residence</a></li>
                </ul>
            </div>
        `
    },

    // 3. Seguro de salud (LAMal)
    "articulo-lamal": {
        title: "Health insurance in Switzerland (LAMal): A practical guide",
        description: "Everything you need to know about the mandatory Swiss health insurance (LAMal): coverage, models, deadlines, and how to save on premiums.",
        keywords: "health insurance switzerland, LAMal, KVG, swiss health insurance, premium reduction, HMO model",
        audience: 'resident',
        featuredImage: "media/guides/seguro-medico-lamal-suiza.jpg",
        imageAlt: "A Swiss health insurance card and a stethoscope, representing the LAMal system",
        category: "Health Insurance",
        hub: "salud",
        slug: "health-insurance-switzerland-lamal",
        readingTime: 6,
        summary: "Health insurance in Switzerland is mandatory, private, and individual. You have three months to enroll after your arrival, and coverage is retroactive.",
        content: `
            <div class="article-content">
                <p>Unlike many other European countries, Switzerland does not have a state-run healthcare system funded by social security taxes. Instead, every resident is required to purchase insurance from private insurers under the Federal Health Insurance Act (<strong>LAMal</strong> or <strong>KVG</strong>).</p>

                <h2>Obligation and Deadlines</h2>
                <p>Every person residing in Switzerland must take out basic health insurance within <strong>three months</strong> of their official registration. The insurance coverage is retroactive to your first day of residence, meaning you must pay premiums for those initial months even if you sign up later.</p>

                <h2>What does Basic Insurance (LAMal) cover?</h2>
                <p>The benefits covered by basic insurance are identical across all companies by law. They include:</p>
                <ul>
                    <li>General and specialist medical consultations.</li>
                    <li>Medicines prescribed by a doctor (from the official list).</li>
                    <li>Hospital treatment in the general ward of your canton of residence.</li>
                    <li>Maternity costs (no deductible/copayment applied).</li>
                </ul>

                <h2>What is NOT covered?</h2>
                <p>Basic insurance generally does <strong>not</strong> cover:</p>
                <ul>
                    <li>Routine dental care (check-ups, cleanings, fillings).</li>
                    <li>Glasses or contact lenses (with minor exceptions for children).</li>
                    <li>Hospitalization in private or semi-private rooms.</li>
                </ul>

                <h2>Insurance Models: How to save on premiums</h2>
                <p>While coverage is the same, you can choose a specific "model" to reduce your monthly cost:</p>
                <ul>
                    <li><strong>HMO Model:</strong> You agree to always visit a specific group health center first. It offers the highest discount.</li>
                    <li><strong>Telmed:</strong> You must call a medical hotline for a first consultation before visiting a doctor.</li>
                    <li><strong>Family Doctor:</strong> You must always consult your assigned primary care physician first.</li>
                    <li><strong>Standard (Free Choice):</strong> You can go directly to any specialist, but it is the most expensive option.</li>
                </ul>

                <h2>How medical bills are paid</h2>
                <p>There are two main systems for processing payments:</p>
                <ul>
                    <li><strong>Tiers-garant:</strong> You pay the bill or pharmacy first and send the receipt to your insurer for reimbursement.</li>
                    <li><strong>Tiers-payant:</strong> The bill is sent directly from the provider to the insurer, who then bills you for your share (deductible/copayment).</li>
                </ul>

                <h2>Subsidies and Premium Reduction (Subsides)</h2>
                <div class="callout info">
                    <strong>Financial help:</strong> If your income is below a certain threshold, you are entitled to a <strong>premium reduction (Subsidies / Subsides)</strong> paid for by your canton. This can cover a significant portion of your monthly premium. You usually need to apply through the cantonal health office (SASP, OVAM, etc.).
                </div>
            </div>
        `
    },

    // 4. Franquicia y copago en el sistema de salud
    "articulo-franquicia": {
        title: "Deductibles and cost-sharing in the Swiss health system",
        description: "A detailed explanation of deductibles (franchise) and co-payments (quote-part) in Swiss health insurance (LAMal).",
        keywords: "health insurance deductible switzerland, franchise, quote-part, selbstbehalt, medical costs switzerland",
        audience: 'resident',
        featuredImage: "media/guides/franquicia-seguro-medico-suiza.jpg",
        imageAlt: "A conceptual illustration of savings and healthcare costs in Switzerland",
        category: `Medical Costs`,
        hub: 'salud',
        slug: "deductibles-cost-sharing-switzerland",
        readingTime: 4,
        summary: "In Switzerland, you pay 100% of your initial medical costs until you meet your chosen deductible. After that, you pay a 10% co-payment up to an annual limit.",
        content: `
            <div class="article-content">
                <h2>Introduction</h2>
                <p>Even after paying your monthly premium, you must personally contribute to the cost of most medical services. Your annual out-of-pocket contribution consists of three elements: the deductible (Franchise), the co-payment (Quote-part / Selbstbehalt), and the hospital contribution.</p>

                <h2>1) The Deductible (Franchise)</h2>
                <p>The deductible is the fixed annual amount you must pay entirely by yourself before the insurance begins to cover any costs. It is an "excess" amount that resets every calendar year.</p>
                <ul>
                    <li><strong>Adults:</strong> You can choose between several levels: 300, 500, 1000, 1500, 2000, or 2500 CHF per year.</li>
                    <li><strong>Children:</strong> Usually 0 CHF, but can be increased up to 600 CHF to lower the premium.</li>
                    <li><strong>The Rule:</strong> The higher your chosen deductible, the lower your monthly premium will be.</li>
                </ul>

                <h2>2) The Co-payment (Quote-part / Selbstbehalt)</h2>
                <p>Once you have met your deductible (i.e., you have already paid the chosen amount out of pocket), the insurance starts covering your medical bills. However, you must still pay <strong>10%</strong> of every bill above the deductible.</p>
                <p>This 10% co-payment is <strong>capped annually</strong>:</p>
                <ul>
                    <li><strong>Adults:</strong> Maximum 700 CHF per year.</li>
                    <li><strong>Children:</strong> Maximum 350 CHF per year.</li>
                </ul>
                <p>Once you hit this cap, your insurance covers 100% of further medical costs for the rest of the year.</p>

                <h2>3) Hospital Contribution</h2>
                <p>In case of hospitalization, adults must pay a fixed contribution of <strong>15 CHF per day</strong>, with no time limit. This amount is separate from the deductible and co-payment (with some exceptions, such as for maternity care).</p>

                <h2>Maximum Annual Costs (Worst-case Scenario)</h2>
                <p>If you have high medical needs or a serious accident during the year, the maximum you would pay out of pocket (besides premiums) is:</p>
                <div class="callout">
                    <strong>Adult with 2500 Franchise:</strong> 2500 (Franchise) + 700 (10% max) = <strong>3200 CHF/year</strong> (+ premiums + hospital).<br>
                    <strong>Adult with 300 Franchise:</strong> 300 (Franchise) + 700 (10% max) = <strong>1000 CHF/year</strong> (+ premiums + hospital).
                </div>

                <h2>Which deductible should you choose?</h2>
                <p>Statistically and financially, it usually only makes sense to choose one of the two extremes:</p>
                <ul>
                    <li><strong>2500 Franchise:</strong> If you are healthy, rarely visit the doctor, and have enough savings to cover the 3,200 CHF in case of an emergency. This option offers the most savings in the long run due to the low monthly premium.</li>
                    <li><strong>300 Franchise:</strong> If you visit the doctor frequently (expecting costs over 1,800–2,000 CHF/year) or if you lack immediate savings and prefer the peace of mind of high monthly premiums but low unexpected costs.</li>
                    <li><strong>Intermediate Franchises:</strong> These are rarely mathematically advantageous compared to the two options above.</li>
                </ul>
            </div>
        `
    },

    // 5. Impuestos en Suiza: federal, cantonal y comunal
    "articulo-impuestos": {
        title: "Taxes in Switzerland: federal, cantonal and municipal",
        description: "Understand Switzerland's triple taxation system: from the Confederation to the canton and municipality. How much you pay, deadlines and how to reduce your tax burden.",
        keywords: "taxes Switzerland, source tax Switzerland, direct tax Switzerland, federal tax Switzerland, cantonal tax Switzerland, tax rates Switzerland",
        category: "Taxes and Finance",
        hub: "impuestos",
        slug: "taxes-switzerland-federal-cantonal-municipal",
        readingTime: 8,
        dateUpdated: "March 2026",
        featuredImage: "media/guides/impuestos-suiza.png",
        imageAlt: "Swiss tax documents and payslip showing federal, cantonal and municipal taxes",
        summary: "Switzerland has three levels of taxation: federal, cantonal and municipal. As an employee you pay source tax (deducted automatically), but you must still file a tax return. Your canton and municipality determine the rates.",
        content: `
            <div class="article-content">

                <h2>The three levels of taxation</h2>
                <p>Switzerland's tax system is unique: you pay tax at three levels simultaneously. This "triple taxation" is characteristic of the federal structure.</p>
                <ul>
                    <li><strong>Federal tax:</strong> to the Confederation, same for everyone (8% average).</li>
                    <li><strong>Cantonal tax:</strong> to your canton, varies from 5% to 22%.</li>
                    <li><strong>Municipal tax:</strong> to your municipality, varies from 12% to 140% of cantonal tax.</li>
                </ul>
                <p>The total effective tax rate for an average worker with a salary of 80,000 CHF ranges from 18% to 35% depending on the canton and municipality you choose.</p>

                <h2>How much do you really pay?</h2>
                <p>Your payslip shows "source tax" (withholding tax) which is automatically withheld by your employer. This covers federal, cantonal and municipal taxes all in one deduction.</p>
                <p>For a married employee with one child earning 80,000 CHF:</p>
                <ul>
                    <li>In Zug (low tax): approximately 10,000–12,000 CHF/year (12.5% effective rate).</li>
                    <li>In Basel-Stadt (high tax): approximately 20,000–22,000 CHF/year (26% effective rate).</li>
                </ul>
                <p>The difference between cantons is substantial and influences long-term financial planning.</p>

                <h2>Tax-friendly cantons: Zug, Uri, Schwyz</h2>
                <p>Three cantons offer significantly lower tax rates:</p>
                <ul>
                    <li><strong>Zug:</strong> total tax ~12.5% (famous for company headquarters due to low corporate tax).</li>
                    <li><strong>Uri:</strong> total tax ~13% (smallest canton, very low corporate tax).</li>
                    <li><strong>Schwyz:</strong> total tax ~14% (no cantonal income tax for low earners).</li>
                </ul>
                <p>However, living costs in these cantons (especially Zug) may offset tax savings. The decision should be holistic.</p>

                <h2>Expensive cantons: Geneva, Basel-Stadt, Valais</h2>
                <ul>
                    <li><strong>Geneva:</strong> total tax ~21% (high living costs, but good services).</li>
                    <li><strong>Basel-Stadt:</strong> total tax ~26% (one of the highest in Switzerland).</li>
                    <li><strong>Valais:</strong> total tax ~15% but high municipal taxes in some areas.</li>
                </ul>

                <h2>Do I have to file a tax return?</h2>
                <p>Yes, you must file an annual tax return in your canton of residence, even though source tax is already withheld from your salary. This is mandatory and the deadline is typically March or April of the following year.</p>
                <p>The tax return serves to calculate your final tax liability. If you paid too much through source tax, you get a refund. If you paid too little, you owe more.</p>

                <h2>What can you deduct?</h2>
                <p>Employee contributions to the pension fund (up to set limits), health insurance premiums, professional expenses (uniforms, tools, commuting over 120 km one way), mortgage interest (if you own property), donations to charitable organizations.</p>
                <p>You cannot deduct rent, car payments, or daily living expenses.</p>

                <h2>What about the third pillar (3a)?</h2>
                <p>This is voluntary retirement savings that offers significant tax advantages. You can contribute up to 6,826 CHF/year (2024 limit for employees) and deduct it from your taxable income. The money grows tax-free until retirement (age 65). For someone in the 25% tax bracket, this is an immediate 25% return on investment through tax deduction.</p>
                <p>Third pillar should be started as early as possible because compound interest benefits greatly from time.</p>

                <h2>Tax deadlines and penalties</h2>
                <p>Tax returns must be filed by March/April (exact date varies by canton). If you miss the deadline, you can request an extension of 30 days. After that, you face a penalty of 5–10% of the tax owed, plus interest.</p>
                <p>If you move cantons, your source tax classification changes immediately. Notify your employer.</p>

                <h2>Married couples and families</h2>
                <p>Married couples file a joint tax return and benefit from higher deductions and lower rates. If both work, the combined income is taxed progressively, which can result in lower total tax than if you were single.</p>
                <p>Having children increases your deductions significantly (child allowances, educational deductions).</p>

                <h2>Frontier workers: special rules</h2>
                <p>If you live in France/Germany/Italy and work in Switzerland, different rules apply. You typically pay source tax in Switzerland but also have obligations in your home country. This requires professional tax advice to optimize.</p>

                <div class="callout tip">
                    <strong>Strategy:</strong> Consider your canton choice carefully when deciding where to live. A 13% tax rate (Zug) vs. 26% (Basel-Stadt) is a 13 percentage point difference. Over a 30-year career earning 80,000 CHF, that's a difference of hundreds of thousands of CHF. Also maximize your third pillar contributions early.
                </div>

                <h2>Official sources</h2>
                <ul>
                    <li><a href="https://www.swisstaxadvisor.ch" target="_blank" rel="noopener noreferrer">Swiss tax comparison tool</a></li>
                    <li><a href="https://www.estv.admin.ch/" target="_blank" rel="noopener noreferrer">ESTV (Federal Tax Administration)</a></li>
                </ul>
            </div>
        `

    },

    // 6. Impuesto a la fuente
    "articulo-impuesto-fuente": {
        title: "Withholding tax (Quellensteuer) explained",
        description: "What is withholding tax, who is affected, and how it's calculated in Switzerland for foreign residents.",
        keywords: "withholding tax switzerland, quellensteuer, swiss income tax for foreigners",
        audience: 'worker',
        featuredImage: "media/guides/impuesto-fuente-suiza.jpg",
        category: `Withholding Tax`,
        hub: 'impuestos',
        readingTime: 3,
        dateUpdated: 'Actualizado recientemente',
        summary: `How direct tax deduction from the monthly payroll works for foreigners and cross-border commuters.`,
        content: `<div class="article-content"> 
<p>The majority of Swiss citizens and permanent residents (Permit C) fill out their income tax return once a year and pay taxes afterwards. However, for newly arrived foreigners there is the <strong>Source Tax</strong>.</p> 

<h2>Who is subjected?</h2> 
<p>It mainly affects foreign workers who have a <strong>L or B</strong> residence permit and border workers (G Permit) from some countries.</p> 

<h2>How does it work?</h2> 
<p>Your Swiss employer deducts this tax directly from your gross salary each month, in the same way that personal income tax withholding on the payroll works in Spain. The employer then transfers this money to the canton's tax administration. The rates applied depend on your Marital Status, the number of dependent children, whether your spouse works, and the tables of the corresponding canton (rates A, B, C...).</p> 

<h2>Amending tax return</h2> 
<p>Depending on your canton, until March of the following year you may have the right to request a <em>correction of the source tax</em> if you have incurred expenses that are deductible (such as 3rd pillar pension plans, childcare expenses, donations, educational recycling).<br/> 
<strong>Important limit:</strong> Those people with a B permit who exceed an annual gross salary threshold of 120,000 CHF are obliged by default to file an ordinary income tax return, although they continue to be withheld month by month on account of the definitive.</p> 
</div>`
    },

    // 7. Seguros Sociales
    "articulo-seguros-sociales": {
        title: "Social security in Switzerland: AVS, AI, LPP and Unemployment Insurance",
        description: "A comprehensive breakdown of the Swiss social security system: the three pillars (AVS/AI and LPP) and unemployment insurance.",
        keywords: "social security switzerland, AHV, AVS, LPP, 3 pillars system switzerland, swiss pensions",
        audience: 'worker',
        category: 'Work',
        hub: 'trabajo',
        slug: "social-security-pensions-switzerland",
        readingTime: 6,
        featuredImage: "media/guides/seguros-sociales-suiza.jpg",
        imageAlt: "A conceptual illustration of the three pillars of the Swiss pension system (AVS, LPP, 3rd pillar)",
        summary: "The Swiss pension system is built on 3 pillars: the AVS (state-run), the LPP (mandatory occupational pension), and the 3rd pillar (private savings).",
        content: `
            <div class="article-content">
                <p>A portion of your gross salary is automatically deducted to fund the social security system. Switzerland bases its old-age provision on a unique <strong>three-pillar</strong> model.</p>

                <h2>1st Pillar: AVS and AI (Old-Age and Survivors' Insurance, Disability Insurance)</h2>
                <p>This is a state-run redistribution system mandatory for all residents and workers. Its goal is to guarantee a basic subsistence level in old age or in case of death or disability.<br/>
                <strong>Contribution:</strong> Generally, it amounts to about 10.6% of your salary. The employer pays half (5.3%) and you pay the other half. It is deducted directly from your monthly payroll.</p>

                <h2>2nd Pillar: LPP or Pension Fund (Occupational Pension)</h2>
                <p>Starting from January 1st following your 17th birthday (for risk coverage) and 24th birthday (for retirement savings), if your salary exceeds a certain threshold, you contribute to this private capitalization fund.
                The objective is that, combined with the first pillar, you can maintain a standard of living close to what you had during your working years. This money belongs to you and accumulates in an individual account with interest. If you leave Switzerland permanently to move outside of Europe, you may sometimes be able to reclaim part of these funds.</p>

                <h2>Unemployment Insurance (ALV/AC)</h2>
                <p>Contributions to unemployment insurance are also mandatory (half paid by the employee and half by the employer). If you lose your job after having contributed for at least 12 months, this system will pay approximately 70% or 80% (if you have children) of your last insured salary, provided you can demonstrate active efforts to find new employment.</p>

                <h2>General Summary:</h2>
                <p>When you receive an employment contract with a gross monthly figure, your net salary is what remains after deducting AVS/AI, the occupational pension (LPP), unemployment insurance, and (in many cases) withholding tax at source.</p>
            </div>
        `
    },

    // 7b. RAV / unemployment
    "articulo-rav-paro": {
        title: "Unemployment in Switzerland: how RAV and unemployment insurance work, requirements and steps",
        description: "Practical guide to Swiss unemployment insurance (ALV/AC): requirements, deadlines, RAV registration, obligations and sanctions.",
        keywords: "RAV Switzerland, unemployment Switzerland, joblessness Switzerland, ALV AC, unemployment insurance Switzerland",
        category: "Work",
        hub: "trabajo",
        slug: "unemployment-rav-switzerland",
        readingTime: 12,
        dateUpdated: "March 2026",
        featuredImage: "media/guides/rav-paro-suiza.jpg",
        imageAlt: "RAV office in Switzerland with advisors helping candidates with their job search",
        summary: "If you lose your job in Switzerland, RAV (and the unemployment fund) can cover part of your salary, but it requires deadlines and demonstrable job search.",
        content: `
            <div class="article-content">
                <h2>Introduction</h2>
                <p>In Switzerland, "unemployment" (unemployment insurance ALV/AC) is a very useful system, but <strong>demanding</strong>. It is not just about "registering": it is based on documentation, deadlines and demonstrable job search. Also, there are two distinct actors and it is worth understanding them from day one:</p>
                <ul>
                    <li><strong>RAV / ORP:</strong> the regional placement office (monitoring, strategy, appointments and control).</li>
                    <li><strong>Unemployment fund (Kasse / caisse):</strong> evaluates your eligibility and <strong>pays</strong> the benefit.</li>
                </ul>
                <p>Details (for example, how to request an appointment, specific forms or frequency of monitoring) can vary by <strong>canton</strong> and office. The general logic is common throughout Switzerland.</p>

                <div class="callout warning">
                    <strong>Clear message:</strong> if your contract ends in 2–4 weeks, start saving proof of job search today. Many cases are complicated by not being able to demonstrate "what you did" before the last day.
                </div>

                <h2>How the system works</h2>
                <h3>1) What is paid (practical explanation)</h3>
                <p>The benefit is calculated based on your insured salary and is normally paid in the form of <strong>daily allowances</strong>. As a rough figure, the rate is usually about <strong>70%</strong> of insured salary, or <strong>80%</strong> in certain cases (for example, with dependent children). There are maximum limits and specific rules about bonuses, extra pay, part-time work, etc.</p>
                <p>The unemployment fund is who makes the exact calculation with your documents. Do not take percentages as a "promise": use them to plan your budget.</p>

                <h3>2) RAV (control and reintegration) vs fund (payment)</h3>
                <p>The RAV controls that you comply with obligations: applications, availability, interviews and measures (training, programs, internships). The fund verifies eligibility and makes the payment. You can be registered with the RAV and, at the same time, have payment blocked if documents are missing or if there are sanctions.</p>

                <h3>3) The monthly cycle (what they actually ask of you)</h3>
                <p>In many cases, the "rhythm" of the system feels like this:</p>
                <ul>
                    <li>You submit a <strong>list of job applications</strong> with proof (and, sometimes, control forms) by the stated deadline.</li>
                    <li>You have <strong>appointments</strong> with your RAV advisor and must arrive prepared (updated CV, researched offers, strategy).</li>
                    <li>If you work a few days or part-time, you report it and the benefit is adjusted according to income.</li>
                </ul>
                <p>Additionally, there may be <strong>waiting days</strong> or specific details depending on your situation. Do not leave it to intuition: ask your fund what dates and documents determine your first payment.</p>

                <h3>4) Intermediate income</h3>
                <p>A key point: accepting temporary or part-time work while unemployed can be positive. In some cases, the system compensates for part of the difference between your previous salary and the new income. Always ask the fund how to report these earnings and what impact it has on your entitlement.</p>

                <h2>Requirements and rules</h2>
                <h3>1) Typical requirements (overview)</h3>
                <p>The exact entitlement depends on the situation, but normally revolves around:</p>
                <ul>
                    <li>Having <strong>paid in</strong> the minimum required time within the reference period.</li>
                    <li>Being <strong>unemployed</strong> or with recognized reduction, and being <strong>able</strong> to work.</li>
                    <li>Being <strong>placeable:</strong> available and willing to accept reasonable work.</li>
                    <li>Conducting <strong>active and demonstrable</strong> job search.</li>
                </ul>

                <h3>2) Documents you will typically be asked for</h3>
                <p>Prepare an "unemployment file" with:</p>
                <ul>
                    <li>Identity document and residence permit.</li>
                    <li>Employment contract and <strong>termination letter</strong> or confirmation of end of contract.</li>
                    <li>Recent payslips, salary certificates if applicable, bank details (IBAN).</li>
                    <li>Fund form(s) and proof of your job search.</li>
                    <li>Documents for special situations (for example, illness, maternity, reduced hours, etc.).</li>
                </ul>
                <p>If you are ill during the process, providing a <strong>medical certificate</strong> is usually essential and must be reported immediately: it affects your availability and obligations.</p>

                <h3>3) Job search: quantity and quality</h3>
                <p>In Switzerland, a <strong>regular</strong> and organized job search is expected. The minimum number of applications can vary by situation and canton. What usually matters is not just the quantity, but:</p>
                <ul>
                    <li>That applications are <strong>reasonable</strong> (positions compatible with your profile and market).</li>
                    <li>That you keep <strong>proof</strong> (emails, PDFs, website screenshots).</li>
                    <li>That you respond to offers "assigned" by RAV and do not leave messages unanswered.</li>
                </ul>

                <h3>4) Resignation, "negotiated end" and sanctions</h3>
                <p>If you resign voluntarily or there is an end of contract "negotiated" without objective cause, there may be <strong>sanction days</strong> (periods without payment). It does not mean you "never get paid", but the system penalizes avoidable decisions. If there is a serious reason (health, harassment, substantial changes), document and consult before acting.</p>

                <h2>Concrete examples</h2>
                <h3>Example 1 — Termination with notice</h3>
                <p>You are told today that in one month you are done. You start applications now, save proof, request your work certificate (Arbeitszeugnis) and prepare the file. When you register, you can demonstrate prior job search and avoid discussions about "inactivity".</p>

                <h3>Example 2 — End of temporary contract</h3>
                <p>Even though it is "end of contract" and not "termination", the system expects the same logic: documented job search, timely registration, availability and respect for deadlines.</p>

                <h3>Example 3 — You find a part-time job for 2 months</h3>
                <p>You accept temporary work while continuing to look for something stable. You inform RAV/fund, report income and maintain obligations. In many cases, it is better for your file than refusing opportunities because "they are not perfect".</p>

                <h2>Common mistakes</h2>
                <ul>
                    <li><strong>Registering late:</strong> waiting "to see if something comes up" and losing days or complicating the file.</li>
                    <li><strong>No proof:</strong> saying "I sent CVs" without screenshots or emails usually ends in sanctions.</li>
                    <li><strong>Missing appointments:</strong> missing an appointment without justification can cost sanction days.</li>
                    <li><strong>Traveling without permission:</strong> leaving the country without coordinating can be considered lack of availability.</li>
                    <li><strong>Not responding</strong> to RAV proposals or rejecting "reasonable" work without solid reason.</li>
                </ul>

                <h2>Practical advice</h2>
                <ul>
                    <li>Organize your job search like a job: calendar, fixed hours and tracking in a spreadsheet.</li>
                    <li>Prepare the "Swiss file": CV, cover letter, diplomas and certificates. Use practical job search guides.</li>
                    <li>Save money: the first payment can take time and there may be adjustments. Avoid being left without a buffer.</li>
                    <li>Make "RAV-proof applications": save PDFs, emails and screenshots with dates. An application without proof usually counts as "not made".</li>
                    <li>Connect your unemployment situation with permits and procedures: permits, source tax if applicable.</li>
                </ul>

                <h2>Official sources</h2>
                <ul>
                    <li><a href="https://www.ch.ch/en/work/unemployment/" target="_blank" rel="noopener noreferrer">ch.ch — Unemployment</a></li>
                    <li><a href="https://www.seco.admin.ch" target="_blank" rel="noopener noreferrer">SECO — State Secretariat for Economic Affairs</a></li>
                </ul>

                <h2>Related articles</h2>
                <ul>
                    <li>Searching for work in Switzerland</li>
                    <li>Employment contracts in Switzerland</li>
                    <li>Social insurance in Switzerland</li>
                </ul>
            </div>
        `

    },

    // 8. Salarios por sector y región
    "articulo-salarios": {
        title: "Salaries in Switzerland by sector and region",
        description: "Explore average salaries in Switzerland by sector and region, and use the official Salarium calculator.",
        keywords: "salaries switzerland, average wage switzerland, salarium, minimum wage geneva",
        category: 'Job Market',
        hub: 'trabajo',
        slug: "salaries-in-switzerland-by-sector",
        readingTime: 5,
        featuredImage: "media/guides/salarios-sueldo-suiza.jpg",
        imageAlt: "A financial graph showing Swiss salary growth compared to other European countries",
        summary: "Switzerland has high salaries but living costs to match. It is crucial to understand that your real purchasing power will depend on what you earn against the fixed expenses of your canton.",
        content: `
            <div class="article-content">
                <p>Salaries in Switzerland are among the highest in the world, but so is the cost of living. It is crucial to understand that your real purchasing power will depend on what you earn against the fixed expenses of your canton.</p>

                <h2>Is there a legal minimum wage in Switzerland?</h2>
                <p>At the federal level <strong>there is no</strong> interprofessional minimum wage. However, some cantons have introduced their own minimum hourly wages. For example, Geneva or Neuchâtel have legal minimum wages of around CHF 23-24 per hour (about CHF 4,100 gross per month full-time).</p>

                <h2>The Salarium calculator</h2>
                <p>If you want to know if a job offer is fair for your sector, experience, age and canton, the most reliable tool is the <strong>Salarium</strong>, an official statistical calculator maintained by the Federal Statistical Office (OFS).</p>

                <div class="callout info">
                    <strong>Useful link:</strong> <a href="https://www.bfs.admin.ch/bfs/en/home/statistics/work-income/wages-income-employment-costs/wage-levels-switzerland/salarium.html" target="_blank">Salarium - Salary Calculator</a>
                </div>

                <h2>Collective Agreements (CCT)</h2>
                <p>Many sectors (hospitality, construction, hairdressing) are governed by Collective Labor Contracts (CCT / GAV). These contracts establish mandatory minimum wages, number of vacation days and payment of overtime, offering solid protection to the worker.</p>
            </div>
        `
    },

    // 9. Contratos de trabajo
    "articulo-contratos": {
        title: "Employment contracts in Switzerland: rights & obligations",
        description: "Everything you need to know about Swiss employment contracts, rights, and legal holidays.",
        keywords: "employment contract switzerland, worker rights switzerland, holiday allowance switzerland, code of obligations",
        category: 'Contracts',
        hub: 'trabajo',
        slug: "employment-contracts-switzerland-rights",
        readingTime: 4,
        featuredImage: "media/guides/contratos-de-trabajo-suiza.jpg",
        imageAlt: "A formal Swiss employment contract on a wooden table with a fountain pen",
        summary: "The Swiss labor market is very flexible and conditions are fundamentally governed by the Code of Obligations (CO) and Collective Labor Agreements (CCT).",
        content: `
            <div class="article-content">
                <p>The Swiss labor market is very flexible and conditions are fundamentally governed by the Code of Obligations (CO) and Collective Labor Agreements (CCT).</p>

                <h2>Types of contract</h2>
                <ul>
                    <li><strong>Indefinite Contract (CDI):</strong> The most common. It has no end date and allows the employer or employee to terminate it, always respecting the agreed or legal notice period.</li>
                    <li><strong>Fixed-Term Contract (CDD):</strong> It is signed for a specific duration (e.g., winter season, maternity replacement).</li>
                    <li><strong>Temporary Work:</strong> Through agencies (Adecco, Manpower...), subject to specific rules on contributions and very flexible notice.</li>
                </ul>

                <h2>Working Hours and Vacation</h2>
                <p>By law, every worker in Switzerland is entitled to a <strong>minimum of 4 weeks</strong> of paid vacation per year (5 weeks if under 20 years of age). The "full-time" working day usually ranges between 40 and 45 hours per week.</p>

                <h2>Illness and Accidents</h2>
                <p>Almost all large employers have insurance for loss of earnings in case of illness that ensures you receive your salary while you recover. In addition, the employer compulsorily pays <strong>occupational accident insurance</strong>.</p>
            </div>
        `
    },

    // 10. Periodo de prueba
    "articulo-periodo-prueba": {
        title: "Probationary period and notice periods in Switzerland",
        description: "Understand your rights during the probationary period and standard notice periods in Switzerland.",
        keywords: "probation period switzerland, notice period switzerland, termination, labor law",
        category: 'Work',
        hub: 'trabajo',
        slug: "probation-period-notice-switzerland",
        readingTime: 3,
        featuredImage: "media/guides/periodo-prueba-preaviso-suiza.jpg",
        imageAlt: "A clock and a calendar next to an employment contract, symbolizing the expiration of the notice period in Switzerland",
        summary: "The standard probation period is between 1 and 3 months. During this time, either party can terminate the contract with a 7-day notice period.",
        content: `
            <div class="article-content">
                <h2>The Probation Period (Probezeit / Temps d'essai)</h2>
                <p>The first month of an indefinite contract is always considered a trial period by law, unless specified otherwise. This period may be extended in writing up to a <strong>maximum of three months</strong>.</p>
                <p>During this time, both parties can cancel the contract with <strong>seven days' notice</strong> (calendar) and it is not necessary to provide further justification.</p>

                <h2>Notice Periods (Kündigungsfrist / Délai de congé)</h2>
                <p>Once the trial period has passed, legal deadlines or those agreed by written contract (or CCT) apply. According to the Code of Obligations, the general framework is:</p>
                <ul>
                    <li><strong>1st year of service:</strong> 1 month (notice for the end of the month).</li>
                    <li><strong>2nd to 9th year:</strong> 2 months (notice for the end of the month).</li>
                    <li><strong>From the 10th year:</strong> 3 months (notice for the end of the month).</li>
                </ul>

                <div class="callout info">
                    <strong>Important:</strong> The notice must always reach your boss BEFORE the last working day of the month so that the following month begins to count.
                </div>
            </div>
        `
    },

    // 11. Búsqueda de empleo
    "articulo-buscar-empleo": {
        title: "Job searching in Switzerland: Platforms and Strategies",
        description: "Where to find jobs in Switzerland, how to build a Swiss-style CV, and the most effective recruitment platforms.",
        keywords: "job search switzerland, swiss cv, jobup, jobs.ch, employment platforms",
        category: 'Applications',
        hub: 'trabajo',
        slug: "job-search-switzerland-platforms",
        readingTime: 4,
        featuredImage: "media/guides/buscar-empleo-suiza.jpg",
        imageAlt: "A person searching for jobs in Switzerland on a laptop in a cafe with a view of Zurich while reviewing their CV",
        summary: "In Switzerland, a huge share of offers is published on local portals and in the language of the canton. Having a clear list of websites and adapting keywords often makes the difference.",
        content: `
            <div class="article-content">
                <p>In Switzerland, a huge share of offers is published on local portals and in the language of the canton. Having a clear list of websites and adapting keywords often makes the difference.</p>
                <p>If you're planning to relocate, see also <a href="#/mudarse-a-suiza-desde-espana">Moving to Switzerland from Spain: step-by-step guide</a>.</p>

                <h2>Main job portals in Switzerland</h2>
                <ul>
                    <li><a href="https://www.jobs.ch/" target="_blank" rel="noopener noreferrer">jobs.ch</a></li>
                    <li><a href="https://www.jobup.ch/" target="_blank" rel="noopener noreferrer">jobup.ch</a></li>
                    <li><a href="https://ch.indeed.com/" target="_blank" rel="noopener noreferrer">indeed.ch</a></li>
                    <li><a href="https://www.job-room.ch/" target="_blank" rel="noopener noreferrer">job-room.ch</a> (RAV portal)</li>
                </ul>

                <div class="callout info">
                    <strong>Practical tip</strong>
                    <p>In Switzerland it's often more effective to search in the local language. Instead of searching in Spanish, try searching directly in German, French or Italian.</p>
                    <p><strong>Google example:</strong> <code>Glaser Arbeit Zürich</code></p>
                </div>

                <h3>Useful links</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch</a></li>
                    <li><a href="https://www.arbeit.swiss/" target="_blank" rel="noopener noreferrer">arbeit.swiss</a> (RAV / SECO)</li>
                </ul>
            </div>
        `
    },

    // 12. Alquiler de vivienda
    "articulo-alquiler": {
        title: "Renting a home in Switzerland: the process step by step",
        description: "Required documents (credit report) and the file you need to provide to landlords. Costs, deductions, deposits and your rights as a tenant.",
        keywords: "rent apartment Switzerland, rent housing Switzerland, apartment search Switzerland, tenant rights Switzerland, deposit Switzerland",
        category: "Housing",
        hub: "vivienda",
        slug: "rent-housing-switzerland",
        readingTime: 7,
        dateUpdated: "March 2026",
        featuredImage: "media/guides/alquilar-vivienda-suiza.jpg",
        imageAlt: "Apartment building in Switzerland with balconies and typical Swiss architecture",
        summary: "The rental market in Switzerland is competitive and landlords request extensive documentation. The key document is the 'Betreibungsauszug' (credit report). Rents include all costs and cannot be easily increased.",
        content: `
            <div class="article-content">

                <h2>The rental market in Switzerland</h2>
                <p>The Swiss rental market is <strong>very competitive</strong> and <strong>strictly regulated</strong>. Landlords have many candidates and are selective. Tenants have strong legal protections, but getting a good apartment requires a well-prepared file.</p>

                <p>What you should know from the start:</p>
                <ul>
                    <li>Rents are <strong>all-inclusive:</strong> utilities (heating, water, electricity) are included in the rent. You pay only your share if it is a shared apartment.</li>
                    <li>Rent increases are <strong>limited by law:</strong> landlords cannot raise rent at will. There are maximum allowed increases based on mortgage rates and inflation.</li>
                    <li>Deposits are <strong>protected:</strong> the landlord cannot simply keep your deposit. It must be returned in full unless there is documented damage.</li>
                </ul>

                <h2>The search: where and how</h2>
                <p>Main platforms:</p>
                <ul>
                    <li><a href="https://www.immoscout24.ch" target="_blank" rel="noopener noreferrer">ImmoScout24.ch</a> — the largest platform, comprehensive listings.</li>
                    <li><a href="https://www.homegate.ch" target="_blank" rel="noopener noreferrer">HomeGate.ch</a> — also very complete, often has different listings.</li>
                    <li><a href="https://www.ronorp.ch" target="_blank" rel="noopener noreferrer">ronorp.ch</a> — aggregator that pulls listings from multiple sites.</li>
                    <li>Local newspaper classifieds and direct landlord websites.</li>
                </ul>
                <p>Search by: language (your canton's language increases results), postal code (not just city), and budget. In major cities, 1-bedroom apartments in 2026 range from 1,500–2,500 CHF depending on location.</p>

                <h2>The essential file: what landlords request</h2>
                <p>When you contact a landlord about an apartment, they will ask for your "dossier" (file). Have this ready:</p>

                <h3>1. Betreibungsauszug (credit report) — THE KEY DOCUMENT</h3>
                <p>This is non-negotiable. It is a certified report from the debt collection office (Betreibungsamt) stating whether you have outstanding debts, liens, or payment arrears. A clean Betreibungsauszug is essential.</p>
                <p>How to get one: visit your local debt collection office (free or very cheap) or order online via your canton's website. You can request a digital copy that you can send to landlords. It is valid for about 6 months.</p>

                <h3>2. Work contract (copy)</h3>
                <p>Your current employment contract showing your position, salary and employer. This proves you have stable income to pay rent.</p>

                <h3>3. Recent pay slips (last 2–3 months)</h3>
                <p>Proof of income. Landlords typically require that your monthly rent does not exceed 30% of gross salary. If you earn 5,000 CHF, the apartment should ideally cost no more than 1,500 CHF.</p>

                <h3>4. Previous tenancy references (if available)</h3>
                <p>A letter or contact from your previous landlord confirming you were a good tenant: paid on time, no damage, etc. If you are new to Switzerland, this is often not available, but having one if possible helps.</p>

                <h3>5. ID or passport (copy)</h3>
                <p>Proof of identity.</p>

                <h3>6. Lease agreement from your previous apartment (if applicable)</h3>
                <p>Shows you have rented before and were responsible.</p>

                <div class="callout tip">
                    <strong>Professional touch:</strong> gather all these documents in a single PDF file with your name in the filename. Send it with a professional short cover letter (not long: landlords receive hundreds). This makes a good impression and shows you are organized.
                </div>

                <h2>The rental contract</h2>
                <p>Once the landlord accepts you, you sign a lease (Mietvertrag). Key points:</p>
                <ul>
                    <li><strong>Rental period:</strong> typically monthly with 3 months' notice to terminate. After the first year, either party can end the lease with 3 months' notice (or 1–2 months depending on canton).</li>
                    <li><strong>Rent amount:</strong> clearly stated. Any increases must follow legal limits (usually announced 3 months in advance).</li>
                    <li><strong>Deposit:</strong> typically 1–2 months' rent, held in a protected account. Must be returned in full unless there is documented damage.</li>
                    <li><strong>Utilities included or not:</strong> the contract clarifies what is included (usually heating, water, garbage) and what you pay separately (electricity, internet).</li>
                    <li><strong>Prohibited actions:</strong> subletting, significant renovations without permission, etc.</li>
                </ul>

                <h2>Costs when renting</h2>
                <p>What you pay when you move in:</p>
                <ul>
                    <li>First month's rent (due on the start date).</li>
                    <li>Security deposit (1–2 months' rent).</li>
                    <li>Occasionally, a small "inventory" fee for documenting the apartment's condition.</li>
                </ul>
                <p>Utilities: check the contract. Usually, heating and water are included in rent. Electricity, internet and phone are separate.</p>

                <h2>Tenant rights</h2>
                <p>As a tenant in Switzerland, you have strong protections:</p>
                <ul>
                    <li><strong>Rent increases are limited:</strong> maximum annual increase tied to mortgage rate index and inflation. Landlord must provide written notice 3 months in advance.</li>
                    <li><strong>Eviction requires cause:</strong> landlord cannot evict without valid reason (non-payment, serious violations, etc.) and must provide legal notice.</li>
                    <li><strong>Deposit protection:</strong> deposits must be in a protected account (not the landlord's personal account). Landlord must return it within 30 days of your move-out, minus only documented repairs.</li>
                    <li><strong>Right to occupy:</strong> you have the right to quiet enjoyment of the apartment. Landlord cannot enter without notice except in emergencies.</li>
                </ul>

                <h2>Moving out</h2>
                <p>When you leave:</p>
                <ul>
                    <li>Provide notice according to the contract (usually 3 months).</li>
                    <li>Clean the apartment thoroughly. Many landlords require professional cleaning (at your cost).</li>
                    <li>Document the condition: photos, list of any wear and tear.</li>
                    <li>The landlord cannot deduct normal wear and tear from your deposit, only damage.</li>
                </ul>

                <div class="callout warning">
                    <strong>Deposit disputes:</strong> if the landlord claims damage and wants to deduct from your deposit, ask for itemized costs and photos. Most deposit disputes can be resolved through mediation. Do not let your landlord keep more than legitimate repair costs.
                </div>

                <h2>Avoiding scams</h2>
                <p>Be cautious of:</p>
                <ul>
                    <li>Landlords asking for payment in advance (red flag).</li>
                    <li>Listings far below market price (often fake).</li>
                    <li>Requests to pay "reservation fees" (not standard in Switzerland).</li>
                    <li>Landlords unwilling to sign a proper lease.</li>
                </ul>

                <h2>Official sources</h2>
                <ul>
                    <li><a href="https://www.ch.ch/en/housing/renting/" target="_blank" rel="noopener noreferrer">ch.ch — Renting</a></li>
                    <li><a href="https://www.taa.ch/" target="_blank" rel="noopener noreferrer">TAA (Swiss Tenants' Association)</a> — legal advice for tenants</li>
                </ul>
            </div>
        `

    },

    // 13. Fianzas de alquiler
    "articulo-fianzas": {
        title: "Rental deposits and tenant rights in Switzerland",
        description: "How rental guarantees (Mietkaution) work in Switzerland, security deposits, and how to protect your rights as a tenant with ASLOCA.",
        keywords: "rental deposit switzerland, swisscaution, asloca, rental guarantee, tenant rights switzerland",
        audience: 'resident',
        featuredImage: "media/guides/fianzas-alquiler-suiza.jpg",
        imageAlt: "A piggy bank and a house key, representing a rental security deposit",
        category: `Housing`,
        hub: 'vivienda',
        slug: "rental-deposits-tenant-rights",
        readingTime: 4,
        summary: "The maximum legal deposit for residential rentals is 3 months' rent. You can pay it in cash into a blocked account or use a guarantee insurance service.",
        content: `
            <div class="article-content">
                <h2>The Security Deposit (<i>Garantie de Loyer / Mietkaution</i>)</h2>
                <p>By law, a landlord can request a security deposit (bond) to cover any potential damages or unpaid rent. For residential properties, this deposit is capped at a maximum of <strong>3 months' rent</strong>.</p>
                <div class="callout info">
                    <strong>Important:</strong> This money is never handed directly to the landlord. It is deposited in a specialized "Rent Guarantee Bank Account" opened in your name but blocked. It can only be released at the end of the tenancy with the joint signature of both the tenant and the landlord.
                </div>

                <h2>Guarantee Insurance: An alternative to cash</h2>
                <p>If you don't want to tie up several thousand francs in a blocked account, you can use specialized insurance companies like <strong>SwissCaution</strong>, <strong>Firstcaution</strong>, or <strong>goffrance</strong>.</p>
                <ul>
                    <li><strong>How it works:</strong> You pay a non-refundable annual premium (usually around 5% of the total deposit amount).</li>
                    <li><strong>Benefit:</strong> The company provides a certificate to the agency as a guarantee, allowing you to keep your savings for other moving expenses.</li>
                </ul>

                <h2>Defending your rights: ASLOCA and Mieterverband</h2>
                <p>The Swiss rental system is highly regulated but can be complex for newcomers. Disagreements over repairs or the return of the deposit at the end of a lease are common.</p>
                <p>It is strongly recommended to join your local tenant association:</p>
                <ul>
                    <li><strong><a href="https://www.asloca.ch/" target="_blank" rel="noopener noreferrer">ASLOCA</a>:</strong> Serves the French and Italian-speaking regions.</li>
                    <li><strong><a href="https://www.mieterverband.ch/" target="_blank" rel="noopener noreferrer">Mieterverband</a>:</strong> Serves the German-speaking region.</li>
                </ul>
                <p>For a small annual membership fee (approx. 80-100 CHF), they offer legal advice, contract reviews, and support in mediation hearings.</p>
            </div>
        `
    },

    // 14. Costo de vida
    "articulo-costo-vida": {
        title: "Cost of living in Switzerland: Monthly budget and prices",
        description: "A detailed breakdown of the cost of living in Switzerland. Examples of monthly budgets for singles and families, including rent, insurance, and food.",
        keywords: "cost of living switzerland, swiss prices, monthly budget switzerland, how expensive is switzerland",
        audience: 'resident',
        featuredImage: "media/guides/presupuesto-suiza.png",
        imageAlt: "A selection of Swiss products and bills, representing the cost of living",
        category: `Cost of Living`,
        hub: 'vivir-en-suiza',
        slug: "cost-of-living-switzerland",
        readingTime: 6,
        summary: "While Swiss salaries are high, the expenses are equally significant. Understanding the breakdown of fixed costs is crucial for financial planning.",
        content: `
            <div class="article-content">
                <p>Switzerland is consistently ranked as one of the most expensive countries in the world. However, high costs are balanced by the world's highest median salaries. To understand if a salary is "good," you must first look at what remains after fixed monthly expenses.</p>

                <h2>Is Switzerland really that expensive?</h2>
                <p>Yes, especially when it comes to services (restaurants, hair salons, repairs) and mandatory insurance. However, the <strong>purchasing power</strong> of a resident in Switzerland is generally higher than in most other European countries once the "fixed" bills are paid.</p>

                <h2>Sample Monthly Budget (Single Person)</h2>
                <p>Indicative monthly expenses for a single person in an urban area (excluding taxes):</p>
                <table class="info-table">
                    <thead><tr><th>Expense</th><th>Amount (CHF)</th></tr></thead>
                    <tbody>
                        <tr><td>Rent (1.5 - 2.5 rooms)</td><td>1,400 - 1,900</td></tr>
                        <tr><td>Basic Health Insurance (LAMal)</td><td>350 - 450</td></tr>
                        <tr><td>Groceries & Household</td><td>500 - 700</td></tr>
                        <tr><td>Transport (Local pass)</td><td>70 - 100</td></tr>
                        <tr><td>Internet / Mobile / Billag</td><td>120 - 150</td></tr>
                        <tr><td>Leisure / Eating out</td><td>300 - 500</td></tr>
                        <tr><td><strong>Total Estimated</strong></td><td><strong>2,740 - 3,800</strong></td></tr>
                    </tbody>
                </table>

                <h2>Sample Monthly Budget (Family of 4)</h2>
                <p>Indicative expenses for a couple with two children:</p>
                <table class="info-table">
                    <thead><tr><th>Expense</th><th>Amount (CHF)</th></tr></thead>
                    <tbody>
                        <tr><td>Rent (4.5 rooms)</td><td>2,400 - 3,500</td></tr>
                        <tr><td>Health Insurance (Total family)</td><td>900 - 1,200</td></tr>
                        <tr><td>Groceries & Supermarket</td><td>1,200 - 1,600</td></tr>
                        <tr><td>Schooling / Extracurricular</td><td>200 - 500</td></tr>
                        <tr><td>Household / Utilities</td><td>200 - 350</td></tr>
                        <tr><td><strong>Total Estimated</strong></td><td><strong>4,900 - 7,150</strong></td></tr>
                    </tbody>
                </table>

                <h2>Regional Differences: City vs. Countryside</h2>
                <p>Costs vary significantly depending on where you choose to live:</p>
                <ul>
                    <li><strong>Expensive Hubs:</strong> Zurich and Geneva have the highest rents and insurance premiums in the country.</li>
                    <li><strong>Suburban/Rural:</strong> Cantons like Glarus, Appenzell, or parts of Fribourg offer significantly cheaper housing, though you may face higher transport costs for commuting.</li>
                    <li><strong>Tax Paradises:</strong> Cantons like Zug or Schwyz have much lower income taxes, which often offsets the higher rents in those areas.</li>
                </ul>

                <h2>The Economic Surplus: Why salaries compensate</h2>
                <p>The "Swiss secret" is that while a coffee might cost 5 CHF, your ability to save 10% of a 6,000 CHF salary yields 600 CHF—a much higher absolute value for traveling or personal projects than saving 10% of a 1,500 EUR salary elsewhere.</p>
            </div>
        `
    },

    // 15. Trabajadores fronterizos (frontaliers)
    "articulo-frontaliers": {
        title: "Cross-border workers (frontaliers): rules & taxes",
        description: "Guide for cross-border workers: taxes, health insurance, and rules for working in Switzerland while living abroad.",
        keywords: "cross-border worker switzerland, permit G, frontalier taxes, living in france working in switzerland",
        featuredImage: "media/guides/trabajadores-fronterizos-suiza.jpg",
        category: `Cross-border`,
        hub: 'fronterizos',
        readingTime: 4,
        summary: `The G permit allows you to live abroad and work in Switzerland.`,
        
        content: `<div class="article-content"> 
<p>The <em>frontaliers</em> are people who reside permanently in a neighboring country (mainly France, Germany and Italy) and cross the border to work in Switzerland.</p> 

<h2>The G Permit</h2> 
<p>To work in this modality, you need a <strong>G Permit (Border Work Permit)</strong>. A key condition to maintain it is that you must return to your main residence abroad at least once a week (most do so daily).</p> 

<h2>Frontalier Taxation</h2> 
<p>Tax rules vary greatly depending on the canton where you work and your country of residence (due to double taxation treaties).</p> 
<ul> 
<li><strong>Geneva:</strong> If you live in France and work in Geneva, the canton of Geneva withholds the tax directly from you.</li> 
<li><strong>Vaud, Neuchâtel, Jura:</strong> In these cantons, the tax is generally paid in full in France and the Swiss employer does not withhold tax from you at source (if you submit the tax residence certificate on time).</li> 
</ul> 

<h2>Health Insurance (The Right to Option)</h2> 
<p>When you start working in Switzerland, you have 3 months to exercise your "Right of Option". You can choose to insure yourself in the Swiss system (LAMal frontalier) or in the system of your country of residence (e.g. French CMU). <strong>Attention:</strong> This decision is irrevocable. If you do not choose, you will automatically be affiliated with the Swiss LAMal.</p> 
</div>`
    },

    // 16. Reconocimiento de diplomas
    "articulo-diplomas": {
        title: "Recognition of foreign diplomas",
        description: "How to get your university or professional degree recognized in Switzerland (SERI/SBFI).",
        keywords: "diploma recognition switzerland, degree validation switzerland, seri, sbfi",
        audience: 'newcomer',
        featuredImage: "media/guides/homologar-titulos-suiza.jpg",
        category: `Ordinary Procedures`,
        hub: 'tramites',
        readingTime: 3,
        summary: `Only regulated professions require mandatory recognition.`,
        content: `<div class="article-content"> 
<p>If you have a foreign qualification and want to practice in Switzerland, the first step is to know if your profession is regulated (e.g. medicine, nursing, law, teaching). If it is not regulated, official recognition is not mandatory, and the labor market will decide the value of your degree.</p> 

<h2>Regulated Professions and Competent Entities</h2> 
<p>For regulated professions, recognition is imperative. Depending on your sector, recognition is requested from a different entity:</p> 
<ul> 
<li><strong>SEFRI (Secretary of State for Training, Research and Innovation):</strong> For vocational training, commerce and pedagogical education professions (many university degrees).</li> 
<li><strong>MEBEKO (Medical Professions Commission):</strong> For doctors, dentists, veterinarians and pharmacists. Requires mastery of a national language (B2/C1).</li> 
<li><strong>Swiss Red Cross (CRS):</strong> For paramedical and non-university health professions (nursing, physiotherapy).</li> 
</ul> 

<p>The procedures incur administrative costs (hundreds of francs) and usually require sworn translations of your academic record.</p> 

<div class="callout info"> 
<strong>Source:</strong> Check which authority evaluates your diploma on the <a href="https://www.sbfi.admin.ch/sbfi/en/home/education/recognition-of-foreign-qualifications.html" target="_blank">SEFRI portal</a>. 
</div> 
</div>`
    },

    // 17. Sistema escolar suizo
    "articulo-sistema-escolar": {
        title: "The Swiss school system explained",
        description: "Guide to the Swiss school system: from kindergarten levels to the dual vocational training model.",
        keywords: "school switzerland, education switzerland, swiss school system, kindergarten switzerland",
        audience: 'family',
        featuredImage: "media/guides/sistema-escolar-suiza.jpg",
        category: `Family`,
        hub: 'tramites',
        readingTime: 5,
        summary: `The school system often steers students into vocational training.`,
        content: `<div class="article-content"> 
<p>Public education in Switzerland is free, fully compulsory for 11 years and of excellent quality. However, its structure is very cantonal (each canton defines its study plan) and has a particularity: early professional orientation.</p> 

<h2>General Structure (HarmoS Model)</h2> 
<ul> 
<li><strong>Preschool (Ecole Enfantine / Kindergarten):</strong> Starts at 4 years old. There are 2 mandatory years of preparation.</li> 
<li><strong>Primary School (Ecole Primaire / Primarschule):</strong> From 6 to 12 years old (grades 3 to 8). A second and third language (another national language and English) is quickly introduced.</li> 
<li><strong>Secondary Grade I (Cycle d'Orientation / Sekundarstufe I):</strong> From 12 to 15 years old (grades 9 to 11).</li> 
</ul> 

<h2>Segregation or "Filières"</h2> 
<p>Unlike Spain, in Switzerland around the ages of 12 or 15, students are oriented ("segregated") according to their grades and aptitudes towards two very different paths:</p> 
<ol> 
<li><strong>The vocational route (Vocational Training / Dual Learning):</strong> More than 60% of young Swiss people choose to do a "CFC" (Federal Certificate of Capacity). They work 3 or 4 days in a company learning a trade and go to class for 1 or 2 days. It is a very prestigious and remunerative path from the beginning.</li> 
<li><strong>The academic route (Gymnasium / Collège / Maturité / Matura):</strong> For those with better academic grades, preparing them to enter directly the University or the Federal Polytechnic Schools.</li> 
</ol> 
<p><em>Note:</em> The system is permeable; A vocational training student may end up gaining access to university in the future through "gateways".</p> 
</div>`
    },

    // 18. Sistema de salud (médicos y urgencias)
    "articulo-sistema-salud": {
        title: "Healthcare system in Switzerland: Doctors, hospitals and emergencies",
        description: "How to find a family doctor in Switzerland, how emergencies work, and how to pay medical bills.",
        keywords: "family doctor switzerland, medical emergency switzerland, pediatrician switzerland, swiss healthcare system, tiers-payant, tiers-garant",
        audience: 'resident',
        featuredImage: "media/guides/medicos-urgencias-suiza.jpg",
        imageAlt: "The reception area of a Swiss medical center (Permanence Médicale)",
        category: `Medical Network`,
        hub: 'salud',
        slug: "doctors-emergencies-switzerland",
        readingTime: 4,
        summary: "Avoid going to hospital emergency rooms for minor ailments. Use 'Permanences Médicales' or call your insurance's medical line if you have a managed care model.",
        content: `
            <div class="article-content">
                <p>Navigating the day-to-day practice of Swiss healthcare will help you avoid administrative headaches and unexpected costs.</p>

                <h2>Choosing a doctor according to your insurance model</h2>
                <p>The cheapest LAMal models (HMO, Telmed, or Family Doctor) come with specific rules. Usually, you cannot visit a specialist or hospital directly without first consulting your assigned primary care physician or calling your insurer's medical hotline. If you skip this mandatory step, your insurance may refuse to pay the bill.</p>
                
                <h2>Medical Emergencies (Urgences / Notfall)</h2>
                <p>Hospital emergency rooms (ER) should be reserved for life-threatening or very serious cases. In Switzerland, for non-vital but urgent care (e.g., a high fever or minor injury), it is standard to go to a <strong>Permanence Médicale</strong> (Polyclinic). They operate on a walk-in basis with much shorter wait times and significantly lower costs than a hospital.</p>

                <h2>The Payment System: Tiers-garant vs. Tiers-payant</h2>
                <p>When you visit a pharmacy or receive a medical invoice, you will encounter two different payment models:</p>
                <ul>
                    <li><strong>Tiers-garant (Direct Payment):</strong> You receive the bill at home (or pay at the pharmacy), pay it out of your own pocket, and then send the receipt/QR code to your insurer. If you have already exceeded your annual deductible, the insurer will reimburse you.</li>
                    <li><strong>Tiers-payant:</strong> The doctor or pharmacy sends the bill directly to the insurer. The insurer pays it and then issues you an invoice for your share (the deductible and co-payment).</li>
                </ul>
            </div>
        `
    },

    // 19. Transporte público y abonos
    "articulo-transporte": {
        title: "Public transport: SBB, Halbtax and GA",
        description: "Guide to Swiss public transport: SBB, Half-Fare travelcard, and GA travelcard.",
        keywords: "trains switzerland, SBB CFF FFS, half-fare card, GA, public transport",
        featuredImage: "media/guides/transporte-publico-suiza.jpg",
        category: `Public Transport`,
        hub: 'vivir-en-suiza',
        readingTime: 4,
        summary: `The Half-Fare card is almost mandatory for any resident.`,
        
        content: `<div class="article-content"> 
<p>The Swiss Confederation is proud to have one of the most dense, punctual and integrated public transport systems in the world (trains, buses, trams and boats are all in one clock).</p> 

<h2>The Swisspass</h2> 
<p>It is a physical red card (and digital in the SBB Mobile app) that acts as a support for all your ski passes and passes.</p> 

<h2>The essential subscription: The Demi-tarif / Halbtax</h2> 
<p>Buying a single train ticket is very expensive. The vast majority of residents buy a <strong>half-price annual subscription (Demi-tarif)</strong>. It costs just under 200 CHF per year and gives you the right to buy tickets at a 50% discount on Swiss trains, buses, boats and urban transport in almost all cities. It pays for itself very easily.</p> 

<h2>The General Subscription (AG / GA)</h2> 
<p>If you are an extreme <em>commuter</em> who travels by train to go to work every day, the <strong>General Subscription</strong> allows you to travel unlimitedly on any intercity train, urban train, boat and postbus in the country. It's expensive (almost CHF 4,000 per year for adults in 2nd class, but employers sometimes subsidize some of it), but it offers complete freedom ("Get on the train and forget about the ticket").</p> 

<h2>Super Saver Tickets and Community Tickets</h2> 
<p>If you buy your train tickets in the app (SBB Mobile) several weeks in advance, you can find <em>super-réduits tickets / supersaver tickets</em> with up to a 70% discount, valid exclusively for the exact time marked.</p> 
<p>In addition, many communes sell highly subsidized <em>Cartes Journalières / Tageskarten</em> locally to their neighbors.</p> 
</div>`
    },

    // 20. Ciudadanía suiza
    "articulo-ciudadania": {
        title: "Swiss Citizenship and Naturalization",
        description: "Requirements to obtain the Swiss passport, language levels, and exams.",
        keywords: "swiss citizenship, swiss naturalization, swiss passport, becoming swiss",
        audience: 'newcomer',
        featuredImage: "media/guides/nacionalidad-suiza-pasaporte.jpg",
        category: `Ordinary Procedures`,
        hub: 'tramites',
        readingTime: 5,
        summary: `Naturalization requires 10 years of residency and a C Permit.`,
        content: `<div class="article-content"> 
<p>Obtaining a passport with the white cross is not a purely bureaucratic procedure, but rather the Swiss understand it as the final confirmation of an optimal level of integration.</p> 

<h2>Requirements for Ordinary Naturalization</h2> 
<p>If you are not married to a Swiss citizen, you must follow the ordinary naturalization route, the main requirement of which is <strong>10 years of residence in Switzerland</strong> (the years between 8 and 18 count double).</p> 

<ul> 
<li>Possess an Establishment Permit (<strong>C Permit).</li> 
<li>Have resided uninterruptedly in the same canton or in the same commune for the specific minimum time that they set (varies between 2 and 5 years depending on the region).</li> 
<li><strong>Integration and language proficiency:</strong> Demonstrate written and oral ability in the national language of the canton (normally level B1 in speaking and A2 in writing accredited).</li> 
<li>Not having depended on social assistance in the last 3 years (or having repaid the money).</li> 
<li>Not have a criminal record or debts (non-payments or Betreibung paralyze the process).</li> 
</ul> 

<h2>The examination process</h2> 
<p>The procedure involves three levels of government (Community, Canton and Confederation). In most communes, you must take a written exam and an oral interview where your knowledge of Swiss civics, geography, cantonal culture and, sometimes, your relationship with neighbors is evaluated. It is in the commune where it is fundamentally decided whether your "degree of assimilation and local integration" is sufficient.</p> 

<div class="callout info"> 
<strong>SEM information:</strong> All cantons have their own procedures but respect the federal law of the <a href="https://www.sem.admin.ch/sem/en/home/themen/buergerrecht/einbuergerung/ordentliche_einbuergerung.html" target="_blank">SEM</a>. 
</div> 
</div>`
    },

    "articulo-tramites-llegada": {
        title: "First month in Switzerland: complete arrival checklist",
        description: "Everything you need to do in your first month in Switzerland, ordered by urgency: registration, health insurance, bank account, transport, post box and more.",
        keywords: "switzerland arrival checklist, first steps switzerland, newly arrived switzerland, what to do when arriving switzerland",
        category: 'Administrative Procedures',
        hub: 'tramites',
        slug: "checklist-first-month-switzerland",
        readingTime: 7,
        dateUpdated: "March 2026",
        featuredImage: "media/guides/checklist-llegada-suiza.jpg",
        imageAlt: "Swiss documents: residence permit, health insurance card, keys and checklist",
        summary: "Two situations, two different paths: if you are coming to look for work, you have no administrative obligations; if you are settling with a job contract, registering at the commune is the first mandatory step.",
        content: `
            <div class="article-content">

                <div class="callout warning">
                    <strong>Important:</strong> if you are coming to Switzerland as a tourist or to look for work, you do not need to register at the town hall or apply for any residence permit. This obligation only applies when you actually settle in the country, normally after signing an employment contract or establishing your primary residence.
                </div>

                <hr style="border:none; border-top:1px solid var(--border-light); margin: 2rem 0;">

                <h2>If you are coming as a tourist or job seeker</h2>
                <p>As an EU/EFTA citizen, you have the right to enter Switzerland and stay without any administrative formalities during your job search period. There is no registration obligation, no permit to apply for, and no deadline to respect at that stage.</p>
                <p>What is worth having in order before travelling or during your stay:</p>

                <h3>Personal documents</h3>
                <p>Bring a valid national ID card or passport. You do not need any other document to enter or move around the country.</p>

                <h3>Accommodation and transport</h3>
                <p>Decide where you will stay from day one, even provisionally. Swiss public transport is efficient and punctual. If you plan to use it intensively, the <strong>Half-Fare Card (Demi-tarif / Halbtax)</strong> — around CHF 190 per year — halves the price of all tickets across the country. It pays for itself within weeks and can be bought at <a href="https://www.sbb.ch" target="_blank" rel="noopener noreferrer">sbb.ch</a> or at any SBB/CFF ticket office.</p>

                <h3>CV and job search</h3>
                <p>The Swiss job market has its own conventions. A standard Swiss CV includes a photo, date of birth and marital status. The main platforms are <a href="https://www.jobs.ch" target="_blank" rel="noopener noreferrer">jobs.ch</a>, <a href="https://www.jobup.ch" target="_blank" rel="noopener noreferrer">jobup.ch</a> and LinkedIn. Search in the language of the canton where you want to work — this significantly increases response rates.</p>

                <h3>Health insurance while job seeking</h3>
                <p>While you are not officially residing in Switzerland, the LAMal (mandatory Swiss health insurance) does not apply to you. If you have a European Health Insurance Card or travel insurance, that is sufficient for a job-seeking stay. The obligation to take out LAMal only starts when you register as a resident.</p>

                <hr style="border:none; border-top:1px solid var(--border-light); margin: 2rem 0;">

                <h2>If you are settling (with a contract or residence)</h2>
                <p>Once you sign an employment contract or establish your effective residence in Switzerland, the administrative process begins. Deadlines are real, and missing them can result in fines.</p>

                <div class="callout info">
                    <strong>General rule:</strong> registration at the commune must be done within <strong>14 days</strong> of arrival, and in many cantons <strong>before your first day of work</strong>. The exact deadline varies by canton — always check your municipality's website.
                </div>

                <h3>1. Register at the commune (Residents Registration Office)</h3>
                <p>This is the first step and it unlocks everything else. When you register, you immediately receive a provisional residence certificate ("Attestation de résidence" / "Meldebestätigung") which has full legal validity: with it, you can start working, open a bank account and take out health insurance, even if the physical permit card takes weeks to arrive.</p>
                <p><strong>What to bring:</strong> valid ID card or passport, employment or rental contract, address where you are staying (even provisional).</p>
                <p><strong>Cost:</strong> between CHF 65 and CHF 100 depending on the canton and the type of permit requested.</p>

                <h3>2. Open a bank account</h3>
                <p>Your employer needs a Swiss IBAN to pay your salary. With the registration certificate you can go straight to the bank. If you need a working account from day one, digital options like Neon, Yuh or Revolut (Swiss account) activate in under 24 hours without an appointment. Traditional banks — PostFinance, UBS, Raiffeisen, Migros Bank — require an appointment but offer more services.</p>

                <h3>3. Take out LAMal health insurance</h3>
                <p>You have <strong>3 months</strong> from the date of registration to take out mandatory health insurance (LAMal), with retroactive effect from day one. Do not leave it until the last moment: if you have any medical issue before having it, you will still pay premiums from the start. The basic coverage is identical across all insurers; only the price differs. Compare at <a href="https://www.priminfo.admin.ch" target="_blank" rel="noopener noreferrer">Priminfo.admin.ch</a> (official federal comparison tool). The most important decision is the deductible (franchise): CHF 300 minimum (higher premium) or up to CHF 2,500 (lower premium). If you are healthy, the high deductible is generally more cost-effective.</p>

                <h3>4. Inform your employer of your family situation</h3>
                <p>If you have a partner or dependent children, your employer needs this information to apply the correct withholding tax bracket. An error here is difficult to correct retroactively.</p>

                <h3>5. Put your name on the letterbox</h3>
                <p>In Switzerland, administration runs primarily on postal mail. You will receive your permit card, insurance invoices and tax letters by post. If the letterbox does not have your name from day one, those communications may be lost or returned.</p>

                <h3>6. Learn your municipality's waste system</h3>
                <p>In many cantons, only paid official waste bags — which include the collection fee — are permitted. Using ordinary bags can result in fines. Ask in your building or at the commune from day one.</p>

                <h3>7. Get the Half-Fare Card for transport</h3>
                <p>If you use trains or public transport regularly, the <strong>Half-Fare Card (Demi-tarif / Halbtax)</strong> — around CHF 190 per year — halves the price of all tickets across the country. It pays for itself in a few weeks. Buy it at <a href="https://www.sbb.ch" target="_blank" rel="noopener noreferrer">sbb.ch</a> or at any SBB/CFF ticket office.</p>

                <h3>In the first 3 months</h3>
                <p>Once the urgent steps are done, it is worth looking into supplementary insurance (basic LAMal does not cover dentist, glasses or private hospitalisation) and the third pillar (3a), a retirement savings vehicle with significant tax benefits. The sooner you start, the more you accumulate.</p>

                <div class="callout tip">
                    <strong>Recommended order:</strong> commune registration → bank account → LAMal → inform employer → letterbox and waste → Half-Fare Card. Each step unlocks the next.
                </div>

                <h2>Common mistakes when settling in</h2>
                <p>Delaying registration "until everything is ready" and missing the deadline is the most frequent mistake, with direct consequences. Not understanding LAMal's retroactivity leads to unexpected invoices. Forgetting to put your name on the letterbox can mean your permit card or tax letters never arrive. Not asking about the waste bag system from day one exposes you to avoidable fines.</p>

                <h2>Official sources</h2>
                <ul>
                    <li><a href="https://www.ch.ch/en/moving-to-switzerland/" target="_blank" rel="noopener noreferrer">ch.ch — Moving to Switzerland</a></li>
                    <li><a href="https://www.priminfo.admin.ch/" target="_blank" rel="noopener noreferrer">Priminfo — official LAMal comparison tool</a></li>
                    <li><a href="https://www.sbb.ch" target="_blank" rel="noopener noreferrer">SBB/CFF/FFS — public transport</a></li>
                </ul>
            </div>
        `
    },

"articulo-trabajar-sin-permiso-fisico": {
        title: "Can I work in Switzerland before I have the physical permit?",
        description: "Yes, you can work legally in Switzerland even if the physical permit takes weeks to arrive. We explain how the provisional certificate works.",
        keywords: "work without permit Switzerland, provisional permit Switzerland, residence certificate Switzerland, waiting for permit Switzerland",
        category: "Ordinary Procedures",
        hub: "tramites",
        slug: "work-before-physical-permit-switzerland",
        readingTime: 3,
        dateUpdated: "March 2026",
        featuredImage: "media/guides/trabajar-antes-permiso-fisico-suiza.jpg",
        imageAlt: "Person working in Switzerland in a professional environment",
        summary: "You can start working from day one after registering at the municipality. The physical permit may take weeks, but the registration proof already has legal validity.",
        content: `
            <div class="article-content">
                <p>This is one of the most frequently asked questions from newcomers and the answer creates a lot of confusion: <strong>yes, you can work legally in Switzerland even if the physical permit card has not yet arrived</strong>.</p>

                <h2>How the process works</h2>
                <p>When you register at the Population Registry office, you immediately receive a <strong>provisional certificate of residence</strong> ("Attestation de résidence" in French, "Meldebestätigung" in German). This document legally certifies that you are registered and authorized to reside and work in Switzerland.</p>
                <p>The physical permit (laminated card with your photo) is issued by the cantonal migration service and can take between 4 and 12 weeks to arrive by mail. This delay is completely normal and any serious employer is well aware of it.</p>

                <h2>What document does the employee use while waiting?</h2>
                <p>During the waiting period, the worker uses the provisional certificate as proof. For the company, this is sufficient to process payroll and comply with administrative obligations.</p>

                <div class="callout info">
                    <strong>Typical case:</strong> Many workers start on a Monday and go to the municipality office on the previous Friday. With the provisional certificate in hand, they start without problem. The physical permit arrives weeks later by mail.
                </div>

                <h2>What if my employer asks me for the physical permit?</h2>
                <p>If an employer causes problems, you can explain that the process is standard and that the provisional certificate has full legal validity. In large companies with HR this is routine. If there are doubts, both employer and employee can call the cantonal migration service to confirm the status of the application.</p>

                <h2>When does the physical permit arrive?</h2>
                <ul>
                    <li>Cantons with lower demand: 3–5 weeks.</li>
                    <li>Geneva, Zurich (high demand): 8–12 weeks or more.</li>
                </ul>
                <p>You will receive the card in your registered address mailbox. This is why it is important that your mailbox has your name from day one.</p>

                <div class="callout warning">
                    <strong>Important:</strong> The physical permit has an expiry date. When it approaches expiry, you will receive a notification for renewal. Do not wait until it expires to start the renewal procedure.
                </div>
            </div>
        `

    },

    "articulo-reagrupacion-familiar": {
        title: "Family reunification in Switzerland: how to bring your family",
        description: "Complete guide to bringing your partner and children to Switzerland. Conditions, documentation, timelines and rights of reunified family members.",
        keywords: "family reunification Switzerland, bring family Switzerland, family permit Switzerland, spouse Switzerland, apostille Switzerland",
        category: "Ordinary Procedures",
        hub: "tramites",
        slug: "family-reunification-switzerland",
        readingTime: 5,
        dateUpdated: "March 2026",
        featuredImage: "media/guides/reagrupacion-familiar-suiza.jpg",
        imageAlt: "Happy family arriving in Switzerland with suitcases at a train station with the Alps in the background",
        summary: "If you have Permit B or C you can bring your spouse and children under 18. Family members obtain their own permit and have the right to work from day one.",
        content: `
            <div class="article-content">
                <p>One of the most important moments in an emigrant's life is being able to bring their family. In Switzerland, the family reunification process is well regulated and is feasible for EU citizens, but it has its own rules and deadlines.</p>

                <h2>Who can request reunification?</h2>
                <p>Those holding a valid <strong>Permit B or C</strong> can request it. With Permit L (short duration) the possibilities are very limited. Family members who can be reunified are:</p>
                <ul>
                    <li>Your spouse or registered same-sex partner.</li>
                    <li>Your children under 18 years old.</li>
                    <li>In some cases, adult children studying full-time (up to age 25).</li>
                    <li>In exceptional cases, dependent parents (very restricted).</li>
                </ul>

                <h2>What financial requirements must be met?</h2>
                <p>You must demonstrate that you can support your family without depending on social assistance. The general requirement is to have an income of at least 1.5 times the poverty line set by your canton, plus support for each family member.</p>
                <p>For a couple with two children, the minimum is roughly 6,000–8,000 CHF per month depending on the canton. The exact amount varies. Your employer's payslip and a bank statement are usually sufficient proof.</p>

                <h2>What housing requirements apply?</h2>
                <p>You must have adequate housing for the entire family. For many cantons this means at least one bedroom per family member plus common areas. Some cantons have specific regulations; some are more flexible.</p>
                <p>You do not need to own your home; renting is sufficient. A signed lease is the best proof.</p>

                <h2>What documentation is required?</h2>
                <p>For the main family member (you): valid employment contract, tax declaration, proof of housing, proof of income.</p>
                <p>For your spouse: marriage certificate (with apostille), valid ID/passport, police clearance certificate from their home country, proof of health insurance in their country of origin (or medical check-up in Switzerland).</p>
                <p>For children: birth certificates (with apostille), valid ID/passport, proof of health insurance.</p>
                <p><strong>Important:</strong> all documents from outside Switzerland must have an apostille, which is an official certification that makes them valid for international use. You must obtain this from the country that issued the document.</p>

                <h2>How long does the process take?</h2>
                <p>From application to approval usually takes 4–8 weeks. During this time your family can already prepare to leave and, in many cases, can even come to Switzerland while waiting (as tourists). Once approved, they have 12 weeks to travel and register at their canton of residence.</p>

                <h2>Do family members have the right to work?</h2>
                <p>Yes, absolutely. From day one of registration, your spouse and adult children have the same rights as you: they can work for any employer, be self-employed, or study. This is a major advantage compared to other countries where family members must wait.</p>

                <h2>What happens with pensions and health insurance?</h2>
                <p>Once your family is registered, they must take out mandatory health insurance (LAMal) like any other resident. The cost depends on age and deductible chosen. They also acquire pension rights through work or, if unemployed, through the state system.</p>

                <div class="callout warning">
                    <strong>Divorce or separation:</strong> if you separate before your family has obtained a permanent residence permit (Permit C), they may lose their right to remain. Once they have Permit C, they are protected. This is an important consideration for long-term planning.
                </div>

                <h2>Common mistakes</h2>
                <p>Not obtaining apostilles in advance (can delay the entire process by weeks). Overestimating income requirements without checking your specific canton. Not informing your employer or landlord (both can be contacted for verification). Waiting too long to start the process.</p>

                <h2>Official sources</h2>
                <ul>
                    <li><a href="https://www.ch.ch/en/family-reunification/" target="_blank" rel="noopener noreferrer">ch.ch — Family reunification</a></li>
                    <li><a href="https://www.sem.admin.ch/" target="_blank" rel="noopener noreferrer">SEM (Swiss State Secretariat for Migration)</a></li>
                </ul>
            </div>
        `

    },

    "articulo-subalquiler": {
        title: "Subletting in Switzerland: Rules, rights and legality",
        description: "A complete guide to subletting in Switzerland: how to obtain landlord permission, legal requirements, and contract templates.",
        keywords: "subletting switzerland, subrenting, sublet contract, landlord permission switzerland",
        audience: 'resident',
        featuredImage: "media/guides/subalquiler-vivienda-suiza.jpg",
        imageAlt: "A person signing a subletting agreement in a Swiss apartment",
        category: "Housing",
        hub: "vivienda",
        slug: "subletting-in-switzerland-legal-guide",
        readingTime: 4,
        summary: "Subletting is a common and legal practice in Switzerland, but it is strictly regulated. You must inform your landlord and follow specific rules regarding price and duration.",
        content: `
            <div class="article-content">
                <p>Subletting (<i>Sous-location / Untermiete</i>) is frequently used by people who go abroad for a few months or who have an extra room. While it is a right for the tenant, it must be done correctly to avoid the termination of the main lease.</p>

                <h2>Is subletting legal in Switzerland?</h2>
                <p>Yes, it is protected by the Swiss Code of Obligations. However, the landlord (or agency) can only refuse permission if the conditions are abusive or if the subtenant would cause significant disadvantage to the building.</p>

                <h2>Legal Requirements</h2>
                <p>To stay within the law, you must follow these steps:</p>
                <ul>
                    <li><strong>Inform the Landlord:</strong> You must officially notify the landlord/agency of your intention to sublet and provide the terms (price, identity of subtenants).</li>
                    <li><strong>Written Permission:</strong> Although verbal consent is theoretically possible, always get it in writing to protect yourself.</li>
                    <li><strong>Non-Abusive Conditions:</strong> You cannot charge a subtenant significantly more than what you pay, unless you are providing furniture or extra services (see below).</li>
                </ul>

                <h2>The Subletting Contract</h2>
                <p>Even if you are subletting to a friend, a written contract is <strong>essential</strong>. It should specify:</p>
                <ul>
                    <li>Rent amount and share of utility costs (heating, internet).</li>
                    <li>Security deposit (can be held in a private account or blocked account).</li>
                    <li>Notice period (usually consistent with the main lease).</li>
                    <li>Inventory list (if the room/flat is furnished).</li>
                </ul>

                <h2>The Price: Can I make a profit?</h2>
                <div class="callout warning">
                    <strong>Rule on Profit:</strong> You are allowed to charge a small supplement for furniture, internet, or electricity (usually 10-20% above your base rent). However, if you charge an excessive "profit," the landlord has a legal right to refuse the sublet or even terminate your main contract.
                </div>

                <h2>What if I sublet without permission?</h2>
                <p>Subletting "in secret" (e.g., via platforms like Airbnb without authorization) is considered a breach of contract. If discovered, the landlord can send a formal warning and, in persistent cases, terminate your lease with a 30-day notice.</p>
            </div>
        `
    },

    "articulo-jubilacion": {
        title: "Retirement in Switzerland: what you might receive (AVS/AHV, LPP)",
        description: "How Swiss retirement works (three pillars) and what changes if you arrive at 30, 40, or 50.",
        keywords: "swiss pension AVS AHV, LPP occupational pension, pillar 3a, retirement switzerland",
        featuredImage: "media/guides/jubilacion-pension-suiza.jpg",
        category: "Social Security",
        hub: "trabajo",
        readingTime: 5,
        summary: "The Swiss system is based on three pillars. The earlier you contribute, the stronger your total pension tends to be—pillar 2 and 3 often matter a lot for newcomers.",
        content: `<div class="article-content">
<p>Swiss retirement is usually described as a <strong>3-pillar system</strong>. Your outcome depends heavily on years contributed and salary.</p>

<h2>Pillar 1: AVS/AHV</h2>
<p>State pension funded via contributions. Missing years can reduce the pension.</p>

<h2>Pillar 2: LPP/BVG</h2>
<p>Occupational pension through employers. Often a major part of retirement income for employees.</p>

<h2>Pillar 3: 3a (voluntary)</h2>
<p>Tax-advantaged voluntary savings that can help close gaps—especially if you arrived later.</p>

<div class="callout tip">
<strong>Coordination:</strong> contributions in Spain/EU typically don't «disappear»; each country pays its proportional part under coordination rules.
</div>
</div>`
    },

    "articulo-vivir-sin-trabajar": {
        title: "Living in Switzerland without working (EU residents): requirements",
        description: "How non-employed EU/EFTA residents can live in Switzerland: proof of means, health insurance, and registration.",
        keywords: "live in switzerland without work, sufficient means, non-employed residence permit",
        featuredImage: "media/guides/residir-en-suiza-sin-trabajo.jpg",
        category: "Ordinary Procedures",
        hub: "tramites",
        readingTime: 4,
        summary: "It can be possible, but you must show sufficient resources and comprehensive health insurance, and you still need to register officially.",
        content: `<div class="article-content">
<p>Many people ask whether they can live in Switzerland without an employment contract. For EU/EFTA citizens, this can be possible—but under strict conditions.</p>

<h2>What you usually must prove</h2>
<ul>
  <li><strong>Sufficient financial means</strong> (savings, income, pension) so you won't need social assistance</li>
  <li><strong>Swiss health insurance</strong> (LAMal) or an accepted equivalent, depending on your status</li>
  <li><strong>Registration</strong> at the commune for stays over 90 days</li>
</ul>
</div>`
    },

    "articulo-ai-invalidez": {
        title: "Swiss disability insurance (IV/AI): reintegration first",
        description: "How disability insurance works in Switzerland: the focus is rehabilitation and return to work before a pension.",
        keywords: "swiss disability insurance IV AI, invalidity pension, reintegration measures",
        featuredImage: "media/guides/seguro-invalidez-ai-suiza.jpg",
        category: "Social Insurance",
        hub: "salud",
        readingTime: 4,
        summary: "IV/AI aims to keep people in the workforce through rehabilitation and adaptation. A pension is usually considered only after measures are exhausted.",
        content: `<div class="article-content">
<p>Swiss disability insurance (IV/AI) is often misunderstood. Its core idea is <strong>rehabilitation first</strong>, not «early retirement».</p>

<h2>What IV/AI can fund</h2>
<ul>
  <li>Medical and vocational rehabilitation</li>
  <li>Workplace adaptations and assistive devices</li>
  <li>Retraining for a new profession</li>
</ul>

<h2>When is a pension granted?</h2>
<p>A disability pension is considered when long-term loss of earning capacity remains after rehabilitation measures.</p>
</div>`
    },

    "articulo-vacunas": {
        title: "Vaccines in Switzerland: recommendations and choice",
        description: "How vaccination works in Switzerland: not mandatory by law, but officially recommended by the Federal Office of Public Health (FOPH).",
        keywords: "vaccines switzerland, FOPH BAG vaccination schedule, tick-borne encephalitis",
        featuredImage: "media/guides/vacunacion-en-suiza.jpg",
        category: "Public Health",
        hub: "salud",
        readingTime: 4,
        summary: "Switzerland generally relies on recommendations rather than mandates. Standard vaccines are recommended; tick-borne encephalitis is often emphasized for outdoor activities.",
        content: `<div class="article-content">
<p>In Switzerland, vaccines are usually <strong>not mandatory by law</strong>. The system relies on official recommendations and individual responsibility.</p>

<h2>Official recommendations</h2>
<p>The Federal Office of Public Health (FOPH/BAG) publishes a recommended schedule (e.g., DTP, polio, MMR).</p>
<ul>
  <li><strong>Tick-borne encephalitis (TBE):</strong> often recommended for people spending time in forests/outdoors.</li>
  <li><strong>Flu / HPV:</strong> depending on age and risk groups.</li>
</ul>

<h2>Costs and insurance</h2>
<p>Recommended vaccines are generally covered by basic insurance, subject to deductible/franchise rules.</p>
</div>`
    },

    "articulo-danza-patos": {
        title: "Fun fact: the Duck Dance is Swiss",
        description: "The story behind «Der Ententanz», a catchy tune composed in Switzerland that became a global party classic.",
        keywords: "duck dance swiss origin, der ententanz, werner thomas davos",
        featuredImage: "media/guides/origen-danza-de-los-patos-suiza.jpg",
        category: "Culture & Life",
        hub: "vivir-en-suiza",
        readingTime: 3,
        summary: "The famous Duck Dance melody was composed by Swiss accordionist Werner Thomas in the Davos area in the late 1950s.",
        content: `<div class="article-content">
<p>You've probably heard it at weddings or local festivals. What many people don't know: <strong>«Der Ententanz»</strong> has Swiss roots.</p>

<h2>Where it started</h2>
<p>Swiss accordionist <strong>Werner Thomas</strong> composed the melody in the late 1950s, inspired by the movements of birds.</p>

<h2>How it went global</h2>
<p>In the 1970s and 80s, different versions spread across Europe and beyond under names like «The Birdie Song».</p>
</div>`
    },

    "articulo-introduccion-suiza": {
        title: "How Switzerland works: complete guide for new residents",
        description: "Complete guide to Switzerland: federal organization, 26 cantons, political system, economy, culture and what to expect as a newcomer.",
        keywords: "how Switzerland works, Swiss system, cantons, Switzerland organization, federal system, direct democracy",
        category: "Introduction",
        hub: "vivir-en-suiza",
        slug: "how-switzerland-works-complete-guide",
        readingTime: 15,
        dateUpdated: "March 2026",
        featuredImage: "media/guides/introduccion-suiza-como-funciona.png",
        imageAlt: "Swiss flag with mountains in the background and the word Switzerland",
        summary: "Understanding Switzerland starts with grasping its federal structure: 26 cantons with almost complete autonomy, three official languages, direct democracy, and a unique political culture.",
        content: `
            <div class="article-content">

                <h2>Why is Switzerland different?</h2>
                <p>Switzerland is fundamentally different from most countries because it is federal at its core. Unlike many countries with a strong central government, Switzerland gives most power to its 26 cantons and municipalities. This "bottom-up" approach shapes everything: taxation, education, healthcare, laws and even which language people speak in each region.</p>

                <p>The practical consequence: the canton where you live matters enormously. Your taxes, schools, healthcare, even what you can do on Sundays, depends more on your canton than on national rules. Two apartments 10 km apart can have very different regulations and tax rates if they are in different cantons.</p>

                <h2>The three levels: Confederation, Cantons, Municipalities</h2>

                <h3>Level 1: The Confederation (national level)</h3>
                <p>The Federal Government handles: national defense, foreign policy, immigration, federal taxes, pension system (AVS/AHV), unemployment insurance, and some aspects of healthcare and education standards.</p>
                <p>The Parliament (Federal Assembly) has two chambers: the National Council (200 members, proportional representation) and the Council of States (46 members, 2 per canton). Laws require approval from both.</p>

                <h3>Level 2: The Cantons (regional level)</h3>
                <p>Each canton is almost a "mini-country". Cantons have their own: government, parliament, laws, taxes, education system, healthcare regulation, and more. In many ways, living in Zug is more like living in a different country than living in Geneva, despite both being Switzerland.</p>
                <p>Example differences:</p>
                <ul>
                    <li><strong>Taxes:</strong> Zug = 13% total, Geneva = 21% total.</li>
                    <li><strong>School start age:</strong> varies by canton (4–5 years old for kindergarten).</li>
                    <li><strong>Sunday activities:</strong> some cantons allow shops to open Sundays, others do not.</li>
                    <li><strong>Cost of living:</strong> Zug is expensive, Valais is cheaper.</li>
                </ul>

                <h3>Level 3: Municipalities (local level)</h3>
                <p>Each municipality has its own government, police, and local taxes. Some municipalities have very specific rules (e.g., "you must cut your grass by Tuesday"). Living in a rural commune is very different from living in a city. Many things that feel like "Swiss rules" are actually just your municipality's rules.</p>

                <h2>The 26 cantons: overview</h2>
                <p>Switzerland has 26 cantons, each with significant autonomy. Languages are split: 17 speak French, German and Italian; 4 are multilingual or have special regions.</p>

                <p><strong>Major cantons by population:</strong></p>
                <ul>
                    <li>Zurich (1.5M) — largest, German-speaking, economically powerful.</li>
                    <li>Bern (1M) — German-speaking, capital of Switzerland, very federal approach.</li>
                    <li>Geneva (500k) — French-speaking, international hub, UN, Red Cross, etc.</li>
                    <li>Vaud (850k) — French-speaking, includes Lausanne.</li>
                    <li>Aargau (700k) — German-speaking, central.</li>
                </ul>

                <h2>Languages</h2>
                <p>Switzerland has four official languages: German (63%), French (23%), Italian (8%), Romansh (0.5%). Unlike many countries, there is no "official language" at the federal level. Each canton determines its official language(s).</p>
                <ul>
                    <li><strong>German-speaking:</strong> Eastern and central Switzerland (Zurich, Bern, Lucerne, etc.).</li>
                    <li><strong>French-speaking:</strong> Western Switzerland (Geneva, Vaud, Valais, Jura).</li>
                    <li><strong>Italian-speaking:</strong> Ticino (south of Alps).</li>
                    <li><strong>Romansh:</strong> only in Graubünden (very small percentage).</li>
                </ul>

                <p>Important: within German-speaking cantons, people speak a German dialect (Schweizerdeutsch) that is very different from standard German. Understanding the dialect takes time. For work, standard German, French or English is usually fine.</p>

                <h2>Direct democracy</h2>
                <p>Switzerland is famous for direct democracy: citizens can vote on major political decisions through referendums and popular initiatives. This has several practical consequences:</p>
                <ul>
                    <li>Voting happens frequently (4 times/year typically).</li>
                    <li>Citizens can force a referendum on almost any law (50,000 signatures needed).</li>
                    <li>Citizens can propose new laws (100,000 signatures needed).</li>
                    <li>Major decisions often take longer because they go through public consultation and/or voting.</li>
                </ul>

                <p>As a foreign resident, you cannot vote in federal and cantonal elections. You can vote only at the municipal level if you become a Swiss citizen (naturalization takes 10–12 years minimum).</p>

                <h2>Political culture</h2>
                <p>Switzerland's political system is consensus-based: the goal is to reach agreement rather than win/lose. This leads to:</p>
                <ul>
                    <li><strong>Proportional representation:</strong> Parliament reflects the population's diversity, making coalitions necessary.</li>
                    <li><strong>Consensus government:</strong> the executive (7-member Federal Council) includes all major parties.</li>
                    <li><strong>Slow change:</strong> major changes require broad agreement, making Switzerland politically stable but sometimes slow to adapt.</li>
                </ul>

                <p>Political debates are civil. Extreme parties exist but have limited influence. Nationalism is present but expressed differently than in neighboring countries.</p>

                <h2>The economy</h2>
                <p>Switzerland is a wealthy, highly developed economy:</p>
                <ul>
                    <li><strong>Key sectors:</strong> banking/finance, pharmaceuticals, machinery, precision industries, tourism, watches.</li>
                    <li><strong>GDP per capita:</strong> very high (~100,000 CHF), among the world's highest.</li>
                    <li><strong>Employment:</strong> low unemployment (2–3%), strong labor protections, high minimum wages (though no national minimum wage; cantons/industries set their own).</li>
                    <li><strong>Trade:</strong> very open economy, dependent on imports/exports. Part of EFTA but not EU.</li>
                </ul>

                <h2>Healthcare</h2>
                <p>Switzerland has a mandatory health insurance system (LAMal/AOS) where you buy insurance from private companies, but the system is heavily regulated: insurers must accept all applicants and cannot refuse coverage. Costs vary by age and canton but are high (300–500 CHF/month for basic coverage as an adult).</p>

                <p>The system is efficient and well-organized, but not "free" (you pay premiums and may pay out-of-pocket up to your deductible). Dentistry and glasses are usually not covered by basic insurance.</p>

                <h2>Education</h2>
                <p>Each canton manages its own education system, so standards vary. Generally:</p>
                <ul>
                    <li><strong>Compulsory:</strong> age 4–5 through age 15–16 (varies by canton).</li>
                    <li><strong>Languages:</strong> German-speaking cantons teach French and English; French-speaking cantons teach German and English.</li>
                    <li><strong>System:</strong> kindergarten → primary → lower secondary → upper secondary (choice between academic Gymnasium or vocational training).</li>
                    <li><strong>Quality:</strong> high, with strong emphasis on vocational training (apprenticeships are not "second-class" as in many countries).</li>
                </ul>

                <h2>Social culture</h2>
                <p>Swiss culture is often described as:</p>
                <ul>
                    <li><strong>Reserved:</strong> people tend to be polite but not immediately warm. Friendships develop slowly.</li>
                    <li><strong>Punctual:</strong> being on time is not just expected, it is culturally important.</li>
                    <li><strong>Direct:</strong> Swiss communication is factual and direct, sometimes perceived as blunt.</li>
                    <li><strong>Organized:</strong> rules are many and followed. Parking illegally or leaving trash is genuinely shocking to most Swiss.</li>
                    <li><strong>Outdoors-oriented:</strong> hiking, skiing and outdoor activities are central to culture.</li>
                    <li><strong>Quality-focused:</strong> Swiss products are expected to be high-quality. "Made in Switzerland" means something.</li>
                </ul>

                <h2>Cost of living</h2>
                <p>Switzerland is expensive. Daily expenses:</p>
                <ul>
                    <li>Groceries: 30–50% more expensive than neighboring countries.</li>
                    <li>Rent: varies hugely (800–2,500 CHF for 1-bedroom depending on canton and city).</li>
                    <li>Utilities: expensive, partly due to quality standards and environmental regulations.</li>
                    <li>Transportation: reasonable (public transport is excellent and relatively affordable).</li>
                    <li>Dining out: expensive (15–30 CHF for a lunch, 50–100 CHF for dinner at a decent restaurant).</li>
                </ul>

                <p>However, salaries are also high, typically 30–50% above neighboring countries for similar work.</p>

                <h2>Work culture</h2>
                <p>Swiss work culture is professional and hierarchical but not rigid:</p>
                <ul>
                    <li>Work-life balance is generally respected (40-hour weeks are standard, vacations are 4 weeks minimum).</li>
                    <li>Overtime is less common than in neighboring countries, but expected in some sectors.</li>
                    <li>Management tends to be by results, not by hours spent at desk.</li>
                    <li>Women's participation in workforce is high but gender pay gaps exist.</li>
                    <li>Training and development are valued; apprenticeships and continuing education are normal.</li>
                </ul>

                <h2>Practical essentials</h2>

                <h3>Residency and visas</h3>
                <p>EU/EFTA citizens (Spain included) have freedom of movement. You can stay as a tourist without a visa. To work, you need a work permit (usually automatic for EU citizens). To settle, you need a residence permit (Permit B after 5 years, Permanent Permit C).</p>

                <h3>Banking</h3>
                <p>You need a Swiss bank account to be paid. Major banks (UBS, Credit Suisse — now part of UBS, PostFinance, Raiffeisen) exist everywhere. Digital-only banks (Neon, Yuh) are increasingly popular and easier to open.</p>

                <h3>Taxes</h3>
                <p>Switzerland's tax system is triple-layered (federal, cantonal, municipal). You must file a tax return annually. No tax "surprises" usually occur if you file on time. The effective tax rate ranges from 15% to 40% depending on canton and income.</p>

                <h3>Bureaucracy</h3>
                <p>Switzerland is famous for its bureaucracy, but it is actually <strong>very efficient</strong>. Forms are clear, deadlines are respected, and the system works. However, there are many forms and rules. Failure to follow procedures can result in fines.</p>

                <h2>Moving to Switzerland: what to expect</h2>
                <p>In your first month, expect:</p>
                <ul>
                    <li>A fair amount of paperwork (registration, insurance, bank account).</li>
                    <li>Higher costs than expected.</li>
                    <li>Polite but reserved interactions with Swiss people.</li>
                    <li>Excellent public services and infrastructure.</li>
                    <li>Rules for everything (even waste disposal has specific rules).</li>
                </ul>

                <p>In your first year:</p>
                <ul>
                    <li>Expect to feel a bit isolated at first (Swiss friendships develop slowly).</li>
                    <li>Language will be important if you are not in a major international city.</li>
                    <li>You will appreciate the safety, order and quality of services.</li>
                    <li>You will notice very high taxes and costs, but also very high salaries.</li>
                </ul>

                <h2>Is Switzerland for you?</h2>
                <p>Switzerland works well for people who value: order, quality, punctuality, outdoor lifestyle, financial security and political stability. It is harder for people who prefer: spontaneity, low costs, warm informality or strong government intervention in daily life.</p>

                <h2>Official sources</h2>
                <ul>
                    <li><a href="https://www.ch.ch/en/" target="_blank" rel="noopener noreferrer">ch.ch — Official Swiss information portal</a></li>
                    <li><a href="https://www.parlament.ch/" target="_blank" rel="noopener noreferrer">Parlament.ch — Swiss Federal Assembly</a></li>
                    <li><a href="https://www.swissinfo.ch" target="_blank" rel="noopener noreferrer">Swissinfo — information about Switzerland</a></li>
                </ul>
            </div>
        `

    },

    "articulo-cantones": {
        title: "The 26 cantons of Switzerland: map, capitals and languages",
        description: "Complete guide to the 26 Swiss cantons: map, capital city, languages, characteristics, economy and what differentiates each canton.",
        keywords: "Swiss cantons, Switzerland map, cantons map, canton capitals, Switzerland regions",
        category: "Introduction",
        hub: "vivir-en-suiza",
        slug: "26-swiss-cantons-map-capitals-languages",
        readingTime: 12,
        dateUpdated: "March 2026",
        featuredImage: "media/guides/cantones-suiza.png",
        imageAlt: "Political map of Switzerland showing all 26 cantons",
        summary: "The 26 cantons are the core of Swiss federalism. Each has its own government, laws and even language. Understanding the cantons is key to understanding Switzerland.",
        content: `
            <div class="article-content">

                <h2>The foundation of Switzerland: 26 cantons</h2>
                <p>Switzerland is not a country in the traditional sense; it is a federation of 26 semi-autonomous regions (cantons). Each canton has its own government, parliament, laws, taxes and even language in some cases. This is why understanding Swiss cantons is crucial: where you choose to live changes your entire experience of the country.</p>

                <h2>How cantons are organized</h2>
                <p>Cantons fall into two categories:</p>
                <ul>
                    <li><strong>Full cantons (23):</strong> each has its own government and parliament.</li>
                    <li><strong>Half-cantons (6, from 3 original cantons):</strong> Basel-Stadt, Basel-Landschaft (from Basel), Appenzell Ausserrhoden, Appenzell Innerrhoden (from Appenzell), and Nidwalden, Obwalden (from Unterwalden). These have less federal weight but function independently.</li>
                </ul>

                <p>The distinction is historical and has minimal practical impact for residents.</p>

                <h2>The 26 cantons by language region</h2>

                <h3>German-speaking cantons (17)</h3>
                <p>Eastern, central and northern Switzerland speak German or Swiss German dialect.</p>

                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background: #f0f0f0;">
                        <th style="border: 1px solid #ddd; padding: 10px;">Canton</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">Capital</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">Population</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">Key feature</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Zurich</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Zurich</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">1.5M</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Largest canton, finance hub</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Bern</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Bern (capital of CH)</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">1M</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Capital canton, very federal</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Lucerne</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Lucerne</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">430k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Central, tourism, culture</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>St. Gallen</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">St. Gallen</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">520k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Textiles, crafts history</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Aargau</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Aarau</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">700k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Central Switzerland, growing</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Thurgau</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Frauenfeld</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">290k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Northeast, Lake Constance</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Appenzell Ausserrhoden</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Herisau</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">280k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Rural, traditional</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Appenzell Innerrhoden</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Appenzell</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">16k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Very small, traditional</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Basel-Stadt</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Basel</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">196k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Pharma hub, French border</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Basel-Landschaft</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Liestal</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">196k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Industrial, residential</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Solothurn</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Solothurn</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">280k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Northwest, industrial</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Glarus</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Glarus</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">40k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Very small, Alpine</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Zug</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Zug</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">130k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Lowest taxes, very wealthy</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Schwyz</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Schwyz</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">162k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Central, historic</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Uri</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Altdorf</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">36k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Very small, very low taxes</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Nidwalden</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Stans</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">42k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Very small, central</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Obwalden</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Sarnen</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">38k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Very small, central</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Graubunden</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Chur</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">200k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Largest canton by area, skiing, Romansh</td>
                    </tr>
                </table>

                <h3>French-speaking cantons (5)</h3>
                <p>Western Switzerland, along the French border.</p>

                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background: #f0f0f0;">
                        <th style="border: 1px solid #ddd; padding: 10px;">Canton</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">Capital</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">Population</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">Key feature</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Geneva</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Geneva</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">500k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">International hub, UN, Red Cross, very expensive</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Vaud</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Lausanne</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">850k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Second largest by population, Lake Geneva, wine</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Valais</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Sion</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">340k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Skiing, Matterhorn, Alpine</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Neuchatel</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Neuchatel</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">180k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Lake Neuchatel, watches, French border</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Jura</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Delémont</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">73k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Newest canton (1979), watches, Jura mountains</td>
                    </tr>
                </table>

                <h3>Italian-speaking canton (1)</h3>

                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background: #f0f0f0;">
                        <th style="border: 1px solid #ddd; padding: 10px;">Canton</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">Capital</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">Population</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">Key feature</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Ticino</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Bellinzona</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">360k</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">South of Alps, Italian culture, warmest climate</td>
                    </tr>
                </table>

                <h3>Bilingual canton (1)</h3>

                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background: #f0f0f0;">
                        <th style="border: 1px solid #ddd; padding: 10px;">Canton</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">Capital</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">Population</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">Key feature</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>Bern (partial)</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">Bern</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">1M</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">80% German, 20% French (Jura region)</td>
                    </tr>
                </table>

                <h2>Choosing where to live</h2>
                <p>When choosing a canton to live in, consider:</p>

                <ul>
                    <li><strong>Taxes:</strong> ranges from 13% (Zug, Uri) to 26% (Basel-Stadt). Over a career, this is a huge difference.</li>
                    <li><strong>Language:</strong> if you are not fluent in German, French or Italian, choose a canton in your preferred language region.</li>
                    <li><strong>Cost of living:</strong> Zug is expensive despite low taxes. Valais is cheaper. Geneva is very expensive.</li>
                    <li><strong>Job market:</strong> Zurich and Basel have the most jobs. Rural cantons have fewer opportunities.</li>
                    <li><strong>Lifestyle:</strong> mountains (Valais, Graubunden), lakes (Geneva, Vaud), urban (Zurich, Geneva, Basel), rural (many options).</li>
                    <li><strong>Schools:</strong> if you have children, check the canton's education system (quality varies).</li>
                </ul>

                <h2>Official sources</h2>
                <ul>
                    <li><a href="https://www.ch.ch/en/" target="_blank" rel="noopener noreferrer">ch.ch — Official cantonal information</a></li>
                    <li><a href="https://www.statistik.admin.ch/" target="_blank" rel="noopener noreferrer">Swiss Statistics — population and economic data</a></li>
                </ul>
            </div>
        `

    },

    "articulo-lenguas": {
        title: "Languages in Switzerland: German, French, Italian, and Romansh",
        description: "A guide to the 4 national languages of Switzerland: linguistic regions, bilingual cantons, and tips for newcomers.",
        keywords: "languages switzerland, linguistic regions, swiss german, romandie, ticino, romansh",
        audience: "newcomer",
        featuredImage: "media/guides/lenguas-suiza.png",
        category: "Culture & Languages",
        hub: "vivir-en-suiza",
        readingTime: 5,
        summary: "Switzerland has 4 national languages. The language you should learn depends entirely on the canton where you settle: German in the east and center, French in the west, Italian in Ticino.",
        content: `<div class="article-content">
<p>Switzerland is one of the few countries in the world with four official national languages. But there is a very common mistake when arriving: believing that English is enough to integrate. It is not. The language of your canton of residence is the key to work, administration, and social integration.</p>

<h2>The 4 National Languages</h2>

<h3>🇩🇪 German — German-speaking Switzerland (Deutschschweiz)</h3>
<p>Spoken by approximately <strong>63%</strong> of the population. It covers a large central and eastern strip of the country: Zurich, Bern, Basel, Lucerne, Zug, Schwyz, St. Gallen, and most of the interior cantons.</p>

<p>But there is a fundamental nuance: in everyday life, German-speaking Swiss do not speak standard German. They speak <strong>Schweizerdeutsch</strong>, a set of oral dialects that varies from canton to canton and can be completely unintelligible to someone who has learned standard German. Written texts (contracts, letters, forms) are written in standard German (<em>Hochdeutsch</em>).</p>

<div class="callout">
<strong>For non-native speakers:</strong> German is difficult but entirely achievable. With a B1 level, you can already work in most non-specialized jobs. Many German courses in Switzerland are free or subsidized for residents.
</div>

<h3>🇫🇷 French — La Romandie</h3>
<p>Spoken by approximately <strong>23%</strong> of the population. It corresponds to the western cantons: Geneva, Vaud, Neuchâtel, Jura, and partially Valais, Fribourg, and Bern. This area is informally called <em>La Romandie</em>.</p>

<p>Swiss French is very similar to standard French, with some lexical differences that do not pose a real barrier. For example, they use <em>huitante</em> instead of <em>quatre-vingts</em> (80) in some cantons of Romandie.</p>

<div class="callout info">
<strong>For non-native speakers:</strong> French is the most accessible option. It shares Latin roots with other Romance languages, and the learning time is significantly less than German.
</div>

<h3>🇮🇹 Italian — Ticino</h3>
<p>Spoken by approximately <strong>8%</strong> of the population, mainly in the canton of Ticino (TI) and in some southern valleys of the canton of Graubünden. Ticino is the only completely Italian-speaking canton and has a very Mediterranean cultural identity.</p>

<p>For Romance language speakers, Italian is the closest Swiss language. However, the Ticino labor market is smaller, and many positions also require German or English to work with the rest of the country.</p>

<h3>🏔️ Romansh (Rumantsch)</h3>
<p>Spoken by less than <strong>1%</strong> de la population, exclusively in parts of the canton of Graubünden. It is a Romance language with five different written variants. It has the status of a national and co-official language in the regions where it is spoken, but it is not for administrative use at the federal level except for communicating with Romansh citizens.</p>

<h2>Bilingual and Trilingual Cantons</h2>

<p>Three cantons have two or more official languages:</p>

<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:1rem; margin:1.5rem 0;">
    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
        <strong>Fribourg (FR)</strong>
        <p style="font-size:0.9rem; margin:0.5rem 0 0; color:var(--text-secondary);">Bilingual French / German. The administration operates in both languages. The city of Fribourg itself is a contact point between the two cultures.</p>
    </div>
    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
        <strong>Valais / Wallis (VS)</strong>
        <p style="font-size:0.9rem; margin:0.5rem 0 0; color:var(--text-secondary);">Bilingual French / German depending on the area. Lower Valais is French-speaking (Sion, Martigny), Upper Valais is German-speaking.</p>
    </div>
    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
        <strong>Graubünden (GR)</strong>
        <p style="font-size:0.9rem; margin:0.5rem 0 0; color:var(--text-secondary);">Trilingual German / Romansh / Italian. The only canton with three official languages. Each valley can have a different dominant language.</p>
    </div>
</div>

<h2>Which language to learn?</h2>

<p>The answer is always the same: <strong>the language of the canton where you live</strong>. But if you haven't decided where to settle yet, here are some guidelines:</p>

<ul>
    <li><strong>French:</strong> Best starting point for many. Easier and faster to learn if you speak a Romance language. It gives you access to Romandie and international cities like Geneva and Lausanne.</li>
    <li><strong>German:</strong> The language that opens the most doors in terms of the labor market (covers 63% of the country). It is more difficult, but training is abundant and the Swiss highly value the effort.</li>
    <li><strong>Italian:</strong> If you already speak it, Ticino can be a smooth entry. If not, the local labor market is more limited.</li>
</ul>

<div class="callout">
<strong>Key investment:</strong> Many cantons offer subsidized or even free language courses for foreign residents. Some employers also pay for language courses. Find out from your first month at your commune.
</div>
</div>`
    },

    "articulo-consulados": {
        title: "Spanish consulates in Switzerland: where they are and what they do",
        description: "Guide to the Spanish consular network in Switzerland (Geneva, Bern, Zurich): services, registration, passports/ID, civil registry and appointments.",
        keywords: "spanish consulate switzerland, consular registration, passport renewal",
        audience: "newcomer",
        featuredImage: "media/guides/consulados-espanoles-suiza.png",
        category: "Resources",
        hub: "tramites",
        readingTime: 5,
        summary: "If you are a Spanish citizen living in Switzerland, register with your consulate (RECA/CERA), and plan appointments early for passports/ID renewals.",
        content: `<div class="article-content">
<p>Spain has three main consular offices in Switzerland (Geneva, Bern, Zurich). They handle key services for residents.</p>

<h2>Addresses and phones</h2>
<ul>
  <li><strong>Geneva:</strong> Avenue Blanc 53, 1202 Geneva<br><strong>Phone:</strong> +41 22 749 14 60</li>
  <li><strong>Bern:</strong> Marienstrasse 12, 3005 Bern<br><strong>Phone:</strong> +41 31 356 22 20</li>
  <li><strong>Zurich:</strong> Riedtlistrasse 17, 8006 Zurich<br><strong>Phone:</strong> +41 44 368 61 00</li>
</ul>

<h2>Main services</h2>
<ul>
  <li><strong>Consular registration (RECA/CERA)</strong> for residents abroad</li>
  <li><strong>Passport / ID renewals</strong> (appointment required)</li>
  <li><strong>Civil registry</strong> events (births, marriages, deaths)</li>
  <li><strong>Assistance</strong> in emergencies</li>
</ul>

<h2>Appointments</h2>
<p>Most procedures require an appointment. Please check the official consulate pages for up-to-date instructions:</p>
<ul>
  <li><a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer">Consulate in Geneva</a></li>
  <li><a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer">Consulate in Bern</a></li>
  <li><a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer">Consulate in Zurich</a></li>
</ul>
</div>`
    }
};

// Technical SEO: ensure every EN article has a stable, clean slug for canonical URLs and sitemap generation.
    const slugMap = {
	        "articulo-permisos": "tramites-llegada-suiza",
	                "articulo-mudarse-suiza": "mudarse-a-suiza-desde-espana",
	                "articulo-registro": "registering-in-switzerland-commune",
	                "articulo-lamal": "health-insurance-switzerland-lamal",
                "articulo-franquicia": "deductible-and-copayment-switzerland",
                "articulo-impuestos": "taxes-in-switzerland",
        "articulo-impuesto-fuente": "withholding-tax-switzerland-quellensteuer",
        "articulo-seguros-sociales": "social-security-avs-lpp-and-unemployment",
        "articulo-rav-paro": "unemployment-rav-switzerland",
        "articulo-salarios": "salaries-in-switzerland",
        "articulo-contratos": "employment-contracts-switzerland",
        "articulo-periodo-prueba": "probation-and-notice-periods-switzerland",
        "articulo-buscar-empleo": "job-searching-platforms-and-strategies",
        "articulo-alquiler": "renting-apartment-switzerland",
        "articulo-fianzas": "rental-deposits-and-tenant-rights",
        "articulo-costo-vida": "cost-of-living-in-switzerland",
        "articulo-frontaliers": "cross-border-workers-frontaliers-rules-and-taxes",
        "articulo-diplomas": "recognition-of-foreign-diplomas",
        "articulo-sistema-escolar": "the-swiss-school-system-explained",
        "articulo-sistema-salud": "healthcare-system-doctors-and-emergencies",
        "articulo-transporte": "public-transport-sbb-halbtax-and-ga",
        "articulo-ciudadania": "swiss-citizenship-and-naturalization",
        "articulo-tramites-llegada": "first-month-checklist-essential-steps-when-you-arrive-in-switzerland",
        "articulo-trabajar-sin-permiso-fisico": "can-i-work-before-the-physical-permit-card-arrives",
        "articulo-reagrupacion-familiar": "family-reunification-in-switzerland-how-to-bring-your-family",
        "articulo-subalquiler": "subletting-in-switzerland-a-practical-legal-guide",
        "articulo-jubilacion": "retirement-in-switzerland-what-you-might-receive-avs-ahv-lpp",
        "articulo-vivir-sin-trabajar": "living-in-switzerland-without-working-eu-residents-requirements",
        "articulo-ai-invalidez": "swiss-disability-insurance-iv-ai-reintegration-first",
        "articulo-vacunas": "vaccines-in-switzerland-recommendations-and-choice",
        "articulo-danza-patos": "fun-fact-the-duck-dance-is-swiss",
        "articulo-introduccion-suiza": "how-switzerland-works-guide",
        "articulo-cantones": "swiss-cantons-guide",
        "articulo-lenguas": "languages-in-switzerland",
        "articulo-consulados": "spanish-consulates-switzerland"
    };

    Object.entries(slugMap).forEach(([key, slug]) => {
        if (window.siteContent.en.articles[key]) window.siteContent.en.articles[key].slug = slug;
    });
})();
