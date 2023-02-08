const canvas = <HTMLCanvasElement> document.getElementById('board');
const ctx = canvas.getContext('2d');

const go = new Go();

canvas.addEventListener('click', (event) => {
  const x = Math.floor(event.offsetX / 40);
  const y = Math.floor(event.offsetY / 40);
  go.play(x, y);
  render();
});

const render = () => {
  ctx.clearRect(0, 0, 760, 760);
  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 19; j++) {
      if (go.getBoard()[i][j] === 1) {
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(i * 40 + 20, j * 40 + 20, 18, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      } else if (go.getBoard()[i][j] === 2) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(i * 40 + 20, j * 40 + 20, 18, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }
    }
  }
};

render();