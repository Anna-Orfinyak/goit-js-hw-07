function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

let size = 30;

createBtn.addEventListener('click', createMarkup);

function createMarkup() {
  const value = Number(input.value);
  if (value <= 0 || value > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }
  
  createBoxes(value);
}

function createBoxes(number) {
  const boxesContainer = [];

  for(let i = 0; i < number; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.push(box);

    size += 10;
  }

  boxes.innerHTML = '';
  boxes.append(...boxesContainer);
  input.value ='';
  size = 30;
};

function destroyBoxes () {
  boxes.innerHTML = '';
  size = 30;
}
destroyBtn.addEventListener('click', destroyBoxes);