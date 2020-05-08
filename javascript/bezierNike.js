(function() {
    var
    htmlCanvas = document.getElementById('myCanvas'),
    ctx = htmlCanvas.getContext('2d');
    let x = 0.8;
    let y =0.7;

   initialize();

   function initialize() {
       window.addEventListener('resize', resizeCanvas, false);
       resizeCanvas();
    }

    function redraw() {

       ctx.rect(0, 0, window.innerWidth*x, window.innerHeight*y);
       //console.log(window.innerWidth);
       //console.log(window.innerHeight);
       ctx.save();
ctx.strokeStyle="rgba(0,0,0,0)";
ctx.font="   15px ";

if(window.innerWidth<=768){
    ctx.scale(0.2,0.2);
    ctx.translate(350,150);
}else{
    ctx.scale(0.3,0.3);
    ctx.translate(350,150);
}

ctx.save();
ctx.fillStyle="rgba(0,0,0,0)";
ctx.strokeStyle="black";
ctx.font="   15px ";
ctx.beginPath();
ctx.moveTo(353,393);
ctx.bezierCurveTo(586,436,1044,198,1905,18); 
ctx.bezierCurveTo(617,530,348,777,114,644);
ctx.bezierCurveTo(-126,464,183,123,290,8);
ctx.bezierCurveTo(181,197,202,359,353,393);

ctx.closePath();
ctx.fillStyle="black";
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
    }

    function resizeCanvas() {
        htmlCanvas.width = window.innerWidth*x;
        htmlCanvas.height = window.innerHeight*y;
        redraw();
    }

    
})();