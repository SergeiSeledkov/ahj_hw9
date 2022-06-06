const collapseButton = document.querySelector('.collapse');
const wrapper = document.querySelector('.wrapper');
const collapseText = document.querySelector('.collapse-text');

collapseButton.addEventListener('click', () => {
  wrapper.classList.toggle('open');

  if (wrapper.classList.contains('open')) {
    wrapper.style.height = `${collapseText.offsetHeight}px`;
  } else {
    wrapper.style.height = 0;
  }
});
