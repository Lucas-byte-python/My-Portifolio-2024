document.addEventListener('DOMContentLoaded', function () {
    // Função para rolar suavemente para a seção alvo
    function scrollSuave(targetId) {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Adicionar eventos de clique para os links de navegação
    const links = document.querySelectorAll('.menu a');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollSuave(targetId);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Função para rolar suavemente para a seção alvo com espaçamento
    function scrollSuave(targetId, offset) {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    }

    // Adicionar eventos de clique para os links de navegação
    const links = document.querySelectorAll('a');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            // Ajuste o valor de offset conforme necessário (por exemplo, 20 pixels)
            const offset = 250;
            scrollSuave(targetId, offset);
        });
    });
});