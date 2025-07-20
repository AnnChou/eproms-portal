fetch('data/9-sections.lforms.json')
  .then(response => response.json())
  .then(formData => {
    LForms.Util.addFormToPage(formData, 'lforms-container');
  })
  .catch(err => {
    document.getElementById('lforms-container').innerHTML =
      '<p style="color:red;">Failed to load the form. Please try again later.</p>';
    console.error('Error loading form:', err);
  });

function getPatientResponse() {
  const lfData = LForms.Util.getFormData('lforms-container');
  document.getElementById('response-output').textContent = JSON.stringify(lfData, null, 2);
}
