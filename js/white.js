function toggleDarkMode() {
    var darkModeIcon = document.getElementById('darkModeIcon');
    var currentIcon = darkModeIcon.classList;

    // Verifica se o ícone atual é da lua ou do sol e alterna para o outro
    if (currentIcon.contains('bi-moon')) {
        darkModeIcon.classList.remove('bi-moon'); // Remove a classe da lua
        darkModeIcon.classList.add('bi-sun'); // Adiciona a classe do sol
        document.body.classList.add('dark');
    } else {
        darkModeIcon.classList.remove('bi-sun'); // Remove a classe do sol
        darkModeIcon.classList.add('bi-moon'); // Adiciona a classe da lua
        document.body.classList.remove('dark');
    }
}