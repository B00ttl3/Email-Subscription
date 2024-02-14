const scriptURL = 'https://script.google.com/macros/s/AKfycbypCJNINvUxEc9_El4sKtsawQFuEPrPHYMD87uQoKm4lR4E53dqdmm8tflBRySc0id50g/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");
  const practice = document.getElementById("practice")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You for Subscribing"
        setTimeout(function () {
            msg.innerHTML = ""
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
  practice.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      submitButton.click();
    }
  });