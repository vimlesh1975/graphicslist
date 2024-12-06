document.addEventListener("DOMContentLoaded", function () {
  const divs = document.querySelectorAll('body > div');
  let index = 0;
  var intervaId;

  divs.forEach((div, i) => {
    div.style.position = "absolute";
    div.style.transition = "opacity 0.5s ease"; // Smooth fade effect
  });



  const moveTrain = () => {
    divs.forEach((div, i) => {
      div.style.opacity = 0;  // Fade out all divs
    });

    divs[index].style.opacity = 1;  // Make the current div visible
    index = (index + 1) % divs.length;
    console.log(index);
    if (index === 0) {
      clearInterval(intervaId);
      // audioElement.pause();
      index = divs.length - 1
    } //comment this for loop
  }
  intervaId = setInterval(moveTrain, 5000);

  // Create the audio element
  const audioElement = document.createElement('audio');
  // Set properties for the audio element
  // audioElement.controls = true; // Display playback controls
  // audioElement.muted = true; // Mute the audio to allow autoplay
  audioElement.autoplay = true; // Automatically start playing
  audioElement.loop = true;     // Repeat the audio indefinitely
  // Set the source URL
  audioElement.src = './aa.mp3'; // Replace with your audio URL

  // Append the audio element to the body
  document.body.appendChild(audioElement);
  // Start playing after user interaction
  document.body.addEventListener('click', () => {
    audioElement.play()
      .then(() => console.log('Audio is playing'))
      .catch((error) => console.error('Autoplay failed:', error));
  });
  // Right-click event to pause audio
  document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Prevent the default right-click menu
    audioElement.pause();   // Pause the audio
    console.log('Audio paused');
  });

  audioElement.play()

});
