var canva = document.getElementById('game');
var ctx = canva.getContext('2d');

//for KuraImage
var imgOfKura = new Image();
imgOfKura.src = "kura.png";
imgOfBirch.src = "ГОТ_берёза.png";
imgOfKura.addEventListener("load", function(e){
    var width = imgOfKura.naturalWidth;
    var height = imgOfKura.naturalHeight;
    canva.height = height/2;
    canva.width = width/2;
    ctx.drawImage(imgOfKura, 0, 0, canva.width, canva.height);
    //canva.addEventListener("click", count);
}, false);

imgOfBirch.addEventListener("load", function(e){
    var width = imgOfBirch.naturalWidth;
    var height = imgOfBirch.naturalHeight;
    canva.height = height/3;
    canva.width = width/3;
    ctx.drawImage(imgOfBirch, 0, 0, canva.width, canva.height);
    imgOfBirch.addEventListener("click", count);
}, false);

//for counter
let i = 0;
let OurPointer = true;
document.getElementById("demo").innerHTML = i;
function count() {
  i++;
  document.getElementById("demo").innerHTML = i;
}
