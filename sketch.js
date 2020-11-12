const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var rb,lb, bb;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground (450, 580, 900, 40)
	ball=new PaperBall(100,500,30);
	rb=new Box(810,510,20,100);
	lb=new Box(590,510,20,100);
	bb=new Box(700,550,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ground.display();
  ball.display();
  rb.display();
  lb.display();
  bb.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-30})
	}
}



