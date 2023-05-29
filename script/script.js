const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle() = 'black';
ctx.moveTo(50, 20);
ctx.bezierCurveTo(40, 70, 50, 90, 80);
ctx.stroke();          
