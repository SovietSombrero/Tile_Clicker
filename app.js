$(document).ready(function() {
    var canvas = document.getElementById("myCanvas");
    var sb = document.getElementById("scoreBoard");
    var ctx2 = sb.getContext("2d");
    var ctx = canvas.getContext("2d");
    var x = 10;
    var y = 10;
    var size = 50;
    var blocks = [];
    
   
    ctx2.font = "30px Arial";
    ctx2.fillStyle = "white";  
    ctx2.textAlign = "center";
    ctx2.fillText("Score Board",canvas.width/2, canvas.height/2);   
    
    
    for (var i = 0; i < 6; i++ ) {
        x = 10;
        for (var r = 0; r < 10; r++) {
        ctx.fillStyle = "#283747";
        ctx.fillRect(x,y,size,size);
        x += 60;
        blocks.push( {"x":x,"y":y} );
        //console.log(blocks[blocks.length - 1])
       
        }
        y += 60;
    }
    
    
});