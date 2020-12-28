// 存鼠标的位置
let mouseX = 0;
let mouseY = 0;

let x = 0;
let y = 0;

let offset = 50; // center
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
const percentage = (value, total) => (value / total) * 100;

const label = document.querySelector(".label");
const labelWidth = label.offsetWidth;
const labelHeight = label.offsetHeight;


window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  x = percentage(mouseX, windowWidth) - offset;
  y = percentage(mouseY, windowHeight) - offset;
  document.documentElement.style.setProperty("--mouse-x", `calc(${x}vw - 50% + ${labelWidth / 2}px)`);
  document.documentElement.style.setProperty("--mouse-y", `calc(${y}vh - 50% + ${labelHeight / 2}px)`);
  label.textContent = `(${Math.round(x)}% ,${Math.round(y)}%)`;
});

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
});
