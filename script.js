const divContainer = document.querySelector('.grid-container');
for (i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('grid-item');
  console.log(div);
  divContainer.appendChild(div);
}
