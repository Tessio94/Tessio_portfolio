import Typed from "typed.js";
import ScrollReveal from "scrollreveal";

function component() {
  // toggle hamb menu
  let hambMenu = document.querySelector("#hamburger");
  let navbar = document.querySelector(".navbar");

  hambMenu.onclick = () => {
    hambMenu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // navbar - scroll active
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".navbar a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      // console.log(top, offset, height, id);

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector(`.navbar a[href*=${id}]`)
            .classList.add("active");
        });
      }
    });
    // sticky navbar
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    // remove navbar when responsive
    hambMenu.classList.remove("bx-x");
    navbar.classList.remove("active");
  };

  // scroll reveal
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });
  ScrollReveal().reveal(".section1-content, .header", { origin: "top" });
  ScrollReveal().reveal(
    ".moja-slika, .section3-container,.section4-container,#about,#contact form",
    {
      origin: "bottom",
    }
  );
  ScrollReveal().reveal(".section1-content h1, .section2 #moja-slika", {
    origin: "left",
  });
  ScrollReveal().reveal(".section1-content p, .section2-content", {
    origin: "right",
  });

  // types.js library
  const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  // form
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // button read-more
  document.getElementById("about-btn").addEventListener("click", readMore);

  function readMore() {
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "block";
  }

  document
    .getElementById("close-overlay")
    .addEventListener("click", closeOverlay);

  document.querySelector(".overlay").addEventListener("click", closeOverlay);

  window.addEventListener("keydown", closeOverlay);

  function closeOverlay(e) {
    if (
      e.key === "Escape" ||
      e.target.id === "close-overlay" ||
      e.target.classList[0] === "overlay"
    ) {
      const overlay = document.querySelector(".overlay");
      overlay.style.display = "none";
    }
  }
}

export default component;
