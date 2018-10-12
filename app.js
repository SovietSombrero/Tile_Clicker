$(document).ready(function() {
   
    var canvas = document.getElementById("myCanvas");
    var sb = document.getElementById("scoreBoard");
    var ctx2 = sb.getContext("2d");
    var ctx = canvas.getContext("2d");
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
           if (e.clientX-396 >= a && e.clientX-396 <= a+size) {
               if (e.clientY-66 >= s && e.clientY-66 <= s+size) {
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
    
    function draw(x,y) {
        if (x >= 0 && x <= canvas.width-size) {
            if (y >= 0 && y <= canvas.height-size) {
                ctx.fillStyle = "black";
                ctx.fillRect(x,y,size,size);
                blocks.push( {"x":x,"y":y} );
            //console.log(blocks[blocks.length - 1])
            } 
        }
    }


function gameloop() {
    
    for(var i = 0; i < 10; i++) {
        ranX = Math.floor((Math.random() * canvas.width)-size); 
        ranY = Math.floor((Math.random() * canvas.height)-size);
        draw(ranX, ranY);
    }
}
gameloop();     
});