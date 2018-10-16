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
    
    function draw() {
        ranX = Math.floor((Math.random() * canvas.width)); 
        ranY = Math.floor((Math.random() * canvas.height));
        if (ranX >= 0 && ranX <= canvas.width-size) {
            if (ranY >= 0 && ranY <= canvas.height-size) {
                ctx.fillStyle = "black";
                ctx.fillRect(ranX,ranY,size,size);
                blocks.push( {"x":ranX,"y":ranY} );
            //console.log(blocks[blocks.length - 1])
            }
            else {
          draw();
    } 
 } else {
     draw();
 }
}
function gameloop() {
    
    for(var i = 0; i < 10; i++) {
        draw();
    }
}
gameloop();     
});