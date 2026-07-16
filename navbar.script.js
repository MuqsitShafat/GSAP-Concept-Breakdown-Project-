const tl = gsap.timeline();

tl.to(".full", {
  right: "0",
  duration: 0.4,
});

tl.from(".nav-content h4", {
  x: 150,
  duration: 0.4,
  stagger: 0.15,
  opacity: 0,
});

tl.from(".nav-content i", {
  opacity: 0,
});

tl.pause();

let menu = document.querySelector(".ri-menu-fill");
menu.addEventListener("click", function (e) {
  console.log(`clicked`);
  tl.play();
});

let cross = document.querySelector(".ri-close-large-line");
cross.addEventListener("click", function (e) {
  console.log(`cross clicked`);
  tl.reverse();
});
