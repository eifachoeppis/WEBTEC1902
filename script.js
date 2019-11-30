(function(){
    "use strict";
    const dateTime = new Date();
    document.cookie = "last_hit=" + dateTime.toLocaleDateString() + " - " + dateTime.toLocaleTimeString();

    document.addEventListener("DOMContentLoaded", function(){
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
            return setInterval(drawCircle, timeout);
        }

        function drawCircle() {
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

        const actionText = document.getElementById("actionText");
        actionText.addEventListener("click", function (e) {
            const imageLink = "content/Skierfe.jpg";
            fetch(imageLink)
                .then(function (response) {
                    return response.blob();
                })
                .then(function (blob) {
                    const imageUrl = URL.createObjectURL(blob);
                    const img = document.createElement("img");
                    img.src = imageUrl;
                    e.target.parentElement.appendChild(img);
                    actionText.remove();
                });
        });
    });
})();