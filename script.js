const divContainer = document.querySelector('.grid-container');
const resizeButton = document.getElementById('reset-btn');

const createGrid = (squarePerSide) => {
  divContainer.innerHTML = '';
  let gridSize = squarePerSide * squarePerSide;
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
};

resizeButton.addEventListener('click', () => {
  let squaresPerSide = parseInt(
    prompt('Enter the number of squares per side (max 100):'),
    10
  );

  if (
    isNaN(squaresPerSide) ||
    squaresPerSide < 1 ||
    squaresPerSide > 100
  ) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  createGrid(squaresPerSide);
});

createGrid(16);
