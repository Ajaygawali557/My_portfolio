const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

let smileX = Math.random() * canvas.width;
let smileY = Math.random() * canvas.height;
const smileSize = 20;
let score = 0;

function drawSmile() {
  ctx.beginPath();
  ctx.arc(smileX, smileY, smileSize, 0, Math.PI * 2);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.stroke();
}

function drawScore() {
  ctx.font = '16px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText('Score: ' + score, 10, 20);
}

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  if (
    mouseX > smileX - smileSize &&
    mouseX < smileX + smileSize &&
    mouseY > smileY - smileSize &&
    mouseY < smileY + smileSize
  ) {
    score++;
    smileX = Math.random() * canvas.width;
    smileY = Math.random() * canvas.height;
  }
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSmile();
  drawScore();
  requestAnimationFrame(gameLoop);
}
 const heading = document.getElementById("dynamic-heading");

 // Define an array of background colors
 const colors = ["#FF0000", "#FF4500", "#DC143C", "#B22222", "#8B0000"]; // Different shades of red
 let colorIndex = 0;

 // Change the background color every 10 seconds
 setInterval(() => {
    heading.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Loop through colors
}, 10000); // 10 seconds

 
gameLoop();
