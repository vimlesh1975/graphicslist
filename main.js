document.addEventListener("DOMContentLoaded", function () {
  const divs = document.querySelectorAll('body > div');
  let index = 0;

  divs.forEach((div, i) => {
    div.style.position = "absolute";
    div.style.transition = "opacity 0.5s ease"; // Smooth fade effect
  });



  const moveTrain=()=> {
    divs.forEach((div, i) => {
      div.style.opacity = 0;  // Fade out all divs
    });

    divs[index].style.opacity = 1;  // Make the current div visible
    index = (index + 1) % divs.length;
    console.log(index)
  }
  setInterval(moveTrain, 5000);
});
