var canva = document.getElementById('game');
var ctx = canva.getContext('2d');

//for KuraImage
var imgOfKura = new Image();
imgOfKura.src = "kura.png";
imgOfKura.addEventListener("load", function(e){
    var width = imgOfKura.naturalWidth;
    var height = imgOfKura.naturalHeight;
    canva.height = height/3;
    canva.width = width/3;
    ctx.drawImage(imgOfKura, 0, 0, width/5, height/5);

    imgOfKura.addEventListener(“mousedown”, count);
}, false);

//for counter
let i = 0;
let OurPointer = true;
document.getElementById("demo").innerHTML = i;
function count() {
  i++;
  document.getElementById("demo").innerHTML = i;
}
