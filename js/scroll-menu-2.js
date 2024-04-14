document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menu-2 a");
  
    menuLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1); // Obtém o ID da seção alvo
        const target = document.getElementById(targetId);
        const offset = 100; // Ajuste o valor conforme necessário
  
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
          }, 500); // Ajuste o tempo conforme necessário
        }
      });
    });
  });
  