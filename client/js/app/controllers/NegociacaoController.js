class NegociacaoController {
  constructor() {
    // percorre o DOM uma única vez, incluindo os campos como propiedades da classe
    let $ = document.querySelector.bind(document);

    this.inputData = $('#data');
    this.inputQuantidade = $('#quantidade');
    this.inputValor = $('#valor');
  }

  adiciona(event) {
    // cancela a submissão do formulários para poder capturar od dados
    event.preventDefault();

    console.log(this.inputData.value);
    console.log(this.inputQuantidade.value);
    console.log(this.inputValor.value);
      
  }
}