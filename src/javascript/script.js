// Efeitos de Fade
function handleAnimations() {
  const elements = document.querySelectorAll('.fadeL, .fadeR');

  elements.forEach(element => {
    const revealConfig = {
      duration: 2000,
      reset: true,
    };

    if (window.innerWidth <= 768) {
      // Para telas menores ou iguais a 768px
      revealConfig.origin = 'bottom';
      revealConfig.distance = '15%';
    } else {
      // Para telas maiores que 768px
      if (element.classList.contains('fadeL')) {
        revealConfig.origin = 'left';
      } else {
        revealConfig.origin = 'right';
      }
      revealConfig.distance = '20%';
    }

    ScrollReveal().reveal(element, revealConfig);
  });
}

// Chamar a função quando a página carregar e sempre que o tamanho da janela mudar
window.onload = handleAnimations;
window.addEventListener("resize", handleAnimations);

// Garante que a página role para o topo após todos os recursos serem carregados
$(window).on("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});
