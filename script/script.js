const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(20, 90);
ctx.quadraticCurveTo(60, 100, 100, 90);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90, 90);
ctx.quadraticCurveTo(10, 10, 10, 90);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(20, 90);
ctx.quadraticCurveTo(30, 30, 30, 30);
ctx.stroke();