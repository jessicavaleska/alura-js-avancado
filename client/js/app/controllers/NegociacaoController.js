class NegociacaoController {
    adiciona(event) {
        // cancela a submissão do formulários para poder capturar od dados
        event.preventDefault();
        alert('Chamei a ação no controller');
    }
}