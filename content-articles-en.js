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
                The following table summarizes their main characteristics. If you’re planning your move, see also <a href="#/mudarse-a-suiza-desde-espana">the step-by-step guide</a>.</p>

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
                    <p>In Switzerland it’s often more effective to search in the local language (German, French or Italian).</p>
                    <p><strong>Google example:</strong> <code>Glaser Arbeit Zürich</code></p>
                </div>

                <h2>5) Housing</h2>
                <ul>
                    <li>You’ll need <strong>documents</strong> (ID, payslips/contract, etc.).</li>
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
        title: "Taxes in Switzerland: federal, cantonal, and communal",
        description: "Everything about the triple taxation system in Switzerland: federal, cantonal, and communal taxes.",
        keywords: "taxes switzerland, swiss taxation, cantonal taxes, withholding tax",
        audience: 'worker',
        featuredImage: "media/guides/impuestos-generales-suiza.jpg",
        category: `Tax System`,
        hub: 'impuestos',
        readingTime: 5,
        summary: `In Switzerland, you pay taxes at 3 different levels.`,
        content: `<div class="article-content"> 
<p>Switzerland is a federal country, which is why it has a three-tier tax system. Unlike many countries where it is collected at the national level and then distributed, in Switzerland citizens pay taxes in three different spheres.</p> 

<h2>1. The Direct Federal Tax</h2> 
<p>It is the same throughout Switzerland and is collected by the Confederation. It taxes the income of individuals (but not their assets) and the profits of companies. It has markedly progressive rates, but in general it does not exceed 11.5% of income.</p> 

<h2>2. The Cantonal Tax</h2> 
<p>Each of the 26 cantons has its own tax legislation. They set the scales, the deductions and the scale of progressivity. Because of this, the tax burden varies immensely if you live in Geneva (high tax) versus if you live in Zug or Schwyz (low tax). The cantons tax both income (income) and wealth (wealth).</p> 

<h2>3. The Communal Tax</h2> 
<p>The more than 2,000 municipalities in Switzerland determine each year their tax coefficient, often expressed as a percentage or multiplier based on the basic cantonal tax. Therefore, moving just a few kilometers to the neighboring commune can increase or reduce your taxes significantly.</p> 

<div class="callout"> 
<strong>Important pillar:</strong> In Switzerland, "fiscal competition federalism" prevails. Cantons compete with each other by attracting businesses and taxpayers through tax rates. 
</div> 
</div>`
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
        title: "RAV and unemployment in Switzerland: eligibility, steps and obligations",
        description: "Practical guide to Swiss unemployment insurance (ALV/AC): eligibility, how to register with RAV, documents, obligations and sanctions.",
        keywords: "RAV switzerland, unemployment insurance switzerland, ALV AC",
        audience: "worker",
        featuredImage: "media/guides/rav-paro-suiza.jpg",
        category: "Work",
        hub: "trabajo",
        slug: "rav-paro-suiza",
        readingTime: 7,
        dateUpdated: "March 2026",
        summary: "RAV can support you after job loss, but deadlines and documented job-search efforts matter.",
        content: `<div class="article-content">
<p>In Switzerland, unemployment is handled through <strong>RAV</strong> (the regional employment office) and an <strong>unemployment fund</strong> that pays benefits. It can help a lot, but it comes with clear rules.</p>

<h2>What to do first</h2>
<ol>
  <li>Register as soon as possible (don’t wait).</li>
  <li>Choose an unemployment fund and collect key documents (contract, termination letter, permits, payslips).</li>
  <li>Track your job applications and keep evidence.</li>
</ol>

<h2>Obligations (typical)</h2>
<ul>
  <li>Documented job-search activity</li>
  <li>Attendance to RAV appointments</li>
  <li>On-time submission of evidence</li>
</ul>

<h2>Useful links</h2>
<ul>
  <li><a href="https://www.ch.ch/en/work/unemployment/" target="_blank" rel="noopener noreferrer">ch.ch — Unemployment</a></li>
  <li><a href="https://www.seco.admin.ch" target="_blank" rel="noopener noreferrer">SECO</a></li>
</ul>
</div>`
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
                    <p>In Switzerland it’s often more effective to search in the local language. Instead of searching in Spanish, try searching directly in German, French or Italian.</p>
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
        title: "Renting an apartment in Switzerland: The process",
        description: "A comprehensive guide to renting an apartment in Switzerland: the application dossier, requirements, and top search platforms.",
        keywords: "renting apartment switzerland, swiss housing, rental dossier, regie, homegate, immoscout24",
        audience: 'resident',
        featuredImage: "media/guides/alquilar-vivienda-suiza.jpg",
        imageAlt: "A set of keys for a Swiss apartment on a lease agreement",
        category: `Rental Contract`,
        hub: 'vivienda',
        slug: "renting-apartment-switzerland",
        readingTime: 5,
        summary: "Finding accommodation in Swiss cities is highly competitive. A flawless, complete application dossier is mandatory to stand a chance.",
        content: `
            <div class="article-content">
                <p>Finding an apartment in cities like Zurich, Geneva, or Lausanne is notoriously difficult due to low vacancy rates and extremely high demand. Speed and a professional dossier are essential to success.</p>

                <h2>The Rental Dossier: Your business card</h2>
                <p>In Switzerland, real estate agencies (<i>Régies / Verwaltungen</i>) rarely meet tenants individually before selecting them. They decide based on your "Dossier"—a folder containing all your financial and legal credentials. If your dossier is incomplete, it will usually be discarded immediately.</p>

                <h2>Essential Documents</h2>
                <p>Your application dossier (usually submitted digitally via portals) must include:</p>
                <ul>
                    <li><strong>Copy of ID/Passport:</strong> And your residence permit (or a copy of your signed work contract if you are a newcomer).</li>
                    <li><strong>Last three payslips:</strong> Or proof of income.</li>
                    <li><strong>Extract from the Debt Register (<i>Extrait de l'Office des Poursuites / Betreibungsauszug</i>):</strong> A mandatory certificate—usually less than 3 months old—proving you have no outstanding legal debts in Switzerland.</li>
                    <li><strong>Civil Liability Insurance (RC):</strong> Although sometimes requested later, having it ready shows you are a serious candidate.</li>
                </ul>

                <h2>The 1/3 Income Golden Rule</h2>
                <div class="callout warning">
                    <strong>Financial criteria:</strong> As a general rule, Swiss agencies will only accept candidates whose <strong>gross monthly rent does not exceed one-third (1/3) of their gross monthly household income</strong>. If the rent is higher, your application will almost certainly be rejected regardless of your savings.
                </div>

                <h2>Top Search Portals</h2>
                <p>While there are many sites, most listings are centralized on these three platforms:</p>
                <ul>
                    <li><a href="https://www.homegate.ch/" target="_blank" rel="noopener noreferrer">Homegate.ch</a></li>
                    <li><a href="https://www.immoscout24.ch/" target="_blank" rel="noopener noreferrer">ImmoScout24.ch</a></li>
                    <li><a href="https://www.comparis.ch/immobilien" target="_blank" rel="noopener noreferrer">Comparis (Aggregator)</a></li>
                </ul>

                <h2>The role of Régies and Gérances</h2>
                <p>Most Swiss housing is not managed by private individuals but by large professional companies called <strong>Régies</strong> (French) or <strong>Liegenschaftsverwaltungen</strong> (German). They handle everything from viewings to repairs. Communication is formal and usually conducted in the local language.</p>
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
        featuredImage: "media/template/costo-de-vida-suiza.jpg",
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
        title: "First month in Switzerland: essential steps checklist",
        description: "What to do in your first 30 days: registration, bank account, health insurance (LAMal), transport, and mail.",
        keywords: "switzerland arrival checklist, registration, lamal, swiss bank account",
        category: 'Initial Steps',
        hub: 'tramites',
        slug: "first-month-checklist-switzerland",
        readingTime: 6,
        featuredImage: "media/guides/checklist-llegada-suiza.jpg",
        imageAlt: "A physical checklist on a table with a pen, next to a Swiss passport and a train ticket",
        summary: "If you move to Switzerland to live, the first 30 days are critical. This guide directs you in the correct order to avoid fines or delays.",
        content: `
            <div class="article-content">
                <p>Establishing yourself in Switzerland requires following a specific administrative order. Most steps are linked to your registration confirmation.</p>

                <h2>I am a tourist (less than 90 days)</h2>
                <p>If you are visiting Switzerland for less than 90 days as a tourist or for short-term stays (without gainful employment), you generally do not need to register with the commune as a resident.</p>

                <h2>I am moving to live</h2>
                <p>If your intention is to stay longer than 90 days or if you have an employment contract, you must formalize your situation.</p>

                <h3>Checklist of essential tasks</h3>
                <ul>
                    <li><strong>Register at your commune:</strong> You must do this within the first 14 days and always before starting work. This provides the "Attestation d'établissement".</li>
                    <li><strong>Open a Swiss bank account:</strong> Essential for receiving your salary and paying bills (QR-bills).</li>
                    <li><strong>Health insurance (LAMal):</strong> You have 3 months to choose a provider, but the premium is retroactive to the day of arrival.</li>
                    <li><strong>Notify your employer:</strong> Provide your Swiss IBAN and your family status (for withholding tax purposes).</li>
                    <li><strong>Mail and garbage:</strong> Put your name on the mailbox immediately and follow the local rules for taxed garbage bags.</li>
                </ul>
            </div>
        `
    },

    "articulo-trabajar-sin-permiso-fisico": {
        title: "Can I work before the physical permit card arrives?",
        description: "Yes. After registering at your commune you receive a temporary certificate that is legally valid while the permit card is produced.",
        keywords: "work before permit card, temporary residence certificate, switzerland registration certificate",
        featuredImage: "media/guides/trabajar-antes-permiso-fisico-suiza.jpg",
        category: "Ordinary Procedures",
        hub: "tramites",
        readingTime: 3,
        summary: "The plastic permit card can take weeks. The temporary registration certificate is usually enough for employers and payroll.",
        content: `<div class="article-content">
