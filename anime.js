const text = document.querySelector(".title");

gsap.to(text, {
  fontSize: "3rem", // font-size
  // animate between auto and a px value 🪄
  duration: 1,
  ease: "linear",
});

const nav = document.querySelectorAll(".menu li");
console.log(nav);
gsap.from(nav, {
  y: -100,
  //   fontSize: "3rem",
  //   duration: 1.5,
  ease: "linear",
  stagger: 0.2,
  //   yoyo: true,
});
