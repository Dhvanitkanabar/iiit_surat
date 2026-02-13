const sections = document.querySelectorAll(".section");

sections.forEach(section => {

  section.style.backgroundImage = `url(${section.dataset.img})`;

  section.addEventListener("mouseenter", () => {
    section.style.transform = "scale(1.05)";
  });

  section.addEventListener("mouseleave", () => {
    section.style.transform = "scale(1)";
  });

});