<p><strong>Yes</strong>—in many cantons you can start working as soon as you are registered. The physical card often arrives later by post.</p>

<h2>What you receive first</h2>
<p>When you register, you usually get a <strong>temporary registration/residence certificate</strong> (names vary by canton and language). It proves you are registered and allowed to work.</p>

<h2>How long does the card take?</h2>
<ul>
  <li>Low-demand cantons: often a few weeks.</li>
  <li>High-demand areas (e.g., Geneva/Zurich): it can take longer.</li>
</ul>

<div class="callout info">
<strong>Tip:</strong> make sure your name is on the mailbox so the card can be delivered.
</div>
</div>`
    },

    "articulo-reagrupacion-familiar": {
        title: "Family reunification in Switzerland: how to bring your family",
        description: "How family reunification works for EU residents: conditions, documents, timelines, and rights for spouses/partners and children.",
        keywords: "family reunification switzerland, bring spouse children, apostille documents switzerland",
        featuredImage: "media/guides/reagrupacion-familiar-suiza.jpg",
        category: "Ordinary Procedures",
        hub: "tramites",
        readingTime: 5,
        summary: "With a valid B or C permit, you can usually bring your spouse/registered partner and minor children, provided you have suitable housing and sufficient means.",
        content: `<div class="article-content">
