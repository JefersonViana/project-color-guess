const main = document.querySelector('main');
const color = document.getElementById('rgb-color');
const container = document.createElement('section');
main.appendChild(container);


const drawCircle = () => {
  const drawnCircle = document.querySelectorAll('.ball');
  let sorteio = Math.floor(Math.random() * 6);
  color.innerText = drawnCircle[sorteio].style.backgroundColor;
};


function randomColors() {
  let generateColor = [];
  for (let index = 0; index < 6; index += 1) {
    const circle = document.createElement('div');
    circle.className = 'ball';
    for (let index1 = 0; index1 < 3; index1 += 1) {
      generateColor.push(Math.floor(Math.random() * 255));
    }
    circle.style.backgroundColor = `rgb(${generateColor[0]} , ${generateColor[1]} , ${generateColor[2]})`;
    generateColor = [];
    container.appendChild(circle);
  }
  drawCircle();
};

window.onload = () => {
  randomColors();
};

const paragraph = document.createElement('p');
paragraph.id = 'answer';
paragraph.innerText = 'Escolha uma cor';
main.appendChild(paragraph);

const validation = (event) => {
  const alvo = event.target;
  console.log(alvo.style.backgroundColor);
  if (alvo.style.backgroundColor === color.innerText) {
    paragraph.innerText = 'Acertou!';
  } else {
    paragraph.innerText = 'Errou! Tente novamente!';
  }
};

container.addEventListener('click', validation)
