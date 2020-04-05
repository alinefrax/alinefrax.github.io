var canva = document.getElementById('game');
var ctx = canva.getContext('2d');
canva.height = 640;
canva.width = 1000;

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
imgOfKura.src = "kura.png";
imgOfBirch.src = "ГОТ_берёза.png";
imgOfPol.src = "ГОТ_полянка.png";

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



imgOfPol.addEventListener("load", function(e){
    var width = imgOfPol.naturalWidth;
    var height = imgOfPol.naturalHeight;
    ctx.drawImage(imgOfPol, 0, 0, width/2, height/2);
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
