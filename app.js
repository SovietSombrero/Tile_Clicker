$(document).ready(function() {
   
    var canvas = document.getElementById("myCanvas");
    var sb = document.getElementById("scoreBoard");
    var ctx2 = sb.getContext("2d");
    var ctx = canvas.getContext("2d");
    var size = 50;
    var block = {x: 0, y: 0};
    var check = false;
    var score = 0;
    var time = 30;
    
    
   function click(e) {
           var a = block.x;
           var s = block.y;
           if (e.clientX-396 >= a && e.clientX-396 <= a+size) {
               if (e.clientY-105 >= s && e.clientY-105 <= s+size) {
                   ctx.clearRect(a,s,size,size);
                   draw();
                   score += 1;
                   $("p#scoreCount").text(`Score: ${score}`);
                   
               }
           } 
        }
    
    function save(name, string) {
        localStorage.setItem(name, string);
    }
         
    
    function draw() {
        ranX = Math.floor((Math.random() * canvas.width)); 
        ranY = Math.floor((Math.random() * canvas.height));
        if (ranX >= 0 && ranX <= canvas.width-size) {
            if (ranY >= 0 && ranY <= canvas.height-size) {
                ctx.fillStyle = "black";
                ctx.fillRect(ranX,ranY,size,size);
                block.x = ranX;
                block.y = ranY;
            }
            else {
          draw();
    } 
 } else {
     draw();
 }
}


function gameloop() {
    draw();
    canvas.onclick = click;
    var myVar = setInterval(Time, 1000);
    
    function Time() {
        time -= 1;
        $("p#Timer").text(`Time: ${time}`);
        if (time == 0) {
            clearInterval(myVar);
        }
    }
}
    

   
    
gameloop();  
    
    ctx2.font = "bold 28px Arial";
    ctx2.fillStyle = "white";  
    ctx2.textAlign = "center";
    ctx2.fillText("Score Board",sb.width/2, sb.height/2-140);  
});