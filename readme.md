# ePROMS Portal

This project was completed as a field project (for a health authority context) for **HINF 597: Health Terminology Standards** at the University of Victoria in 2020 by **Ann Chou**.  
It explores the integration of patient-reported outcomes (PROMs) into electronic health records using standards-based tools.

---

## ✨ Overview

The ePROMS Portal is a prototype web interface where patients can report their symptoms using validated PROMs.  
It supports shared decision-making and patient-centered care by embedding PROMs into EHRs via HL7 FHIR and LOINC standards.

---
## 🎯 Purpose

This project demonstrates how mental health–related PROMs (like PHQ-9) can be captured, modeled, and semantically mapped to enable patient participation in digital health systems.  
These examples are useful for prototyping, teaching, or extending your own ePROMS solutions.
---

## 💻 Features

- Built with LHC-Forms FHIR SDC tools  
- Uses validated PROMs like PHQ-9 and PROMIS  
- Outputs FHIR-compliant `Questionnaire` and `QuestionnaireResponse` resources  
- Includes mappings to SNOMED CT  
- Evaluated with heuristic inspection and cognitive walkthrough  
---
## 🧠 Technical Implementation: Capturing Mental Health PROMs with FHIR
As part of the ePROMS Portal prototype, I explored how patient-reported outcomes (PROMs) for mental health can be modeled using interoperable standards. After reviewing several options, I selected the PHQ-9 (Patient Health Questionnaire–9) as the primary instrument due to its clinical validation, structured format, and alignment with healthcare standards

🔍 Selected Question Focus: Interest and Enjoyment
To demonstrate the implementation, I focused on a key PHQ-9 item:

"Little interest or pleasure in doing things"

🔗 Standards Mapping

| Element          | Standard  | Code     |  Desc                                                        |
| :--------------- | :------: | ------:   | ---------------------------------------------                |
|   Questions      | LOINC    | `74250`   | "Little interest or pleaseure in doing things"               |
| Clinicla Concept | SNOMED CT| `4172304  | "Loss of interet in previously enjoyable activity (finding)" |

🧩 Structured Answer Options
Responses were structured with standard codes and scores using LOINC answer lists:
- LA6568-5 – Not at all (score 0)
- LA6569-3 – Several days (score 1)
- LA6570-1 – More than half the days (score 2)
- LA6571-9 – Nearly every day (score 3)

These coded values were implemented in both the FHIR Questionnaire and the LHC-Forms custom section, enabling compatibility with tools like SMART-on-FHIR apps and visual form builders.
---
##🛠️ Implementation Components
- phq9-questionnaire.json –  PHQ-9 as a FHIR Questionnaire  
- phq9-questionnaire-response.json – Sample patient response
- phq9-snomed-mapping.json – SNOMED concept overlays for PHQ-9
- sample-sample.json – Custom LHC-Forms question section I made for ePROMS
- - All files follow HL7 FHIR and clinical terminology standards  

Together, these files demonstrate a modular approach to digitizing PROMs using HL7 FHIR, SNOMED CT, and LOINC standards

---
📘 Original Academic Report (Available by Request)
This ePROMS Portal was first developed for a graduate-level health informatics course during a period of personal illness and time constraints. While the original technical report includes valuable mapping work and feedback, it remains an unedited academic artifact.

To preserve the integrity of the documentation while recognizing its roughness, the full report is not publicly published here.

📨 If you're interested in viewing the original write-up for teaching, design research, or health prototyping, feel free to reach out via annchou.github.io or @annreflection.
---
## 🧩 Standards & Tools Used

- [HL7 FHIR STU4](https://www.hl7.org/fhir/)  
- [LOINC](https://loinc.org/)  
- [SNOMED CT](https://www.snomed.org/)  
- SMART on FHIR API  
- LHC-Forms Toolkit  
---
## 📂 Repository Contents
- `index.html` – Simplifed case study report and landing page
- `rss/` – PDF report, screenshots, figures  
- `json/` – FHIR and SNOMED CT–compliant resources  

---
## 📄 JSON Resource Highlights
### 📄 PHQ-9 Questionnaire

FHIR-compliant structured Questionnaire resource.

✅ Features:
- Based on LOINC `44249-1`  
- LHC-Forms compatible  
- Embedded answer options  

📚 Standards: FHIR, LOINC, SNOMED CT, SDC  
📁 [Download JSON](rss/phq9-questionnaire.json)

---
### 📄 QuestionnaireResponse

Sample patient response to PHQ-9.

✅ Features:
- Matches `phq9-questionnaire.json`  
- Coded answers using LOINC  
- Score and authored timestamp  

📁 [Download JSON](assets/phq9-questionnaire-response.json)
---
### 🧠 SNOMED CT Mapping

Maps PHQ-9 questions to clinical findings.

✅ Example:
- `74250-9` → SNOMED `41723004`: "Loss of interest in previously enjoyable activity"

📸 ![](rss/json-phq9-LOINC-SNOMED-map.png)  
📁 [Download JSON](assets/phq9-snomed-mapping.json)
---
### 🧩 Custom Section JSON
Filename: `sample-sample.json`

This defines a coded LHC-Forms item for PHQ-9 prompt:  
*“Little interest or pleasure in doing things”*

✅ Features:
- LOINC code: `74250-9`  
- Score labels and cardinality  
- Editable, structured answer choices  
- Designed for UI & analytics use  

📸 ![](rss/json-custom-LHC-LOINC-PHQ-9-little-interest.png)  
📁 [Download JSON](rss/phq9-custom-section.json)
---
## 🔮 Next Steps

- Add support for visual symptom drawing (HPO mapping)
- Shorten and adapt PROMs for cultural accessibility
- Conduct participatory testing with patient partners

---
## 📘 Reflection on the ePROMS Portal
This project began with a question: How might patient stories reshape digital systems?

ePROMS is more than a technical prototype — it’s a response to systems that overlook lived experience.
It reflects a belief that even clinical tools can carry softness, context, and care.

Patient voice deserves more than a checkbox. It deserves listening infrastructure —
and tools that bend toward the truth of how people feel, not just how they function.

May this portal be a seed for systems that listen before they decide.
**Ann K. Chou**  
[@annreflection](https://www.instagram.com/annreflection/)  
[annchou.github.io](https://annchou.github.io)

---
# About me:
Interdisciplinary designer and informatics researcher exploring how care, creativity, and computation intersect.
I work with HL7 FHIR, D3.js, and Unity to prototype inclusive systems—from ePROMS portals to sumi-e inspired art tools and virtual instruments for sensory play.

🌿 Health IT · Creative Tech · Accessibility
🎨 Sumi-e x Unity | Virtual Music Keyboard | Data Vis & Reasoning
📍 Based in BC · annchou.github.io "
