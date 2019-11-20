class NegociacaoController {
  constructor() {
    // percorre o DOM uma única vez, incluindo os campos como propiedades da classe
    let $ = document.querySelector.bind(document);

    // incluindo a convenção de "privado"
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
    // cancela a submissão do formulários para poder capturar od dados
    event.preventDefault();

    // let data = new Date(this._inputData.value.split('-'));
    let data = new Date(this._inputData.value.replace(/-/g, ',')); // experssão regular
    console.log(data);
      
  }
}