<p>Family reunification is regulated and feasible for many residents, but requirements vary by canton and status.</p>

<h2>Who can be reunited?</h2>
<ul>
  <li>Spouse or registered partner</li>
  <li>Children under 18 (including adopted children)</li>
</ul>

<h2>Main requirements</h2>
<ul>
  <li><strong>Suitable housing</strong> for the household</li>
  <li><strong>Sufficient financial means</strong> (no reliance on social assistance)</li>
  <li><strong>Valid residence status</strong> (typically B or C)</li>
</ul>

<h2>Documents (typical)</h2>
<ul>
  <li>Passports/IDs</li>
  <li>Marriage/partnership certificate and birth certificates</li>
  <li><strong>Apostille + certified translations</strong> when required</li>
  <li>Lease contract + proof of income</li>
</ul>

<div class="callout info">
<strong>Note:</strong> rules and forms are cantonal. Always check your cantonal migration office.
</div>
</div>`
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
<strong>Coordination:</strong> contributions in Spain/EU typically don’t “disappear”; each country pays its proportional part under coordination rules.
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
  <li><strong>Sufficient financial means</strong> (savings, income, pension) so you won’t need social assistance</li>
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
<p>Swiss disability insurance (IV/AI) is often misunderstood. Its core idea is <strong>rehabilitation first</strong>, not “early retirement”.</p>

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
        description: "The story behind “Der Ententanz”, a catchy tune composed in Switzerland that became a global party classic.",
        keywords: "duck dance swiss origin, der ententanz, werner thomas davos",
        featuredImage: "media/guides/origen-danza-de-los-patos-suiza.jpg",
        category: "Culture & Life",
        hub: "vivir-en-suiza",
        readingTime: 3,
        summary: "The famous Duck Dance melody was composed by Swiss accordionist Werner Thomas in the Davos area in the late 1950s.",
        content: `<div class="article-content">
