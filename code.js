var canva = document.getElementById('game');
var ctx = canva.getContext('2d');

//for KuraImage
var imgOfKura = new Image();
imgOfKura.src = "kura.png";
imgOfKura.addEventListener("load", function(e){
    var width = imgOfKura.naturalWidth;
    var height = imgOfKura.naturalHeight;
    canva.height = height/2;
    canva.width = width/2;
    ctx.drawImage(imgOfKura, 0, 0, canva.width, canva.height);
    canva.addEventListener("click", count);
}, false);



//for counter
let i = 0;
let OurPointer = true;
document.getElementById("demo").innerHTML = i;
function count() {
  i++;
  document.getElementById("demo").innerHTML = i;
}
