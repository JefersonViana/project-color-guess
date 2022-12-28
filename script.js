const main = document.querySelector('main');
for (let index = 0; index < 6; index += 1) {
  const circle = document.createElement('div');
  circle.className = 'ball';
  main.appendChild(circle);
}