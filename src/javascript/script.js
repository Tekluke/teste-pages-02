// Efeitos de Fade
function handleAnimations() {
  const elements = document.querySelectorAll('.fadeL, .fadeR');

  ScrollReveal().clean(); // Limpa animações anteriores

  elements.forEach(element => {
    const revealConfig = {
      duration: 2000,
      reset: true,
      origin: window.innerWidth <= 768 ? 'bottom' : (element.classList.contains('fadeL') ? 'left' : 'right'),
      distance: '20%'
    };

    // Utilizando requestAnimationFrame para garantir a atualização
    requestAnimationFrame(() => {
      ScrollReveal().reveal(element, revealConfig);
    });
  });
}

// Chamar a função quando a página carregar e sempre que o tamanho da janela mudar
window.onload = handleAnimations;

// Garante que a página role para o topo após todos os recursos serem carregados
$(window).on("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});
