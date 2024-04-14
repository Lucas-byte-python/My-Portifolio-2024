document.addEventListener("DOMContentLoaded", function() {
    const link = document.querySelector('a[href="#port"]');
  
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector('#port');
      const offset = 100; // ajuste o valor conforme necessário
  
      if (target) {
        const offsetTop = target.offsetTop - offset;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
  
        // Ajustar a posição após a animação de rolagem ser concluída
        setTimeout(() => {
          const finalOffset = offsetTop - offset;
          window.scrollTo({
            top: finalOffset,
            behavior: "smooth"
          });
        }, 100); // Ajuste o tempo conforme necessário
      }
    });
  });

document.addEventListener("DOMContentLoaded", function() {
const link = document.querySelector('a[href="#eu"]');

link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector('#eu');
    const offset = 120; // ajuste o valor conforme necessário

    if (target) {
    const offsetTop = target.offsetTop - offset;
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });

    // Ajustar a posição após a animação de rolagem ser concluída
    setTimeout(() => {
        const finalOffset = offsetTop - offset;
        window.scrollTo({
        top: finalOffset,
        behavior: "smooth"
        });
    }, 100); // Ajuste o tempo conforme necessário
    }
});
});