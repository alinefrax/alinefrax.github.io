var canva = document.getElementById('game');
var ctx = canva.getContext('2d');
canva.height = 1000;
canva.width = 2000;

//for KuraImage
/* var imgOfKura = new Image();
imgOfKura.src = "kura.png";
imgOfKura.addEventListener("load", function(e){
    var width = imgOfKura.naturalWidth;
    var height = imgOfKura.naturalHeight;
    canva.height = height/2;
    canva.width = width/2;
    ctx.drawImage(imgOfKura, 0, 0, canva.width, canva.height);
    canva.addEventListener("click", count);
}, false); */

//картинки
var imgOfKura = new Image();
var imgOfBirch = new Image();
var imgOfPol = new Image();
var gif = new Image();
imgOfKura.src = "kura.png";
imgOfBirch.src = "ГОТ_берёза.png";
imgOfPol.src = "ГОТ_полянка.png";
gif.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F598345500467362823%2F&psig=AOvVaw3B6JwFgbcQr2jOJorBhYWP&ust=1586203161937000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCS9rKJ0ugCFQAAAAAdAAAAABAD"
imgOfPol.addEventListener("load", function(e){
    var width = imgOfPol.naturalWidth;
    var height = imgOfPol.naturalHeight;
    ctx.drawImage(imgOfPol, 0, 0, width/2, height/2);
    //canva.addEventListener("click", count);
}, false);

imgOfKura.addEventListener("load", function(e){
    var width = imgOfKura.naturalWidth;
    var height = imgOfKura.naturalHeight;
    ctx.drawImage(imgOfKura, 31, 414, width/3, height/3);   
}, false);


imgOfBirch.addEventListener("load", function(e){
    var width = imgOfBirch.naturalWidth;
    var height = imgOfBirch.naturalHeight;
    ctx.drawImage(imgOfBirch, 334, 74, width/6, height/6);
    //canva.addEventListener("click", count);
}, false);

gif.addEventListener("load", function(e){
    var width = gif.naturalWidth;
    var height = gif.naturalHeight;
    ctx.drawImage(gif, 600, 100, width, height);
    //canva.addEventListener("click", count);
}, false);


//for counter
let i = 0;
let OurPointer = true;
document.getElementById("demo").innerHTML = i;
function count() {
  i++;
  document.getElementById("demo").innerHTML = i;
}
