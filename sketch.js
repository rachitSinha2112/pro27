
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundSprite;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2,100 ,800,80);
	groundSprite.shapeColor=color("white")  

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 100, 800, 80 , {isStatic:true} );
	World.add(world, ground);
   
	bobObject1=new bob(400,600)
	bobObject2=new bob(200,600)
	bobObject3=new bob(300,600)
	bobObject4=new bob(600,600)
	bobObject5=new bob(500,600)

//chain1=new Rope(bobObject1.body,ground.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
 Engine.update(engine)

  background(0);
 

  drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  //chain1.display();
}



