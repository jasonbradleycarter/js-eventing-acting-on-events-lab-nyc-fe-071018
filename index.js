document.addEventListener('keydown', (event) => {
  console.log(event)
  if (event.which === 37) {
    element.style.left = '35px'
  }
})