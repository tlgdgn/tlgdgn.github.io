const heart = document.querySelector('.heart');
const secretMessage = document.querySelector('.secret-message');

heart.addEventListener('click', () => {
  secretMessage.style.opacity = 1;
  // Replace this with your actual secret message
  secretMessage.textContent = "You're the peanut butter to my jelly!";
});
