
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, ball, ground;
var world;
var dustbin2,dustbin3;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
	ground = new Ground(600,height,1200,20);
	ball = new Paper(300,630,40)
	dustbin1= new Dustbin(1200,680,200,20);
	dustbin2=new Dustbin(1100,615,20,150);
  dustbin3=new Dustbin(1300,615,20,150);
  
	
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:330,y:-330});

  }
}


