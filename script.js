const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('toggle-music');
let isPlaying = false;

toggleBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.textContent = '🔇'; // play icon
  } else {
    music.muted = false;
    music.play();
    toggleBtn.textContent = '🔊'; // pause icon
  }
  isPlaying = !isPlaying;
});

// Reset button when audio finishes
music.addEventListener('ended', () => {
    toggleBtn.textContent = '🔇'; // Reset to muted icon
    isPlaying = false;
  });