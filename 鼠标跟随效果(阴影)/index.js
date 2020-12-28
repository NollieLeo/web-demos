let mouseX = 0;
let mouseY = 0;
let x = 0;
let y = 0;
let offset = 0;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
const percentage = (value, total) => (value / total) * 100;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  x = percentage(mouseX, windowWidth) - offset;
  y = percentage(mouseY, windowHeight) - offset;
  document.documentElement.style.setProperty('--mouse-x', `calc(${x}vw - 50%)`);
  document.documentElement.style.setProperty('--mouse-y', `calc(${y}vh - 50%)`);
})

window.addEventListener('resize', () => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
})
