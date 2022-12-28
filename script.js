const main = document.querySelector('main');
const color = document.getElementById('rgb-color');
const paragraph = document.createElement('p');
const placar = document.createElement('p');
const span = document.createElement('span');
const container = document.createElement('section');
const button = document.createElement('button');
placar.innerText = 'Placar: ';
span.id = 'score';
span.innerText = 0;
paragraph.id = 'answer';
paragraph.innerText = 'Escolha uma cor';
button.id = 'reset-game';
button.innerText = 'Resetar o jogo/Cores';
main.appendChild(placar);
placar.appendChild(span);
main.appendChild(container);
main.appendChild(paragraph);
main.appendChild(button);

const drawCircle = () => {
  const drawnCircle = document.querySelectorAll('.ball');
  const sorteio = Math.floor(Math.random() * 6);
  color.innerText = drawnCircle[sorteio].style.backgroundColor;
};

function randomColors() {
  let colorGe = [];
  for (let index = 0; index < 6; index += 1) {
    const circle = document.createElement('div');
    circle.className = 'ball';
    for (let index1 = 0; index1 < 3; index1 += 1) {
      colorGe.push(Math.floor(Math.random() * 255));
    }
    circle.style.backgroundColor = `rgb(${colorGe[0]} , ${colorGe[1]} , ${colorGe[2]})`;
    colorGe = [];
    container.appendChild(circle);
  }
  drawCircle();
}

const save = () => {
  localStorage.setItem('score', span.innerText);
};

const reload = () => {
  span.innerText = localStorage.getItem('score');
};

window.onload = () => {
  if (localStorage.getItem('score') === null) {
    save();
  } else {
    reload();
  }
  randomColors();
};

const soma = (produto) => {
  const result = produto + 3;
  span.innerText = result;
  localStorage.setItem('score', span.innerText);
};

const validation = (event) => {
  const alvo = event.target;
  if (alvo.style.backgroundColor === color.innerText) {
    paragraph.innerText = 'Acertou!';
    const number = span.innerText;
    const valor = parseInt(number, 10);
    soma(valor);
  } else {
    paragraph.innerText = 'Errou! Tente novamente!';
  }
};

container.addEventListener('click', validation);

const reset = () => {
  window.location.reload();
  span.innerText = localStorage.getItem('score');
};

button.addEventListener('click', reset);
