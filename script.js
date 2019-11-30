(function(){
    "use strict";
    const dateTime = new Date();
    document.cookie = "last_hit=" + dateTime.toLocaleDateString() + " - " + dateTime.toLocaleTimeString();

    debugger;

    const ball = document.getElementById("ball");
    const context = ball.getContext("2d");

    const timeout = 5;
    const radius = 10;
    let x = radius;
    let y = radius;
    let deltaX = 2;
    let deltaY = 2;
    let interval = start();
    let isRunning = true;


    ball.addEventListener("click", function(e){
        if (isRunning){
            clearInterval(interval);
            isRunning = false;
        }
        else{
            interval = start();
            isRunning = true;
        }
    });

    function start() {
        return setInterval(function () {
            drawCircle(ball);
        }, timeout);
    }

    function drawCircle(ball) {
        context.clearRect(0, 0, ball.width, ball.height);
        context.beginPath();
        context.fillStyle = "#FFFF00";
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.closePath();
        context.fill();

        if (x < radius || x > ball.width - radius){
            deltaX = -deltaX;
        }
        if (y < radius || y > ball.height - radius){
            deltaY = -deltaY;
        }

        x += deltaX;
        y += deltaY;
    }
})();