// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const input = document.querySelector('#controls input');
// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const boxes = document.querySelector('#boxes');

// createBtn.addEventListener('click', () => createBoxes(input.value));
// destroyBtn.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i++) {
//     const div = document.createElement('div');
//     const size = 30 + i * 10;
//     const color = getRandomHexColor();
    
//     div.style.width = size + 'px';
//     div.style.height = size + 'px';
//     div.style.backgroundColor = color;
    
//     boxes.appendChild(div);
//   }
// }

// function destroyBoxes() {
//   boxes.innerHTML = '';
// }
