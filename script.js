const MAX_STARS = 100; // Maximum number of stars allowed in the viewport
const starsContainer = document.getElementById('stars-container');

// Function to create a star
function createStar() {
  // Check if the number of stars exceeds the maximum allowed
  if (starsContainer.children.length >= MAX_STARS) {
    // Remove the oldest star if the limit is reached
    starsContainer.removeChild(starsContainer.firstChild);
  }

  const star = document.createElement('div');
  star.classList.add('star');

  // Random size between 1px and 3px
  const size = Math.random() * 3 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Spawn stars from below the viewport
  const startY = window.innerHeight + Math.random() * 100; // Start a bit below the viewport
  const startX = Math.random() * window.innerWidth;
  star.style.top = `${startY}px`;
  star.style.left = `${startX}px`;

  // Append to container
  starsContainer.appendChild(star);

  // Remove the star after its animation ends
  star.addEventListener('animationend', () => {
    star.remove();
  });
}

// Create new stars periodically to maintain a constant flow
setInterval(() => {
  createStar();
}, 100); // Adjusted interval time to maintain a steady flow of stars
