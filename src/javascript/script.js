const elements = document.querySelectorAll(".fadeL");

elements.forEach((element) => {
  ScrollReveal().reveal(element, {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });
});

const elements2 = document.querySelectorAll(".fadeR");

elements2.forEach((element) => {
  ScrollReveal().reveal(element, {
    origin: "right",
    duration: 2000,
    distance: "20%",
  });
});

// Garante que a página role para o topo após todos os recursos serem carregados
$(window).on("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});
