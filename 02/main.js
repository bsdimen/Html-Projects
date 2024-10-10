const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawBackground() {
    ctx.fillStyle = "#F88EB3";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawText() {
    ctx.fillStyle = "#222222";
    ctx.font = "50px 'Titan One'";
    ctx.textAlign = "center";
    ctx.fillText("Mistakes are costly", canvas.width / 2, canvas.height / 2 - 50);
    ctx.fillText("and", canvas.width / 2, canvas.height / 2);
    ctx.fillText("somebody must pay", canvas.width / 2, canvas.height / 2 + 50);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawBackground();
    drawText();

}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);


let drawing = false;
let lastX = 0;
let lastY = 0;

ctx.strokeStyle = '#000000';
ctx.lineWidth = 5;
ctx.lineCap = 'round';


canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);


function startDrawing(e) {
    drawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
    if (!drawing) return;


    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();


    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
    drawing = false;
    ctx.beginPath();
}


