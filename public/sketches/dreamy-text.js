// Create a full-screen text canvas at Hydra's resolution
const canvas = document.createElement('canvas');
const dpr = window.devicePixelRatio || 1;
canvas.width = window.innerWidth * dpr;
canvas.height = window.innerHeight * dpr;
canvas.style.display = 'none';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
// Turn off smoothing to keep text crisp
ctx.imageSmoothingEnabled = false;

// Draw text at full resolution
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.font = `${500 * dpr}px Anton`;
ctx.fillStyle = 'black';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('Vie', canvas.width / 2, canvas.height / 2);

// Feed it into Hydra as a texture source
s0.init({ src: canvas });

// Background animation
osc(2, 1.5, 2)
  .modulate(noise(3, 0.9), 0.3)
  .brightness(0.2)
  .contrast(1.1)
  .saturate(-0.2)
  .rotate(0.5)
  .out(o0);

// Animate only the text mask
src(s0)
  .luma(0.2, 0.4)
  .modulate(noise(2, 0.2), 0.2)
  .saturate(1.4)
  .scale(() => Math.sin(time * 0.2) * 0.01 + 1)
  .out(o1);

// Composite and render
src(o0)
  .diff(o1, 1)
  .out(o2);

render(o2);
