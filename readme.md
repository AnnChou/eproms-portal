# ePROMS Portal

This project was completed as a field project (for a health authority context) for **HINF 597: Health Terminology Standards** at the University of Victoria in 2020 by **Ann Chou**.  
It explores the integration of patient-reported outcomes (PROMs) into electronic health records using standards-based tools.

---

## ✨ Overview

The ePROMS Portal is a prototype web interface where patients can report their symptoms using validated PROMs.  
It supports shared decision-making and patient-centered care by embedding PROMs into EHRs via HL7 FHIR and LOINC standards.

---

## 💻 Features

- Built with LHC-Forms FHIR SDC tools  
- Uses validated PROMs like PHQ-9 and PROMIS  
- Outputs FHIR-compliant `Questionnaire` and `QuestionnaireResponse` resources  
- Includes mappings to SNOMED CT  
- Evaluated with heuristic inspection and cognitive walkthrough  

---

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

This project demonstrates how mental health–related PROMs (like PHQ-9) can be captured, modeled, and semantically mapped to enable patient participation in digital health systems.  
These examples are useful for prototyping, teaching, or extending your own ePROMS solutions.

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

## �
  
