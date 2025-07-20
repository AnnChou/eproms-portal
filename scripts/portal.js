// portal.js
// Load and render the LForms questionnaire

fetch('./data/9-sections.lforms.json')
  .then(response => response.json())
  .then(formData => {
    LForms.Util.addFormToPage(formData, 'lforms-container');
    LForms.Util.addFormToPage(formDefinition, 'myFormContainer', options);
  })
  .catch(err => {
    document.getElementById('lforms-container').innerHTML =
      '<p style="color:red;">Failed to load the form. Please try again later.</p>';
    console.error('Error loading form:', err);
  });

// Called on submit button click
function getPatientResponse() {
  try {
    const lfData = LForms.Util.getFormData('lforms-container');
    // Show the raw QuestionnaireResponse on the page for demo purposes
    const output = document.getElementById('response-output');
    output.style.display = 'block';
    output.textContent = JSON.stringify(lfData, null, 2);
    // In production, send lfData to your backend here!
    // Example: fetch('/submit', {method: 'POST', body: JSON.stringify(lfData), headers: {'Content-Type': 'application/json'}})
  } catch (e) {
    alert('Please complete the form before submitting.');
    console.error(e);
  }
}
