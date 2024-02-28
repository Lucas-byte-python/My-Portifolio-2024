document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', function() {
        var codeContent = this.parentElement.querySelector('code').innerText;

        navigator.clipboard.writeText(codeContent).then(function() {
            alert('Código copiado para a área de transferência!');
        }, function(err) {
            console.error('Falha ao copiar o código: ', err);
        });
    });
});
