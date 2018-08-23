const element = document.getElementById('dodger');

document.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.which === 37) {
    // '180px'
    let previousLeft = element.style.left;
    if previousLeft > 0) {
    // 180
    let previousLeftNumber = parseInt(previousLeft.replace('px', ''), 10);
    let newLeftNumber = (previousLeftNumber - 15) + "px";
    element.style.left = newLeftNumber;
   }
  }
})