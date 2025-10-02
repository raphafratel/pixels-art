# 🎨 Pixel Art Maker

Este projeto é um aplicativo interativo de desenho em pixels (Pixel Art Maker) desenvolvido como parte de um **exercício acadêmico** para consolidar conhecimentos fundamentais em desenvolvimento web (HTML, CSS e JavaScript).

O objetivo principal foi criar uma aplicação funcional que permite ao usuário selecionar cores, pintar em uma grade de pixels, redimensionar o quadro de desenho e persistir o estado do quadro usando o armazenamento local do navegador.

## ✨ Funcionalidades do Projeto

* **Paleta de Cores:** Quatro cores iniciais (preto, vermelho, azul, verde).
* **Seleção de Cor:** O usuário pode clicar em uma cor na paleta para torná-la a cor "selecionada" (`.selected`).
* **Pintura:** Ao clicar em um pixel, ele é preenchido com a cor atualmente selecionada.
* **Redimensionamento do Quadro:** O usuário pode inserir um valor (entre 5x5 e 50x50) e gerar um novo quadro.
* **Limpar Quadro:** Botão para resetar todos os pixels para a cor branca.
* **Cores Aleatórias:** Botão para gerar quatro novas cores aleatórias na paleta.
* **Persistência de Dados:** O estado do quadro de pixels é salvo no `localStorage` do navegador e carregado automaticamente ao reabrir a página.

## 🧠 Conceitos Acadêmicos e Técnicos Aplicados

Este projeto foi fundamental para praticar e dominar os seguintes conceitos:

### 1. Manipulação do DOM (Document Object Model)

A espinha dorsal da interatividade da aplicação.

* **Seleção de Elementos:** Uso de métodos como `document.getElementById()`, `document.getElementsByClassName()`, e `document.querySelector()` (implícito no CSS) para capturar elementos específicos da página.
* **Criação Dinâmica:** A função `createBoard(boardDimension)` demonstra a criação e inserção de elementos HTML (`<table>`, `<tr>`, `<td>` com a classe `.pixel`) **diretamente via JavaScript** para montar a grade de desenho.
* **Modificação de Classes:** Uso de `classList.add()` e `classList.remove()` na função `setupColorSelection()` para gerenciar o estado visual de qual cor está ativa (classe `.selected`).
* **Modificação de Estilos:** Alteração de propriedades CSS via JS, como `element.style.backgroundColor`, para mudar a cor dos pixels e da paleta.

### 2. Event Handling (Tratamento de Eventos)

Essencial para a interatividade com o usuário.

* **Event Listeners:** Uso extensivo de `addEventListener('click', ...)` para responder a interações do usuário nos botões, nas cores da paleta e nos pixels.
* **Event Delegation (Indireta):** A função `addClickToPixels()` anexa *listeners* a cada pixel após a criação da grade, permitindo a resposta ao clique para a pintura.
* **Acesso ao Evento:** Utilização de `event.target` dentro dos *listeners* para identificar o elemento exato que foi clicado, como o pixel ou a cor, e manipular apenas aquele elemento.

### 3. Funções e Modularização do Código (JavaScript)

* **Funções Dedicadas:** Criação de funções específicas como `createBoard()`, `setupColorSelection()`, `erasePixelBoard()`, e `generateRandomColor()` para tornar o código mais **limpo, reutilizável e de fácil manutenção**.
* **Controle de Fluxo:** Utilização de laços de repetição (`for`) para iterar sobre coleções de elementos (pixels, cores) e aplicar lógica ou *listeners* em massa.

### 4. Geração de Dados e Validação

* **Geração de Cores:** A função `generateRandomColor()` demonstra lógica básica de manipulação de *strings* e uso de `Math.random()` e `Math.floor()` para construir um código de cor hexadecimal válido (`#RRGGBB`).
* **Validação de Input:** A função `verifyInputValue()` é usada para impor regras de negócio (dimensão entre 5 e 50) e fornecer *feedback* ao usuário (`alert`).

### 5. Persistência de Dados (Web Storage API)

* **`localStorage`:** Uso do `localStorage.setItem()` na função `saveTableOnLocalStorage()` para persistir o **HTML do quadro** (`board.outerHTML`).
* **Carregamento no Início:** Uso do *listener* `document.addEventListener('DOMContentLoaded', ...)` para garantir que o estado salvo seja carregado assim que a página estiver pronta, proporcionando uma experiência contínua.

### 6. HTML e CSS (Estrutura e Estilização Responsiva)

* **Semântica Básica:** Estrutura clara usando `div` para agrupamento e `table` para a grade.
* **CSS Grid/Flexbox:** Uso de `display: flex` em `#color-palette` e `.controls-container` para um layout moderno e responsivo dos elementos.
* **Layout Responsivo:** Implementação de uma **Media Query** (`@media (max-width: 480px)`) para adaptar o tamanho do título e garantir que botões e inputs se ajustem corretamente em telas menores.

## 🚀 Como Executar o Projeto

1.  Clone ou baixe este repositório.
2.  Abra o arquivo `index.html` em seu navegador.
3.  O quadro de 5x5 será carregado por padrão ou o estado salvo da sua última sessão.

**Tecnologias Utilizadas:** HTML5, CSS3, JavaScript (ES6+).
