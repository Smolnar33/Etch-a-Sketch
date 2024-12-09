const divContainer = document.querySelector('.grid-container');
gridSize = 16 * 16;
for (i = 0; i < gridSize; i++) {
  const div = document.createElement('div');
  div.classList.add('grid-item');
  divContainer.appendChild(div);
}
document
  .querySelectorAll('.grid-item')
  .forEach((elem) =>
    elem.addEventListener('mouseover', () =>
      elem.classList.add('hover')
    )
  );
