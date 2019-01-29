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



var canvas;
var canvasContext;

function drawIt();//this function will coordinate the graphics in the game and serve as a platform for other relevant functions to be called


function moveIt();//this function will determine interaction of elements in motion and serve as a platform to call other relevant functions

function drawSnake();//this will determine the dimensions of the snake at the start and a loop to allow it to grow when it eats an apple

function drawApple();//determines size of apple and where it appears

function drawScore();//displays how many apples have been eaten

function snakeMovementCtrl(); //houses code for snake's movement parameters

function snakeCollisionDetection();//stops game when snake collides either with one of four walls or with itself then alerts the user that the game is over