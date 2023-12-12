function criarTabela() {
    let tabela = document.getElementById("pixel-board");

    for (var index = 0; index < 5; index++) {
      let linha = tabela.insertRow(index);

      for (var index2 = 0; index2 < 5; index2++) {
        let celula = linha.insertCell(index2);
        celula.classList.add("pixel");
      }
    }
  }
  criarTabela();

  let corSelecionada = null;
  let tabela = document.getElementById("pixel-board");
  
  function selecionarCor(cor) {
      if (corSelecionada !== null) {
          document.getElementById(corSelecionada).classList.remove("selected");
      }
      document.getElementById(cor).classList.add("selected");
      corSelecionada = cor;
  }
  
  function aplicarCor(celula) {
      if (corSelecionada !== null) {
          celula.style.backgroundColor = corSelecionada;
      }
  }
  
  document.getElementById("black").addEventListener("click", function() {
      selecionarCor("black");
  });
  
  document.getElementById("red").addEventListener("click", function() {
      selecionarCor("red");
  });
  
  document.getElementById("blue").addEventListener("click", function() {
      selecionarCor("blue");
  });
  
  document.getElementById("green").addEventListener("click", function() {
      selecionarCor("green");
  });
  
  // Adiciona um event listener para cada célula na tabela
  for (let index = 0; index < tabela.rows.length; index++) {
      for (let index2 = 0; index2 < tabela.rows[index].cells.length; index2++) {
          tabela.rows[index].cells[index2].addEventListener("click", function() {
              aplicarCor(this);
          });
      }
  }

  function limparQuadro() {
    for (let index = 0; index < tabela.rows.length; index++) {
        for (let index2 = 0; index2 < tabela.rows[index].cells.length; index2++) {
            tabela.rows[index].cells[index2].style.backgroundColor = "white";
        }
    }
}

  document.getElementById("clear-board").addEventListener("click", function() {
    limparQuadro();
});

function gerarCorAleatoria() {
    const letrasHex = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
        cor += letrasHex[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function aplicarCoresAleatorias() {
    const paletaCores = ["black", "red", "blue", "green"];
    for (let i = 0; i < paletaCores.length; i++) {
        let corAleatoria = gerarCorAleatoria();
        document.getElementById(paletaCores[i]).style.backgroundColor = corAleatoria;
    }
}

document.getElementById("button-random-color").addEventListener("click", function() {
    aplicarCoresAleatorias();
});