const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//cabeça
ctx.beginPath();
ctx.moveTo(20, 90);
ctx.quadraticCurveTo(60, 105, 140, 90);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(140, 90);
ctx.quadraticCurveTo(140, 90, 130, 30);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(20, 90);
ctx.quadraticCurveTo(30, 30, 30, 30);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(30, 30);
ctx.quadraticCurveTo(80, 10, 130, 30);
ctx.stroke();

//linha no meio do rosto
ctx.beginPath();
ctx.moveTo(80, 20);
ctx.lineTo(80, 97);
ctx.stroke();

//boca
ctx.fillStyle='green';
ctx.beginPath();
ctx.moveTo(47, 76);
ctx.lineTo(113, 76);

ctx.lineTo(111, 80);

//canto da boca direito
ctx.lineTo(117, 83);

ctx.lineTo(112, 83);

ctx.lineTo(112, 83);

//canto da boca esquerdo
ctx.lineTo(47, 76);

ctx.lineTo(50, 80);

ctx.lineTo(42, 83);
ctx.fill();

//contorno da boca
ctx.beginPath();
ctx.moveTo(47, 76);
ctx.lineTo(113, 76);

ctx.moveTo(49, 80);
ctx.lineTo(111, 80);

ctx.moveTo(113, 76); //canto da boca direito
ctx.lineTo(117, 83);

ctx.moveTo(110, 80);
ctx.lineTo(112, 83);

ctx.moveTo(117, 83);
ctx.lineTo(112, 83);

ctx.moveTo(42, 83); //canto da boca esquerdo
ctx.lineTo(47, 76);

ctx.moveTo(47, 83);
ctx.lineTo(50, 80);

ctx.moveTo(47, 83);
ctx.lineTo(42, 83);
ctx.stroke();

//olho esquerdo
ctx.beginPath();
ctx.moveTo(40, 45);
ctx.lineTo(70, 50);

ctx.moveTo(40, 50);
ctx.lineTo(70, 55);

ctx.moveTo(40, 45);
ctx.lineTo(40, 50);

ctx.moveTo(70, 55);
ctx.lineTo(70, 50);
ctx.stroke();

//olho direito
ctx.beginPath();
ctx.moveTo(120, 45);
ctx.lineTo(90, 50);

ctx.moveTo(120, 50);
ctx.lineTo(90, 55);

ctx.moveTo(90, 50);
ctx.lineTo(90, 55);

ctx.moveTo(120, 50);
ctx.lineTo(120, 45);
ctx.stroke();