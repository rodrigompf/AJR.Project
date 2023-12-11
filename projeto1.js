const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close-btn');

galleryItems.forEach(item => {
  item.addEventListener('click', e => {
    modal.style.display = 'flex';
    modalImg.src = e.target.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});