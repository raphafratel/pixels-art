//Colori a paleta de cores
document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'green';

//Função para criar tabela - o primeiro for cria 5 linhas e o segundo for cria 5 colunas
const criarTabela = () => {
  let tabela = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index++) {
    let linha = tabela.insertRow(index);

    for (let index2 = 0; index2 < 5; index2++) {
      let celula = linha.insertCell(index2);
      celula.classList.add('pixel');
    }
  }
};
criarTabela();

//Atribui a classe selected para a cor que receber o click do mouse

/* funcao seleciona cor */
const cores = document.getElementsByClassName('color'); //recuperando os elementos que possuem a classe color.

for (index = 0; index < cores.length; index += 1) {
  //Cada elemento recebe um eventlistener
  cores[index].addEventListener('click', (event) => {
    if (document.getElementsByClassName('selected')[0] !== undefined) {
      //procura classe selected
      document
        .getElementsByClassName('selected')[0]
        .classList.remove('selected'); //remove a classe selected encontrada
    }
    event.target.classList.add('selected'); //cria a classe selected ao elemento que recebeu o clique
  });
}

const salvarPixels = () => {
    const coresSalvas = [];
    for (let index = 0; index < tabela.rows.length; index += 1) {
        for (let index2 = 0; index2 < tabela.rows[index].cells.length; index2+=1) {
          coresSalvas.push([index, index2, tabela.rows[index].cells[index2].style.backgroundColor])
        }
    }
    localStorage.setItem('coresPosicao', JSON.stringify(coresSalvas));
} 

// Adiciona um event listener para cada célula na tabela
let tabela = document.getElementById('pixel-board');

for (let index = 0; index < tabela.rows.length; index += 1) {
  for (let index2 = 0; index2 < tabela.rows[index].cells.length; index2+=1) {
    tabela.rows[index].cells[index2].addEventListener('click', (event)=> {
        console.log(event)
      if (document.getElementsByClassName('selected')[0] !== undefined) {
        event.target.style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
        salvarPixels();
      }
    });
  }
}
 
/*Requisito 5*/

const limparQuadro= ()=> {
    for (let index = 0; index < tabela.rows.length; index++) {
        for (let index2 = 0; index2 < tabela.rows[index].cells.length; index2++) {
            tabela.rows[index].cells[index2].style.backgroundColor = "white";
            salvarPixels();
        }
    }
}

document.getElementById("clear-board").addEventListener("click",limparQuadro);

/*Requisito 6*/

const gerarCorAleatoria=()=> {
    const letrasHex = "0123456789ABCDEF";
    let corAleatoria = "#";
    for (let index = 0; index < 6; index+=1) {
        corAleatoria += letrasHex[Math.floor(Math.random() * 16)];
    }
    return corAleatoria;
}

document.getElementById("button-random-color").addEventListener("click",()=>{
    for (let index =0; index < cores.length; index+=1) {
       cores[index].style.backgroundColor = gerarCorAleatoria();
    }
});


/*Requisito 7*/

const recuperaPixel = () => {
    const posicaoRecuperada = JSON.parse(localStorage.getItem('coresPosicao')) 
    if (posicaoRecuperada){
    for (let index = 0; index < posicaoRecuperada.length; index+=1){
        tabela.rows[posicaoRecuperada[index][0]].cells[posicaoRecuperada[index][1]].style.backgroundColor = posicaoRecuperada[index][2];
    }
    }
}
recuperaPixel();