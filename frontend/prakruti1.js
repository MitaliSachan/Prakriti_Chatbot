let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let vataCal = 0,
  pittaCal = 0,
  kaphaCal = 0;
function vata() {
  vataCal += 1;
}
function pitta() {
  pittaCal += 1;
}
function kapha() {
  kaphaCal += 1;
}
function result() {
  if (vataCal == pittaCal && pittaCal == kaphaCal) {
    document.getElementById("outputtext").innerHTML =
      "<strong>...YOU ARE TRIDOSHA...</strong>";
  } else if (vataCal >= pittaCal && vataCal >= kaphaCal) {
    document.getElementById("outputtext").innerHTML =
      "<strong>...YOUR DOSHA IS VATA...</strong> <br> Vata manages all the movements in the mind and body. It controls blood flow, evacuation of wastes, breathing and the movement of thoughts across the brain.";
  } else if (pittaCal >= vataCal && pittaCal >= kaphaCal) {
    document.getElementById("outputtext").innerHTML =
      "<strong>...YOUR DOSHA IS PITTA...</strong> <br> Pitta controls heat, metabolism and transformation in the mind and body. In addition to this, it also controls how to digest foods, how to metabolize sensory perceptions.";
  } else {
    document.getElementById("outputtext").innerHTML =
      "<strong>...YOUR DOSHA IS KAPHA...</strong> <br> Kapha provides structure and robustness to all things; it gives the cohesiveness needed to maintain a particular form. Kapha additionally hydrates all cells, lubricates the joints, saturates the skin, maintains immunity and safeguards the tissues.";
  }
}
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

const fadeInElements = document.querySelectorAll(".fade-in");

function checkFadeIn() {
  fadeInElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const animationDelay = element.getAttribute("data-delay");

    if (elementTop < window.innerHeight && elementBottom > 0) {
      setTimeout(
        () => {
          element.classList.add("active");
        },
        animationDelay ? parseInt(animationDelay) * 1000 : 0
      );
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("load", checkFadeIn);
window.addEventListener("scroll", checkFadeIn);
window.addEventListener("resize", checkFadeIn);
