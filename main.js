document.body.querySelectorAll('form').forEach(form => {
  console.log(form);
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    alert("Oh oh, you didn't say the magic word")

    return false
  })
})