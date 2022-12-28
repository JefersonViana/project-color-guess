const main = document.querySelector('main');

function randomColors() {
  const string = '0123456789ABCDEF';
  let createdColor = '#';
  for (let index = 0; index < 6; index += 1) {
    const circle = document.createElement('div');
    circle.className = 'ball';
    for (let index1 = 0; index1 < 6; index1 += 1) {
      createdColor += string[Math.floor(Math.random() * 16)];
      circle.style.backgroundColor = createdColor;
    }
    main.appendChild(circle);
    createdColor = '#';
  }
};

window.onload = () => {
  randomColors();
};