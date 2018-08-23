const element = document.getElementById('dodger');

document.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.which === 37 && element.style.left > 0) {
    // '180px'
    let previousLeft = element.style.left;
    // 180
    let previousLeftNumber = parseInt(previousLeft.replace('px', ''), 10);
    let newLeftNumber = (previousLeftNumber - 15) + "px";
    element.style.left = newLeftNumber;
  }
})