var canva = document.getElementById('game');
var ctx = canva.getContext('2d');
canva.height = 1399;
canva.width = 895;


//картинки
var imgOfKura = new Image();
var imgOfBirch = new Image();
var imgOfPol = new Image();
var gif = new Image();
imgOfKura.src = "kura.png";
imgOfBirch.src = "ГОТ_берёза.png";
imgOfPol.src = "ГОТ_полянка.png";
gif.src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/267px-Rotating_earth_%28large%29.gif"

imgOfKura.addEventListener("load", function(e){
   var width = imgOfKura.naturalWidth;
   var height = imgOfKura.naturalHeight;
   ctx.drawImage(imgOfKura, 31, 314, width/3, height/3);
}, false);


imgOfBirch.addEventListener("load", function(e){
   var width = imgOfBirch.naturalWidth;
   var height = imgOfBirch.naturalHeight;
   ctx.drawImage(imgOfBirch, 304, 54, width/7, height/7);
   //canva.addEventListener("click", count);
}, false);

gif.addEventListener("load", function(e){
   var width = gif.naturalWidth;
   var height = gif.naturalHeight;
   ctx.drawImage(gif, 600, 100, width, height);
}, false);

// Счётчик и действия с мышью на холсте
var krak = 1;
function count() {
  krak++;
}

var OurPointer = true;
canva.onmousedown = function() {
 if (OurPointer == true) {myVar = setInterval(count, 100);} OurPointer = false;
}
canva.onmouseup = function() {
 clearInterval(myVar); OurPointer = true;
}
canva.onmouseout = function() {
 clearInterval(myVar); OurPointer = true;
}


//Функция, очищающая часть холста и выводящая счёт

function draw() {
  ctx.clearRect(0,0,300,60);
  ctx.beginPath();
  ctx.fillStyle = "#00F";
  ctx.strokeStyle = "#F00";
  ctx.font = "italic 30pt Arial";
  ctx.fillText("Счёт: "+krak, 30, 60);
  ctx.closePath();
}

//Обновляет холст

setInterval(draw, 10);

