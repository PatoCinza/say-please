document.body.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    alert("Oh oh, you didn't say the magic word")
    window.location.reload()
  })
})