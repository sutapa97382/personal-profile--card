// Grab the button element from the DOM
const followBtn = document.getElementById('followBtn');

// Track the follow state
let isFollowing = false;

// Attach a click event listener
followBtn.addEventListener('click', () => {
  isFollowing = !isFollowing;

  if (isFollowing) {
    followBtn.textContent = 'Following';
    followBtn.classList.add('following');
  } else {
    followBtn.textContent = 'Follow';
    followBtn.classList.remove('following');
  }
});