const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball, ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  console.log(engine);

  var options = {
    restitution:0.8
  }

  ball = Bodies.circle(100, 100, 30, options );
  World.add(world, ball);

  

  ground = Bodies.rectangle(200, 350, 400, 10, {isStatic:true});
  World.add(world, ground);
}

function draw() {
  background(0);
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);
  rectMode(CENTER);


  rect(ground.position.x, ground.position.y, 400, 10);
}

