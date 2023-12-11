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