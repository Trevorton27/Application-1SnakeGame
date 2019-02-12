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
   	let ctx = myCanvas.getContext("2d");
   	//apple size
   	var appleWidth = 10;
     var appleHeight = 10;
     /*
   	//apple position 
   	var appleLocation = [
   	  250, // Math.floor(Math.random() * 60) * 10,
   	  150 //  Math.floor(Math.random() * 60) * 10
     ];
     */
     var appleLocation = {
       x: 250, // Math.floor(Math.random() * 60) * 10,
       y: 150  //  Math.floor(Math.random() * 60) * 10
     }

   	const DIRECTION = {
   	    NORTH: 'NORTH',
   	    SOUTH: 'SOUTH',
   	    EAST: 'EAST',
   	    WEST: 'WEST'
   	};

   	const snake = [{
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
   	    }
   	];




   	var snakeDirection = DIRECTION.EAST;
   	//snake key control vars


   	//snake movement vars go here
   	var dx = 10;
   	var dy = 10;
   	//score vars go here
   	//lives vars go here
   	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
   	ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height);
   	document.addEventListener("keydown", keyDownHandler, false);

   	function Draw() {
   	    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
   	    drawApple();
   	    moveSnake();
   	    drawSnake();
        collision();
        eatApple();
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
   	    //create copy of snake
   	    var snakeCopy = [];



   	    //loop through snake 
   	    for (var i = 0; i < snake.length; i++) {
   	        //for each iteration, add snake body to snake copy
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
   	        alert("Ya done got kilt. Mmmm hmm.");
   	        document.location.reload();
   	    }


   	}

   	function eatApple() {
   	   // var headX = snake[0].x;
        //var headY = snake[0].y;

   	    if (snake[0].x == appleLocation.x && snake[0].y == appleLocation.y) {
         appleLocation.x =  Math.floor(Math.random() * 50) * 10;
         appleLocation.y =  Math.floor(Math.random() * 50) * 10;
   	   
   	    }
   	}

   	console.log(eatApple());



   	setInterval(Draw, 1000);
   	/*
      	function placeAppleRandomly() {
      	 
      	 }
      
      	function growSnake() {
      	}
      	function showScore() {
      	}
      	function showLives() {
      	}
      	*/  