<p>You’ve probably heard it at weddings or local festivals. What many people don’t know: <strong>“Der Ententanz”</strong> has Swiss roots.</p>

<h2>Where it started</h2>
<p>Swiss accordionist <strong>Werner Thomas</strong> composed the melody in the late 1950s, inspired by the movements of birds.</p>

<h2>How it went global</h2>
<p>In the 1970s and 80s, different versions spread across Europe and beyond under names like “The Birdie Song”.</p>
</div>`
    },

    "articulo-introduccion-suiza": {
        title: "How Switzerland works: essentials for new residents",
        description: "A practical introduction: federalism, 26 cantons, direct democracy, languages, and why the canton you live in affects taxes, school, and procedures.",
        keywords: "how switzerland works, cantons, federalism, direct democracy, languages in switzerland",
        audience: "newcomer",
        featuredImage: "media/guides/integracion-suiza.png",
        category: "Country",
        hub: "vivir-en-suiza",
        readingTime: 7,
        summary: "Switzerland is a federal confederation: cantons have major powers. Many rules that affect your daily life depend on where you live.",
        content: `<div class="article-content">
<p>Switzerland is not centralized like many countries. It’s a <strong>federal system</strong> where cantons and communes have real autonomy.</p>

<h2>Why this matters day-to-day</h2>
<ul>
  <li><strong>Taxes:</strong> rates can change substantially by canton and even by commune.</li>
  <li><strong>Schooling:</strong> education is largely cantonal.</li>
  <li><strong>Residence procedures:</strong> implementation differs by canton.</li>
</ul>

<h2>Direct democracy</h2>
<p>Citizens regularly vote on laws and initiatives at federal, cantonal, and communal levels. Politics is more “local” than many newcomers expect.</p>

<h2>Languages</h2>
<p>Switzerland has four national languages (German, French, Italian, Romansh). The local language of your canton is key for integration and work.</p>
</div>`
    },

    "articulo-cantones": {
        title: "Switzerland’s 26 cantons: what changes from one to another",
        description: "Cantons are not just regions: they shape taxes, school, health administration and many procedures. A quick guide for newcomers.",
        keywords: "26 cantons switzerland, cantonal differences, taxes by canton, school system canton",
        audience: "newcomer",
        featuredImage: "media/guides/cantones-suiza.jpg",
        category: "Territorial Organization",
        hub: "vivir-en-suiza",
        readingTime: 6,
        summary: "Choosing a canton is choosing a rulebook: taxes, education, and many administrative details vary across cantons and communes.",
        content: `<div class="article-content">
<p>Switzerland is made up of <strong>26 cantons</strong>. Each has its own authorities and competences, so practical life changes from one canton to another.</p>

<h2>What typically varies by canton</h2>
<ul>
  <li>Tax burden and deductions</li>
  <li>School structures and calendars</li>
  <li>Administrative practices (appointments, forms, processing times)</li>
  <li>Language(s) used by the administration</li>
</ul>

<div class="callout info">
<strong>Tip:</strong> always check the official portal of your canton and commune for up-to-date rules.
</div>
</div>`
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
        featuredImage: "media/guides/consulados-espanoles-suiza.jpg",
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
