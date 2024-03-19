let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

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
