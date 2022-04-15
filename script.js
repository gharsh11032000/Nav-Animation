const menuBars = document.querySelector(".menu-bars");
const overlay = document.querySelector(".overlay");
const nav1 = document.querySelector(".nav-1");
const nav2 = document.querySelector(".nav-2");
const nav3 = document.querySelector(".nav-3");
const nav4 = document.querySelector(".nav-4");
const nav5 = document.querySelector(".nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

const navAnimation = function (direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
};

const toggleNav = function () {
  menuBars.classList.toggle("change");

  overlay.classList.toggle("active");

  if (overlay.classList.contains("active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    navAnimation("out", "in");
  }

  if (!overlay.classList.contains("active")) {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    navAnimation("in", "out");
  }
};

// EventListners

menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
