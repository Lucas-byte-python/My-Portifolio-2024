document.getElementById('copy-button').addEventListener('click', function() {
    var codeContent = document.getElementById('code-content').innerText;

    navigator.clipboard.writeText(codeContent).then(function() {
        alert('Código copiado para a área de transferência!');
    }, function(err) {
        console.error('Falha ao copiar o código: ', err);
    });
});
