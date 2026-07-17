// window.addEventListener("wheel", function (e) {
//   if (e.deltaY > 0) {
//     gsap.to(".marque", {
//         x: "-200%",
//       duration: 2,
//       ease: "none",
//       repeat: -1,
//     });
//     gsap.to(".marque img", {
//       rotate: 180,
//     });
//   } else {
//     gsap.to(".marque", {
//      x: "0%",
//       duration: 2,
//       ease: "none",
//       repeat: -1,
//     });
//     gsap.to(".marque img", {
//     rotate : 0
// })
//   }
// });

// Infinite marquee animation
let marquee = gsap.to(".marque", {
  xPercent: -100,
  duration:3,
  ease: "none",
  repeat: -1
});

// Scroll direction
window.addEventListener("wheel", (e) => {

  if (e.deltaY > 0) {

    // Move Left
    marquee.timeScale(1);

    gsap.to(".marque img", {
      rotation: 180,
      duration: 0.3
    });

  } else {

    // Move Right
    marquee.timeScale(-1);

    gsap.to(".marque img", {
      rotation: 0,
      duration: 0.3
    });

  }

});