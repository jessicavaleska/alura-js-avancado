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

    // transfomar a string '2016-11-12' em new Date(2016, 10, 12)
    let data = new Date(...this._inputData.value
      .split('-')
      .map(function(item, indice) {
        // if (indice === 1) {
        //   return item - 1;
        // }

        return item - indice % 2;
      })
    );

    console.log(data);
      
  }
}