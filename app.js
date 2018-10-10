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
    var colorchoice;
        
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
    
    draw(localStorage.colorChoice);

    $("#button").click(function() {
        if (check == false) {
            ctx.clearRect(x,y,canvas.width,canvas.height);
            document.getElementById("button").innerText = "Change to green?";
            x = 10;
            y = 10;
            draw("navy");
            check = true;
            save("colorChoice", "navy");
} else {
    ctx.clearRect(x,y,canvas.width,canvas.height);
    document.getElementById("button").innerText = "Change back to blue?";
    x = 10;
    y = 10;
    draw("green");
    check = false;
    save("colorChoice","green");

}
})
     
});