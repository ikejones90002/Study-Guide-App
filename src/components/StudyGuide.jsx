import './study-guide.css';

export default function StudyGuide() {
  return (
    <div className="study-guide">
      <h1>Pharmacy Tech Study Guide</h1>
      <img src="/CertPharmTech-logo.jpg" alt="Pharmacy Technician Certification Logo" className="study-guide-img" />
      
      <h2>Pharmacology Basics</h2>
      <ul>
        <li><strong>Pharmacology</strong>: Study of drugs, their uses, and effects on body systems.</li>
        <li><strong>Active Ingredients</strong>: Components producing therapeutic effects.</li>
        <li><strong>Excipients</strong>: Inactive substances (e.g., fillers, flavorings) in formulations.</li>
        <li><strong>Pharmacokinetics</strong>: Drug movement (absorption, distribution, metabolism, excretion).</li>
        <li><strong>Pharmacotherapeutics</strong>: Drug uses and effects in treating conditions.</li>
      </ul>

      <h2>Measurement Systems</h2>
      <ul>
        <li><strong>Metric System</strong>: Uses mg, mL for mass, volume.</li>
        <li><strong>Apothecary System</strong>: Older system with grains, minims.</li>
        <li><strong>Household System</strong>: Uses teaspoon, tablespoon for dosing.</li>
        <li><strong>Units</strong>: Measures biologic potency (e.g., international units).</li>
        <li><strong>Milliequivalents (mEq)</strong>: Expresses electrolyte concentration.</li>
        <li><strong>Specific Gravity</strong>: Density ratio of a substance to water.</li>
      </ul>

      <h2>Dose Calculations</h2>
      <ul>
        <li><strong>Body Surface Area (BSA)</strong>: Dosing based on height and weight (m²).</li>
        <li><strong>Clark’s Rule</strong>: Pediatric dose = (weight in lbs ÷ 150) × adult dose.</li>
        <li><strong>Young’s Rule</strong>: Pediatric dose = (age in years ÷ (age + 12)) × adult dose.</li>
        <li><strong>Fried’s Rule</strong>: Neonate/infant dose based on age in months.</li>
        <li><strong>Alligation</strong>: Calculates mixture strengths (alternate/medial methods).</li>
        <li><strong>Dimensional Analysis</strong>: Converts units and calculates doses via fractions.</li>
      </ul>

      <h2>Prescription and Medication Orders</h2>
      <ul>
        <li><strong>Prescription Components</strong>: Superscription (℞), inscription, subscription, signa.</li>
        <li><strong>Medication Order</strong>: Physician’s directive for inpatient drug administration.</li>
        <li><strong>Auxiliary Labels</strong>: Supplementary instructions (e.g., "Take with food").</li>
        <li><strong>National Drug Code (NDC)</strong>: Identifies manufacturer, product, package size.</li>
        <li><strong>Scheduled Medications</strong>: CII–CV based on abuse potential.</li>
      </ul>

      <h2>Business Math</h2>
      <ul>
        <li><strong>Average Wholesale Price (AWP)</strong>: Basis for insurance reimbursement.</li>
        <li><strong>Dispensing Fee</strong>: Covers prescription preparation costs.</li>
        <li><strong>Capitation Fee</strong>: Fixed monthly payment per patient from insurers.</li>
        <li><strong>Adjudication</strong>: Insurer validation of prescription and cost.</li>
        <li><strong>Depreciation</strong>: Asset value decrease, part of overhead.</li>
        <li><strong>Cash Flow</strong>: Pharmacy receipts and expenses.</li>
        <li><strong>Daily Cash/Sales Report</strong>: Summarizes daily transactions.</li>
        <li><strong>Inventory Management</strong>: Maintains par levels, turnover rates.</li>
      </ul>

      <h2>Compounding and IV Calculations</h2>
      <ul>
        <li><strong>Compounding</strong>: Preparing customized medications.</li>
        <li><strong>Diluent</strong>: Liquid to dilute powders or liquids (e.g., water, elixir).</li>
        <li><strong>Dilution</strong>: Reducing concentration with an inactive diluent.</li>
        <li><strong>Additives</strong>: Medications/nutrients in IV solutions (e.g., TPN, PPN).</li>
        <li><strong>Beyond Use Date (BUD)</strong>: Expiry date for compounded medications.</li>
      </ul>

      <h2>History of Medicine and Pharmacy</h2>
      <h3>Ancient Beliefs and Treatments (440 BCE–1600 CE)</h3>
      <ul>
        <li><strong>Beliefs</strong>: Illnesses caused by evil spirits or imbalance of four humors (blood, phlegm, yellow bile, black bile).</li>
        <li><strong>Treatments</strong>: Trephining (skull cutting), bloodletting, leeches, herbal remedies (e.g., garlic, liverwort).</li>
        <li><strong>Shamans</strong>: Tribal healers using prayers, herbs, potions.</li>
        <li><strong>Hippocrates</strong>: Father of medicine; promoted natural healing, diet, rest, and the Hippocratic Oath.</li>
      </ul>

      <h3>18th–19th Century Medicine</h3>
      <ul>
        <li><strong>Practices</strong>: Bloodletting (leeches, venesection) to balance humors; George Washington died from excessive bloodletting.</li>
        <li><strong>Advancements</strong>: European medical schools influenced U.S.; prescriptions in Latin (e.g., dandelion infusion).</li>
        <li><strong>Florence Nightingale</strong>: Improved hospital sanitation, founded nursing school.</li>
        <li><strong>Genetics</strong>: Gregor Mendel’s pea plant experiments established genetics foundation.</li>
      </ul>

      <h3>Opium and Opioids</h3>
      <ul>
        <li><strong>Opium</strong>: From poppy plant; used in laudanum (opium-alcohol mix) for pain, highly addictive.</li>
        <li><strong>Opiates vs. Opioids</strong>: Opiates are natural; opioids include synthetic drugs acting on opioid receptors (analgesia, sedation).</li>
        <li><strong>Regulation</strong>: Opium Exclusion Act (1909) restricted non-medicinal imports.</li>
      </ul>

      <h3>20th Century and Modern Advances</h3>
      <ul>
        <li><strong>Antibiotics</strong>: Penicillin (Fleming, 1928), sulfonamides (Domagk, 1932).</li>
        <li><strong>DNA</strong>: Franklin’s work led to Watson and Crick’s DNA double-helix (1953).</li>
        <li><strong>Vaccines</strong>: Jenner (smallpox), Pasteur (anthrax, rabies), Salk (polio), mRNA for COVID-19.</li>
        <li><strong>Innovations</strong>: X-rays (1895), insulin (1922), kidney transplant (1954), 3D organ printing (2014).</li>
      </ul>

      <h3>History of Pharmacy</h3>
      <ul>
        <li><strong>Early Pharmacists</strong>: Druggists (1700s–1800s) were doctors; later specialized as pharmacists.</li>
        <li><strong>First U.S. Pharmacies</strong>: Evolved from doctors’ practices; dispensed quinine for malaria.</li>
        <li><strong>Pharmacy Technicians</strong>: Assist pharmacists; certified by PTCB.</li>
        <li><strong>Changes Over 100 Years</strong>: Shift from compounding to dispensing, automation, technician roles.</li>
        <li><strong>Current Trends</strong>: Technicians manage inventory, billing, compounding, patient counseling.</li>
      </ul>

      <h3>Key Symbols</h3>
      <ul>
        <li><strong>Staff of Asclepius</strong>: Medical symbol (wingless staff, one snake).</li>
        <li><strong>Caduceus</strong>: Mistaken medical symbol (two snakes, wings), used by U.S. Army Medical Corps (1902).</li>
      </ul>

      <h2>Pharmacy Law & HIPAA</h2>
      <h3>Key Agencies & Terms</h3>
      <ul>
        <li><strong>Pregnancy Categories</strong>: FDA system (1979) classifying fetal effects of drugs; now being reevaluated.</li>
        <li><strong>Protected Health Information (PHI)</strong>: Patient health data protected by HIPAA; can’t be shared without permission.</li>
        <li><strong>Pure Food and Drug Act of 1906</strong>: Prevented mislabeling/misbranding; led to FDA creation.</li>
        <li><strong>Safety Data Sheet (SDS)</strong>: OSHA-required chemical safety info sheet.</li>
        <li><strong>The Joint Commission (TJC)</strong>: Accredits US health care orgs; needed for Medicare/Medicaid payments.</li>
        <li><strong>Tort</strong>: Wrongful act causing harm; intentional or due to negligence.</li>
        <li><strong>United States Pharmacopeia (USP)</strong>: Sets quality standards for drugs, supplements, food ingredients.</li>
        <li><strong>United States Pharmacopeia–National Formulary (USP–NF)</strong>: Standards for drugs, excipients, devices.</li>
        <li><strong>US Drug Enforcement Administration (DEA)</strong>: Enforces controlled substance laws.</li>
        <li><strong>US Food and Drug Administration (FDA)</strong>: Ensures safety, efficacy, security of drugs, food, devices, cosmetics.</li>
      </ul>

      <h3>FDA History Overview</h3>
      <ul>
        <li><strong>1862</strong>: FDA created under USDA.</li>
        <li><strong>1906</strong>: Pure Food and Drug Act (Wiley Act).</li>
        <li><strong>1930</strong>: Name shortened to FDA.</li>
        <li><strong>1940</strong>: Moved to Federal Security Agency.</li>
        <li><strong>1953</strong>: Placed under HEW.</li>
        <li><strong>1980</strong>: Moved to US Dept. of Health & Human Services.</li>
      </ul>

      <h3>Major US Food & Drug Laws</h3>
      <ul>
        <li><strong>1906</strong>: Pure Food and Drug Act</li>
        <li><strong>1912</strong>: International Opium Convention</li>
        <li><strong>1914</strong>: Harrison Narcotics Act</li>
        <li><strong>1938</strong>: Federal Food, Drug, and Cosmetic Act</li>
        <li><strong>1951</strong>: Durham-Humphrey Amendment</li>
        <li><strong>1962</strong>: Kefauver-Harris Amendments</li>
        <li><strong>1970</strong>: Comprehensive Drug Abuse Prevention & Control Act</li>
        <li><strong>1970</strong>: Poison Prevention Packaging Act</li>
        <li><strong>1972</strong>: Drug Listing Act (NDC)</li>
        <li><strong>1983</strong>: Orphan Drug Act</li>
        <li><strong>1987</strong>: Prescription Drug Marketing Act</li>
        <li><strong>1990</strong>: Anabolic Steroids Control Act</li>
        <li><strong>1990</strong>: Omnibus Budget Reconciliation Act (OBRA ’90)</li>
        <li><strong>1994</strong>: Dietary Supplement Health and Education Act</li>
        <li><strong>1996</strong>: HIPAA</li>
        <li><strong>2000</strong>: Drug Addiction Treatment Act (DATA 2000)</li>
        <li><strong>2003</strong>: Medicare Modernization Act</li>
        <li><strong>2005</strong>: Combat Methamphetamine Epidemic Act</li>
        <li><strong>2006</strong>: Dietary Supplement & Nonprescription Drug Consumer Protection Act</li>
        <li><strong>2010</strong>: Affordable Care Act</li>
        <li><strong>2013</strong>: Drug Quality and Security Act</li>
      </ul>

      <h3>Key Law Summaries</h3>
      <h4>1906 Pure Food and Drug Act</h4>
      <ul>
        <li>First law to stop sale of inaccurately labeled drugs.</li>
        <li>Labels must be truthful.</li>
        <li>Drugs must meet USP/NF standards.</li>
      </ul>

      <h4>1914 Harrison Narcotics Act</h4>
      <ul>
        <li>Restricted opium/coca products.</li>
        <li>Required registration and documentation.</li>
      </ul>

      <h4>1938 Federal Food, Drug, and Cosmetic Act</h4>
      <ul>
        <li>Required proof of safety before marketing.</li>
        <li>Introduced <strong>misbranding</strong> & <strong>adulteration</strong> definitions.</li>
        <li>Required package inserts & directions.</li>
      </ul>

      <h4>1951 Durham-Humphrey Amendment</h4>
      <ul>
        <li>Distinguished <strong>legend drugs</strong> (Rx only) from OTC.</li>
        <li>Required "Caution: Federal law prohibits dispensing without a prescription."</li>
      </ul>

      <h4>1962 Kefauver-Harris Amendments</h4>
      <ul>
        <li>Required proof of safety & effectiveness via well-controlled studies.</li>
        <li>Required informed consent in clinical trials.</li>
        <li>Transferred drug ad regulation to FDA.</li>
        <li>GMP standards established.</li>
      </ul>

      <h4>1970 Comprehensive Drug Abuse Prevention and Control Act</h4>
      <ul>
        <li>Created DEA & drug schedules (I–V).</li>
        <li>Schedule I = most restrictive (no accepted medical use).</li>
      </ul>

      <h4>1970 Poison Prevention Packaging Act (PPPA)</h4>
      <ul>
        <li>Required child-resistant caps (80% of kids can’t open; 90% of adults can).</li>
        <li><strong>Exemptions</strong>: nitroglycerin SL, oral contraceptives in dial packs, certain hormone therapies, meds in hospitals/nursing homes, patient/physician request, etc.</li>
      </ul>

      <h4>1972 Drug Listing Act (NDC)</h4>
      <ul>
        <li>Every drug gets a unique <strong>10-digit NDC</strong>:</li>
        <li>1. <strong>Labeler code</strong> (FDA-assigned)</li>
        <li>2. <strong>Product code</strong> (strength, dosage form, formulation)</li>
        <li>3. <strong>Package code</strong> (package size/type)</li>
      </ul>

      <h4>1983 Orphan Drug Act</h4>
      <ul>
        <li>Incentives for rare disease drugs (&lt;200,000 US patients).</li>
        <li>Marketing exclusivity for 7 years.</li>
      </ul>

      <h4>1987 Prescription Drug Marketing Act</h4>
      <ul>
        <li>Regulated drug distribution.</li>
        <li>Prevented counterfeit drugs.</li>
        <li>Controlled pharmaceutical samples.</li>
      </ul>

      <h4>1990 OBRA ’90</h4>
      <ul>
        <li>Required pharmacists to offer counseling to Medicaid patients.</li>
        <li>Required Drug Utilization Evaluation (DUE).</li>
      </ul>

      <h3>HIPAA & the Pharmacy Technician</h3>
      <h4>What HIPAA Protects</h4>
      <ul>
        <li>All <strong>individually identifiable health information (PHI)</strong> in any form.</li>
        <li>Applies to <strong>covered entities</strong> & <strong>business associates</strong>.</li>
      </ul>

      <h4>Pharmacy Rules</h4>
      <ul>
        <li>Share PHI only on a <strong>need-to-know basis</strong>.</li>
        <li>OK to share with:</li>
        <li>- Patient’s physician</li>
        <li>- Patient’s insurer</li>
        <li>- Patient themselves</li>
        <li>- Authorized persons</li>
      </ul>

      <h4>Electronic Protections</h4>
      <ul>
        <li>Must use <strong>NIST-approved encryption</strong> for electronic PHI.</li>
        <li>Decryption required to read PHI.</li>
        <li>Log off computers when unattended.</li>
      </ul>

      <h4>Patient Rights</h4>
      <ul>
        <li>1. View & copy health records.</li>
        <li>2. Request corrections.</li>
        <li>3. Get notice of info use.</li>
        <li>4. Approve or deny use for certain purposes (e.g., marketing).</li>
        <li>5. Get a disclosure report.</li>
        <li>6. File complaints.</li>
        <li>7. Authorize/revoke info sharing anytime.</li>
      </ul>

      <h4>HIPAA Violations (Examples)</h4>
      <ul>
        <li>Discussing a patient’s health info in public.</li>
        <li>Leaving PHI visible on computer screens.</li>
        <li>Giving patient contact info to others.</li>
        <li>Accessing records out of curiosity.</li>
        <li>Giving drug info to unauthorized people.</li>
      </ul>

      <h4>Public Health Exceptions</h4>
      <ul>
        <li>PHI can be shared with:</li>
        <li>- Public health authorities</li>
        <li>- FDA (adverse events, recalls)</li>
        <li>- People exposed to communicable disease</li>
        <li>- Employers (OSHA requirements)</li>
      </ul>

      <h4>Law Enforcement Exceptions</h4>
      <ul>
        <li>Court orders</li>
        <li>Locate suspect/fugitive</li>
        <li>Victim info requests</li>
        <li>Report deaths from suspected crime</li>
        <li>Evidence of a crime on premises</li>
        <li>Crime reporting in emergencies</li>
      </ul>

      <h4>Common Pharmacy Scenarios</h4>
      <ul>
        <li>Friend/family picks up Rx → <strong>OK</strong> if identified by patient.</li>
        <li>Family calls to check if Rx is ready → <strong>OK</strong>, but no extra details.</li>
        <li>Stranger interprets conversation → <strong>OK</strong> if patient agrees.</li>
        <li>HIPAA notice acknowledgment in log book → <strong>OK</strong> if clearly stated.</li>
      </ul>

      {/* Appended PTCB® Content Outline Summary */}
      <h2>PTCB® Content Outline – Summary</h2>

      <h3>1. Medications (40%)</h3>
      <ul>
        <li>Generic/brand names & classifications</li>
        <li>Therapeutic equivalence</li>
        <li>Drug interactions & contraindications (drug–drug, drug–disease, drug–diet, etc.)</li>
        <li>Strengths, dosage forms, routes, administration instructions, therapy duration</li>
        <li>Side effects, adverse reactions, allergies</li>
        <li>Indications of meds & supplements</li>
        <li>Drug stability (e.g., insulin, vaccines, reconstitutables)</li>
        <li>Narrow therapeutic index (NTI) drugs</li>
        <li>Incompatibilities in compounding/reconstitution</li>
        <li>Storage requirements (temperature, light, restricted access)</li>
      </ul>

      <h3>2. Federal Requirements (12.5%)</h3>
      <ul>
        <li>Handling/disposal of hazardous & non-hazardous drugs, waste</li>
        <li>Controlled substance Rx requirements (new, refill, transfer) & DEA schedules</li>
        <li>Federal rules for controlled substances (receiving, ordering, labeling, storage, dispensing, loss/theft)</li>
        <li>Restricted drug programs & REMS (e.g., pseudoephedrine)</li>
        <li>FDA recalls (classes, meds, devices, supplements)</li>
      </ul>

      <h3>3. Patient Safety & Quality Assurance (26.25%)</h3>
      <ul>
        <li>High-alert & look-alike/sound-alike (LASA) meds</li>
        <li>Error prevention (Tall Man lettering, zeros, barcodes, abbreviations)</li>
        <li>Issues requiring pharmacist intervention (DUR, ADE, OTC recs, adherence, allergies, interactions)</li>
        <li>Event reporting (errors, adverse effects, product issues, MedWatch, RCA, near misses)</li>
        <li>Types of prescription errors (wrong drug, dose, patient, quantity, early refill)</li>
        <li>Hygiene & cleaning (handwashing, PPE, trays, counters, equipment)</li>
      </ul>

      <h3>4. Order Entry & Processing (21.25%)</h3>
      <ul>
        <li>Non-sterile compounding (ointments, mixtures, liquids, suppositories, enemas)</li>
        <li>Math: formulas, ratios, alligations, conversions, sig codes, abbreviations, med terms, days’ supply</li>
        <li>Supplies/equipment (unit dose, syringes, diabetic supplies, spacers, packaging)</li>
        <li>Lot numbers, expiration dates, NDC codes</li>
        <li>Returning meds (dispensable vs. non-dispensable, expired, reverse distribution, credit return)</li>
      </ul>

      <p><strong>Key Note</strong>: Some sections include <strong>calculation-based knowledge</strong> (dosages, dilutions, days’ supply, etc.).</p>
      
      <h2>Key Calculations</h2>
      <ul>
        <li><strong>Conversions</strong>: Metric, apothecary, household; Arabic/Roman numerals; Fahrenheit/Celsius; standard/military time.</li>
        <li><strong>Fractions/Decimals</strong>: Used for precise dosing calculations.</li>
        <li><strong>Percentage Strengths</strong>: Calculates mixture or solution concentrations.</li>
      </ul>

      <h3>Roman Numerals Ⅰ – C (1 – 100)</h3>
      <p>The table below lists numbers 1–100 with their Roman numeral equivalents.</p>
      <div className="roman-table-container">
        <table className="roman-table">
          <tbody>
            <tr><td>1 (I)</td><td>11 (XI)</td><td>21 (XXI)</td><td>31 (XXXI)</td><td>41 (XLI)</td><td>51 (LI)</td><td>61 (LXI)</td><td>71 (LXXI)</td><td>81 (LXXXI)</td><td>91 (XCI)</td></tr>
            <tr><td>2 (II)</td><td>12 (XII)</td><td>22 (XXII)</td><td>32 (XXXII)</td><td>42 (XLII)</td><td>52 (LII)</td><td>62 (LXII)</td><td>72 (LXXII)</td><td>82 (LXXXII)</td><td>92 (XCII)</td></tr>
            <tr><td>3 (III)</td><td>13 (XIII)</td><td>23 (XXIII)</td><td>33 (XXXIII)</td><td>43 (XLIII)</td><td>53 (LIII)</td><td>63 (LXIII)</td><td>73 (LXXIII)</td><td>83 (LXXXIII)</td><td>93 (XCIII)</td></tr>
            <tr><td>4 (IV)</td><td>14 (XIV)</td><td>24 (XXIV)</td><td>34 (XXXIV)</td><td>44 (XLIV)</td><td>54 (LIV)</td><td>64 (LXIV)</td><td>74 (LXXIV)</td><td>84 (LXXXIV)</td><td>94 (XCIV)</td></tr>
            <tr><td>5 (V)</td><td>15 (XV)</td><td>25 (XXV)</td><td>35 (XXXV)</td><td>45 (XLV)</td><td>55 (LV)</td><td>65 (LXV)</td><td>75 (LXXV)</td><td>85 (LXXXV)</td><td>95 (XCV)</td></tr>
            <tr><td>6 (VI)</td><td>16 (XVI)</td><td>26 (XXVI)</td><td>36 (XXXVI)</td><td>46 (XLVI)</td><td>56 (LVI)</td><td>66 (LXVI)</td><td>76 (LXXVI)</td><td>86 (LXXXVI)</td><td>96 (XCVI)</td></tr>
            <tr><td>7 (VII)</td><td>17 (XVII)</td><td>27 (XXVII)</td><td>37 (XXXVII)</td><td>47 (XLVII)</td><td>57 (LVII)</td><td>67 (LXVII)</td><td>77 (LXXVII)</td><td>87 (LXXXVII)</td><td>97 (XCVII)</td></tr>
            <tr><td>8 (VIII)</td><td>18 (XVIII)</td><td>28 (XXVIII)</td><td>38 (XXXVIII)</td><td>48 (XLVIII)</td><td>58 (LVIII)</td><td>68 (LXVIII)</td><td>78 (LXXVIII)</td><td>88 (LXXXVIII)</td><td>98 (XCVIII)</td></tr>
            <tr><td>9 (IX)</td><td>19 (XIX)</td><td>29 (XXIX)</td><td>39 (XXXIX)</td><td>49 (XLIX)</td><td>59 (LIX)</td><td>69 (LXIX)</td><td>79 (LXXIX)</td><td>89 (LXXXIX)</td><td>99 (XCIX)</td></tr>
            <tr><td>10 (X)</td><td>20 (XX)</td><td>30 (XXX)</td><td>40 (XL)</td><td>50 (L)</td><td>60 (LX)</td><td>70 (LXX)</td><td>80 (LXXX)</td><td>90 (XC)</td><td>100 (C)</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
