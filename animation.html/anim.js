window.onload = function(){
    var canvas = document.getElementById("bounce");
    var ctx = canvas.getContext("2d");
    var x = 0;
    var y = 0;
    var dx = 1;
    var dy = -1;

    // draw();

    function move(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect(x, y, 20, 20);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();

        if(x + dx > canvas.width-20){
            dx = -dx;
        }
        if(x + dx < 0){
            dx = -dx;
        }
        if(y + dy > canvas.height-20){
            dy = -dy;
        }
        if(y + dy < 0){
            dy = -dy;
        }
        x += dx;
        y += dy;
    }
    setInterval(move, 10)
}