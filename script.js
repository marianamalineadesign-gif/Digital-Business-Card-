// =========================================
// 1. COPY EMAIL BUTTON
// =========================================

// Find the button on the page
const copyButton = document.querySelector('.copy-btn');

// Run this code every time someone clicks it
copyButton.addEventListener('click', async () => {
  const email = copyButton.dataset.email;

  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = 'Copied!';
  } catch (error) {
    copyButton.textContent = 'Copy failed';
  }

  // After 2 seconds, change the text back
  setTimeout(() => {
    copyButton.textContent = 'Copy';
  }, 2000);
});


// =========================================
// 2. VIDEOS
// =========================================

const videos = document.querySelectorAll('video');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// If the person turned on "reduce motion", stop the videos
if (reduceMotion.matches) {
  videos.forEach((video) => video.pause());
}

// Pause videos when the person switches to another tab or app,
// and play them again when they come back (saves battery)
document.addEventListener('visibilitychange', () => {
  videos.forEach((video) => {
    if (document.hidden) {
      video.pause();
    } else if (!reduceMotion.matches) {
      video.play().catch(() => {});
    }
  });
});