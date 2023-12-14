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

function showMore() {
  var moreText = document.querySelector('.read-more-content');
  var btnText = document.querySelector('.show-more-btn');

  if (moreText.style.display === 'none') {
    moreText.style.display = 'inline';
    btnText.textContent = 'Read Less';
  } else {
    moreText.style.display = 'none';
    btnText.textContent = 'Read More';
  }
}
