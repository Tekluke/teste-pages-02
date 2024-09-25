$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  const sections = $("section");
  const navItems = $(".nav-item");

  $(window).on("scroll", function () {
    const header = $("header");
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1");
    }

    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    });

    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");
  });

  // Efeitos de Fade
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
});


// Garante que a página role para o topo após todos os recursos serem carregados
$(window).on("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});
