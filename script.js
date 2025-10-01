/* CAPTURA ELEMENTOS DA PÁGINA */
const inputBoardSize = document.getElementById('board-size');
const board = document.getElementById('pixel-board');
const optionColors = document.getElementsByClassName('color'); // recuperando os elementos que possuem a classe color.
const pixels = document.getElementsByClassName('pixel');
const selectedColor = document.getElementsByClassName('selected');
const clearButton = document.getElementById('clear-board');
const randomColorButton = document.getElementById('button-random-color');
const generateBoardButton = document.getElementById('generate-board');

/* ATRIBUI CORES INICIAIS A PALETA DE CORES */
optionColors[0].style.backgroundColor = 'black';
optionColors[1].style.backgroundColor = 'red';
optionColors[2].style.backgroundColor = 'blue';
optionColors[3].style.backgroundColor = 'green';

/* FUNÇÕES */

const saveTableOnLocalStorage = () => {
  const boardHTML = board.outerHTML;
  localStorage.setItem('pixelBoardSaved', boardHTML);
};

// Função para atribuir event listener aos pixels
const addClickToPixels = () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (event) => {
      if (selectedColor[0].style.backgroundColor !== undefined) {
        const clickedPixel = event.target;
        clickedPixel.style.backgroundColor = selectedColor[0].style.backgroundColor;
        saveTableOnLocalStorage();
      }
    });
  }
};

// função para limpar o pixel board
const erasePixelBoard = () => {
  if (board) {
    board.innerHTML = '';
  }
};

// Função para criar board
const createBoard = (boardDimension) => {
  for (let index = 0; index < boardDimension; index += 1) {
    const linha = board.insertRow(index);

    for (let index2 = 0; index2 < boardDimension; index2 += 1) {
      const celula = linha.insertCell(index2);
      celula.classList.add('pixel');
    }
  }
  addClickToPixels();
};
createBoard(5);

// Função para atribuir a classe 'selected' para a cor que receber o click do mouse
const setupColorSelection = () => {
  for (let index = 0; index < optionColors.length; index += 1) {
  // Cada elemento recebe um eventlistener
    optionColors[index].addEventListener('click', (event) => {
    // procura classe selected
      if (document.getElementsByClassName('selected')[0] !== undefined) {
        document
          .getElementsByClassName('selected')[0]
          .classList.remove('selected'); // remove a classe selected encontrada
      }
      event.target.classList.add('selected'); // cria a classe selected ao elemento que recebeu o clique
    });
  }
};
setupColorSelection();

// Função para limpar os pixels
clearButton.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

// Função pra gerar cores aleatórias
const generateRandomColor = () => {
  const hex = '0123456789ABCDEF';
  let randomColor = '#';
  for (let index = 0; index < 6; index += 1) {
    randomColor += hex[Math.floor(Math.random() * 16)];
  }
  return randomColor;
};

// Atribui função ao botão 'randomColorButton'
randomColorButton.addEventListener('click', () => {
  for (let index = 0; index < optionColors.length; index += 1) {
    optionColors[index].style.backgroundColor = generateRandomColor();
  }
});

// Função para verificar range valor do input
const verifyInputValue = (inputValue) => {
  if (inputValue < 5 || inputValue > 50) {
    alert('Digite um valor entre 5 e 50');
    return false;
  }
  return true;
};

// Função para modificar tamanho do pixel board
generateBoardButton.addEventListener('click', () => {
  const boardDimension = inputBoardSize.value;
  if (!boardDimension) {
    window.alert('Board inválido!');
    return;
  }
  if (!verifyInputValue(boardDimension)) {
    return;
  }
  erasePixelBoard();
  createBoard(boardDimension);
  saveTableOnLocalStorage();
});

// Função para carregar a tabela do local storage
document.addEventListener('DOMContentLoaded', () => {
  const savedBoardHTML = localStorage.getItem('pixelBoardSaved');

  if (savedBoardHTML) {
    const container = document.getElementById('pixel-board');

    if (container) {
      container.innerHTML = savedBoardHTML;
      console.log(container);
    }
  }
  addClickToPixels();
});
