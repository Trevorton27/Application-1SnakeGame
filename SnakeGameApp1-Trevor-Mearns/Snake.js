	/*****
 * deliverables:
 * snake game ends when
 * 1 snake touches itself
 * 2 snake touches outside border
 * when the game ends, the gameplay should stop and the user should be notified that the game is over
 * the snake should grow one length when it eats the apple
 * the new apple should appear randomly on the screen after the previous one has been eaten
 * the snake should be controlled by the arrow keys on the keyboard
 * the game will show a score of how many apples have been eaten
 */


var gameCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
//apple size
var appleX = 10;
var appleY = 10;
//var x = myCanvas.width;
//var y = myCanvas.height;

//snake vars go here
var snake = [
        {x: 150, y: 150},
        {x: 140, y: 150},
        {x: 130, y: 150},
        {x: 120, y: 150},
        {x: 110, y: 150}
         ];
//snake movement vars go here
var dx = 10;
var dy = 0;
//score vars go here
//lives vars go here

ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height);



function drawApple() {
ctx.fillStyle = 'red';
ctx.strokestyle = 'darkred';
ctx.fillRect(100, 100, appleX, appleY);
ctx.strokeRect(100,  100, appleX, appleY)

}

drawApple();
moveSnake();
createSnake();


function createSnake() {
snake.forEach(drawSnakePart)
}

function drawSnakePart(snake) {
  ctx.fillStyle = 'lightgreen';
  ctx.strokestyle = 'darkgreen';
  ctx.fillRect(snake.x, snake.y, 10, 10);
  ctx.strokeRect(snake.x, snake.y, 10, 10);
}

function moveSnake() {
    for (var i = 0; i < snake.length; i++) {
       createSnake();
}

}



/*
function placeAppleRandomly() {
 
 }

function collision() {

}



function growSnake() {

}



function showScore() {

}

function showLives() {

}
*/