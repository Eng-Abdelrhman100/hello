const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains_behind = document.getElementById("mountains_behind");
const mountains_front = document.getElementById("mountains_front");
const text = document.getElementById("text");
const btn = document.getElementById("btn");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  moon.style.bottom = value * 0.75 + "px";
  stars.style.left = value * 3 + "px";
  mountains_behind.style.left = value * 1.5 + "px";
  mountains_front.style.right = value * 1.5 + "px";
});
