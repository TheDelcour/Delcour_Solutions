var canvas = document.getElementById("particleCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var particles = [];

function random (min, max) {
  return Math.random() * (max - min) + min;
}

function draw() {
  const particle = {
    x: random(0,canvas.width),
    y: random(0,canvas.height),
    xvel: Math.random() * 0.8,
    yvel: Math.random() * 0.8,
    color: `rgba(${random(250, 255)}, ${random(100, 153)}, ${random(0, 0)})`,
    size: 7,
  };

  particles.push(particle);

  if (particles.length > 200) {
    particles.shift();
  }
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i += 1){
    const p = particles[i];
    context.fillStyle = p.color;
    context.fillRect(p.x, p.y, p.size, p.size);
    p.x += p.xvel;
    p.y -= p.yvel;
  }

  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
