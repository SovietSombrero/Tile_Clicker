$(document).ready(function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = 10;
    var y = 10;
    var size = 50;
    var blocks = [];
    var numBlocks = 0;
    for (var i = 0; i < 6; i++ ) {
        x = 10;
        for (var r = 0; r < 10; r++) {
        ctx.fillStyle = "#283747";
        ctx.fillRect(x,y,size,size);
            
        x += 60;
        blocks.push( {"x":x,"y":y} );
           console.log(blocks[blocks.length - 1])
        }
        y += 60;
    }  
});