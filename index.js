const element = document.getElementById('dodger');

document.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.which === 37) {
    // '180px'
    let previousLeft = element.style.left;
    // 180
    let previousLeftNumber = parseInt(previousLeft.replace('px', ''), 10);
    if (previousLeftNumber > 0) {
    let newLeftNumber = (previousLeftNumber - 15) + "px";
    element.style.left = newLeftNumber;
    }
  }
})

function moveDodgerRight(event) {
  if (event.which === 39) {
    // '180px'
    let previousRight = element.style.right;
    // 180
    let previosRightNumber = parseInt(previousRight.replace('px', ''), 10);
    if (previousRightNumber > 0) {
    let newLeftNumber = (previousRightNumber + 15) + "px";
    element.style.left = newRightNumber;
    }
  }  
}




