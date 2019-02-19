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

const DIRECTION = {
	NORTH: 'NORTH',
	SOUTH: 'SOUTH',
	EAST: 'EAST',
	WEST: 'WEST'
};

var snake;
var snakeDirection;
var score;
var appleLocation;
var gameOver;
var gameInterval;

var gameCanvas = document.getElementById("myCanvas");
let ctx = myCanvas.getContext("2d");

var appleWidth = 10;
var appleHeight = 10;

var dx = 10;
var dy = 10;

var lives = 3;

ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height);

document.addEventListener("keydown", keyDownHandler);
document.addEventListener('mousedown', handleMouseClick);

function startGame() {
	snake = [
		{
			x: 150,
			y: 150
		},
		{
			x: 140,
			y: 150
		},
		{
			x: 130,
			y: 150
		},
		{
			x: 120,
			y: 150
		},
		{
			x: 110,
			y: 150
		},
		{
			x: 100,
			y: 150
		},
		{
			x: 90,
			y: 150
		},
		{
			x: 80,
			y: 150
		},
		{
			x: 70,
			y: 60
		},
		{
			x: 50,
			y: 150
		}
	];

	snakeDirection = DIRECTION.EAST;
	appleLocation = {
		x: 250,
		y: 150	
	};
	score = 0;

	gameInterval = setInterval(draw, 1000);
	}

function draw() {
	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

	drawApple();
	moveSnake();
	drawSnake();
	collision();
	eatApple();
	drawScore();
}

function keyDownHandler(e) {
	if (e.key == "Right" || e.key == "ArrowRight") {
		snakeDirection = DIRECTION.EAST;
	} else if (e.key == "Left" || e.key == "ArrowLeft") {
		snakeDirection = DIRECTION.WEST;
	} else if (e.key == "Up" || e.key == "ArrowUp") {
		snakeDirection = DIRECTION.NORTH;
	} else if (e.key == "Down" || e.key == "ArrowDown") {
		snakeDirection = DIRECTION.SOUTH;
	}
}

function drawApple() {
	ctx.fillStyle = 'red';
	ctx.strokestyle = 'darkred';
	ctx.fillRect(appleLocation.x, appleLocation.y, appleWidth, appleHeight);
	ctx.strokeRect(appleLocation.x, appleLocation.y, appleWidth, appleHeight)
}

function drawSnake() {
	snake.forEach(drawSnakePart)
}

function drawSnakePart(snake) {
	ctx.fillStyle = 'lightgreen';
	ctx.strokestyle = 'darkgreen';
	ctx.fillRect(snake.x, snake.y, 10, 10);
	ctx.strokeRect(snake.x, snake.y, 10, 10);
}

function moveSnake() {

	var snakeCopy = [];

	for (var i = 0; i < snake.length; i++) {
		
		snakeCopy.push({
			x: snake[i].x,
			y: snake[i].y
		});
	}
	for (var i = 0; i < snake.length; i++) {

		if (i === 0) {
			if (snakeDirection === DIRECTION.EAST) {
				snake[i].x += dx;
			}
			if (snakeDirection === DIRECTION.WEST) {
				snake[i].x -= dx;
			}
			if (snakeDirection === DIRECTION.NORTH) {
				snake[i].y -= dy;
			}
			if (snakeDirection === DIRECTION.SOUTH) {
				snake[i].y += dy;
			}
		} else {
			snake[i].x = snakeCopy[i - 1].x;
			snake[i].y = snakeCopy[i - 1].y;
		}
	}
}

function collision() {
	var headX = snake[0].x;
	var headY = snake[0].y;

	if (headX >= myCanvas.width || headY >= myCanvas.height || headY <= myCanvas.height - 610 || headX <= myCanvas.width - 610) {
		ctx.fillText("GAME OVER. You hit the wall. Poor snaky.", 120, 300);
		stopGame(gameInterval);
		gameOver = true;
	} else {
		snakeBodyCollision();
	}
}

function snakeBodyCollision() {
	for (var i = 1; i < snake.length; i++) {
		if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
			ctx.fillText("Oh, boy. You just bit yourself. GAME OVER.", 120, 300);
			stopGame(gameInterval);
			gameOver = true;
		}
	}		
}

function eatApple() {
	if (snake[0].x == appleLocation.x && snake[0].y == appleLocation.y) {
		appleLocation.x = Math.floor(Math.random() * 50) * 10;
		appleLocation.y = Math.floor(Math.random() * 50) * 10;
		
		var snakeTail = snake[snake.length - 1];

		snake.push({
			x: snakeTail.x,
			y: snakeTail.y
		});
		score++;
	}
}

function drawScore() {
	ctx.font = "16px Arial";
	ctx.fillstyle = "#0095DD";
	ctx.fillText("Score: " + score, 8, 20);
}

function handleMouseClick(evt) {
	if (gameOver) {
		startGame();		
	}   
}  

function stopGame() {
	clearInterval(gameInterval);
}
	
startGame();