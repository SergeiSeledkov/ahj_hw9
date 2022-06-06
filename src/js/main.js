const collapseButton = document.querySelector('.collapse');
const wrapper = document.querySelector('.wrapper');

collapseButton.addEventListener('click', () => {
  wrapper.classList.toggle('open');
});
