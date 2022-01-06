const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var rightButton;
var upButton;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ballOptions={
    restitution:1,
    density:1,
  }
ball =  Bodies.circle(250,100,30,ballOptions)
World.add(world,ball)

rightButton=createImg("right.png")
rightButton.position(50,50)
rightButton.size(25,25)
rightButton.mouseClicked(rightForce)
upButton=createImg("up.png")
upButton.position(350,50)
upButton.size(25,25)
upButton.mouseClicked(upForce)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30,30)
}

function rightForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:0})
}

function upForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-7})
}