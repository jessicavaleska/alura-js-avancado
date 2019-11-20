class NegociacaoController {
    adiciona(event) {
        // cancela a submissão do formulários para poder capturar od dados
        event.preventDefault();
        
        // mantêm a associação do método querySelector ao document
        let $ = document.querySelector.bind(document);
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
        
    }
}