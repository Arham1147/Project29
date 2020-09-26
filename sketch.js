const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState="onSling";
var slingShot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  polygon = new Polygon(100,200,50,50);

  slingShot = new SlingShot(polygon.body,{x:100,y:200});

  ground = new Ground(600,height,1200,20);
  stand = new Ground(550, 240, 300, 20);

  //level two
block8 = new Block (640,235,30,40);

block9 = new Block (430,235,30,40) ;

block10 = new Block (460,235,30,40);

block11 = new Block(490,235,30,40);

block12 = new Block (520,235,30,40);

//level three
block13 = new Block (550,195,30,40) ;
 
block14 = new Block (580,195,30,40);

block15 = new Block (610,195,30,40) ;

//top
block16 = new Block (580,155,30,40) ;

}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  slingShot.display();

  ground.display();

  stand.display();

  polygon.display();

  block8.display();
  block9.display();
  block10.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  drawSprites();
}

function mouseDragged(){
  if (gameState==="onSling"){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingShot.fly();
  gameState="launched";
}
