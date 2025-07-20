#🧩 LHC-Forms Setup Guide for ePROMS Integration
This guide outlines how to set up the LHC-Forms toolkit in a standards-based prototype. It shows how to render a patient-facing form using a FHIR Questionnaire JSON, and retrieve responses as a structured QuestionnaireResponse.
---
1. Add LForms to Your Project
Include the LForms JS and CSS in your HTML.
You can use CDN links for demo/prototype purposes.
(refer to [https://lhncbc.github.io/lforms/](https://lhncbc.github.io/lforms) for most recent CDN links)

```html
<!-- In your main HTML file -->
<head>
</head>
<body>
  <!-- The container for your form -->
  <div id="lforms-container"></div>

  <link
    href="https://clinicaltables.nlm.nih.gov/lforms-versions/17.0.0/styles/lforms.min.css"
    media="screen" rel="stylesheet" />
  <script
    src="https://clinicaltables.nlm.nih.gov/lforms-versions/17.0.0/lforms.min.js">
  </script>
  <script src="scripts/miniportal.js"></script>
  <script src="portal.js"></script> <!-- Create this file for your logic -->
</body>
```

---
2. Place Your 9-sections.lforms.json in the Project
Save your JSON (the LForms Questionnaire) as `yourfile.lforms.json` in your project root or a data/ directory.
---
3. Load and Render the Form
Create a portal.js file to dynamically load the JSON and render it with LForms.

```js
// portal.js
// Load the LForms Questionnaire and render it
fetch('9-sections.lforms.json')
  .then(response => response.json())
  .then(formData => {
    // Render the form inside the container
    LForms.Util.addFormToPage(formData, 'lforms-container');
  });
```

```html
<!-- Submit button in your HTML file -->
<button onclick="getPatientResponse()">Submit</button>
```

---
4. Result
When a patient visits the page, the form described by 9-sections.lforms.json will be rendered.
They can fill it out, and when they hit "Submit", getPatientResponse() will grab the data as a FHIR QuestionnaireResponse object, ready for further processing.
---
5. Project Structure Example
Code
/
├── index.html
├── portal.js
└── yourfile.lforms.json
---
7. Optional: Styling & Enhancements
You can adjust the look by overriding the included CSS.
To save responses, connect the submit handler to your backend or a serverless function.
