
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var groundSprite;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	// groundSprite=createSprite(width/2,100 ,800,80);
	// groundSprite.shapeColor=color("brown")  

	engine = Engine.create();
	world = engine.world;

	roof1=new roof(320,150,350,40)
   
	bobObject1=new bob(320,600,30)
	bobObject2=new bob(200,600,30)
	bobObject3=new bob(260,600,30)
	bobObject4=new bob(440,600,30)
	bobObject5=new bob(380,600,30)

chain1=new Rope(bobObject1.body,roof1.body,0,0)
chain2=new Rope(bobObject2.body,roof1.body,-100,0)
chain3=new Rope(bobObject3.body,roof1.body,-50,0)
chain4=new Rope(bobObject4.body,roof1.body,100,0)
chain5=new Rope(bobObject5.body,roof1.body,50,0)

	Engine.run(engine);
  
}


function draw() {
 Engine.update(engine)

  background(220);
 

  drawSprites();
  
  roof1.display();
  chain1.display();
  chain2.display();
  chain3.display(); 
  chain4.display();
  chain5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-50,y:-50})
	}
	
}





