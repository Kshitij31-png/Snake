const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground, snake;
var size,food;


function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;
  w = 800;
  h = 800;
  // size = 10;
  frameRate(26);
  snake = createSprite(200,200,20,20);
  ground = new Ground(750,750,width,10);
  let x = (random(w/2));
  let y = (random(h/2));
  food = createSprite(x,y,20,20);
  food.shapeColor = "red";
  // foodLocation();

 
}

function draw() {
 background(255); 
 keyPressed();

 snake.display();
 food.display();
//  if(snake.eat(food)){
//  }
//  snake.update();
 ground.display();

//  noStroke();
//  fill(255,0,0);
//  rect(food.x,food.y,1,1);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.velocityX = -10;
    snake.velocityY = 0;
  } else if (keyCode === RIGHT_ARROW) {
    snake.velocityX = 10;
    snake.velocityY = 0;

  } else if (keyCode === DOWN_ARROW) {
    snake.velocityX = 0;
    snake.velocityY = 10;

  } else if (keyCode === UP_ARROW) {
    snake.velocityX = 0;
    snake.velocityY = -10;

  }
}
// function foodLocation(){

// }