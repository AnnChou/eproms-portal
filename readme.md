# ePROMS Portal

This project was completed as a field project (for a health authority context) for HINF 597: Health Terminology Standards at the University of Victoria in 2020 by Ann Chou. It explores the integration of patient-reported outcomes (PROMs) into electronic health records using standards-based tools.
---
## ✨ Overview

The ePROMS Portal is a prototype web interface where patients can report their symptoms using validated PROMs. It supports shared decision-making and patient-centered care by embedding PROMs into electronic health records (EHRs) via HL7 FHIR and LOINC standards.
---
## 💻 Features

- Built with LHC-Forms FHIR SDC tools
- Uses validated PROMs like PHQ-9 and PROMIS
- Outputs FHIR-compliant `Questionnaire` and `QuestionnaireResponse` resources
- Includes mappings to SNOMED CT
- Evaluated with heuristic inspection and cognitive walkthrough

## 📂 Repository Contents

- `index.html` – Optional profile/landing page
- `eproms.html` – Full case study write-up
- `assets/` – PDF report, screenshots, figures
- `json/` – FHIR and SNOMED CT–compliant resources

### 🔧 JSON Folder Contents

- `phq9-questionnaire.json`: PHQ-9 as a FHIR Questionnaire
- `phq9-questionnaire-response.json`: Example patient response
- `phq9-snomed-mapping.json`: SNOMED CT mappings for PHQ-9
- All files follow HL7 FHIR and clinical terminology standards
---
## 🎯 Purpose

This project demonstrates how mental health–related PROMs (like PHQ-9) can be captured, modeled, and semantically mapped to enable patient participation in digital health systems. These examples are useful for prototyping, teaching, or extending your own ePROMS solutions.
---
## 📎 Full Report

Download the full final report from the `assets` folder:  
📄 `ePROMS-FinalReport.pdf`
---
## 🧩 Standards & Tools Used

- [HL7 FHIR STU4](https://www.hl7.org/fhir/)
- [LOINC](https://loinc.org/)
- [SNOMED CT](https://www.snomed.org/)
- SMART on FHIR API
- LHC-Forms Toolkit
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
📍 Based in BC · annchou.github.io
