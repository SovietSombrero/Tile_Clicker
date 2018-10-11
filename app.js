$(document).ready(function() {
   
    var canvas = document.getElementById("myCanvas");
    var sb = document.getElementById("scoreBoard");
    var ctx2 = sb.getContext("2d");
    var ctx = canvas.getContext("2d");
    var x = 10;
    var y = 10;
    var size = 50;
    var blocks = [];
    var check = false;
    
   /* onmousemove = function(e){
    console.log("mouse location:", e.clientX, e.clientY);      
    
    }
    */
    
   canvas.onclick = function(e) {
       for (var i = 0; i < blocks.length; i++) {
           var a = blocks[i].x;
           var s = blocks[i].y;
           if (e.clientX-1424*.23 >= a && e.clientX-1424*.23  <= a+size) {
               if (e.clientY-742-(37+21.4) >= s && e.clientY-742-(37+21.4) <= s+size) {
                   console.log("FOUND IT!!! ",e.clientX,e.clientY, a,s);
                   ctx.clearRect(a,s,size,size);
               }
           } 
       }
   }
    
    function save(name, string) {
        localStorage.setItem(name, string);
    }
        
    ctx2.font = "bold 28px Arial";
    ctx2.fillStyle = "white";  
    ctx2.textAlign = "center";
    ctx2.fillText("Score Board",sb.width/2, sb.height/2-140);   
    
    function draw(color) {
    for (var i = 0; i < 6; i++ ) {
        x = 10;
        for (var r = 0; r < 10; r++) {
        ctx.fillStyle = color;
        ctx.fillRect(x,y,size,size);
        x += 60;
        blocks.push( {"x":x,"y":y} );
        //console.log(blocks[blocks.length - 1])
       
        }
        y += 60;
    }
}
    
    draw();
     
});