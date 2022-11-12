const panels = document.querySelectorAll('.panel');

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  console.log(e.target);
  const currentSelectedPanel = document.querySelector('.active');
  currentSelectedPanel.classList.remove('active');
  e.target.classList.add('active');
});
