// Small interactive effect: button pulse on click
const bookBtn = document.getElementById('book-btn');

bookBtn.addEventListener('mousedown', () => {
  bookBtn.style.transform = 'scale(0.95)';
});

bookBtn.addEventListener('mouseup', () => {
  bookBtn.style.transform = 'scale(1)';
});
