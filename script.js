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
  