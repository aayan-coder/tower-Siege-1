const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world

var stand1, stand2, stand3
var polygon
var block1, block2,   block3,   block4,   block5,   block6,   block7,   block8,   block9,   block10,   block11,   block12,   block13,   block14,   block15,   block16,   block17,   block18,   block19,   block20,   block21,   block22,   block23,   block24,   block25
var sling


function preload(){




}


function setup(){

createCanvas(1200, 625);

engine = Engine.create();
world = engine.world;


stand1 = new Stand(440, 500, 300, 15)
stand2 =  new Stand(890, 300, 270, 15)
stand3 = new Stand(600,600,1200,35)

block1 = new Block(350, 435, 30, 40)
block2 = new Block(380, 435, 30, 40)
block3 = new Block(410, 435, 30, 40)
block4 = new Block(440, 435, 30, 40)
block5 = new Block(470, 435, 30, 40)
block6 = new Block(500, 435, 30, 40)
block7 = new Block(530, 435, 30, 40)
block8 = new Block(380, 395, 30, 40)
block9 = new Block(410, 395, 30, 40)
block10 = new Block(440, 395, 30, 40)
block11 = new Block(470, 395, 30, 40)
block12 = new Block(500, 395, 30, 40)
block13 = new Block(410, 355, 30, 40)
block14 = new Block(440, 355, 30, 40)
block15 = new Block(470, 355, 30, 40)
block16 = new Block(440, 315, 30, 40)

block17 = new Block(830, 270, 30, 40)
block18 = new Block(860, 270, 30, 40)
block19 = new Block(890, 270, 30, 40)
block20 = new Block(920, 270, 30, 40)
block21 = new Block(950, 270, 30, 40)
block22 = new Block(860, 230, 30, 40)
block23 = new Block(890, 230, 30, 40)
block24 = new Block(920, 230, 30, 40)
block25 = new Block(890, 200, 30, 40)

polygon = new Polygon(400, 300, 20,20)

sling = new Slingshot(polygon.body, {x:180,  y: 300});

Engine.run(engine);



}

function draw(){

	rectMode(CENTER);


    background(56, 44, 44);

	stand1.display()
	stand2.display()
	stand3.display()

	block1.display()
	block2.display()
	block3.display()
	block4.display()
	block5.display()
	block6.display()
	block7.display()
	block8.display()
	block9.display()
	block10.display()
	block11.display()
	block12.display()
	block13.display()
	block14.display()
	block15.display()
	block16.display()

	block17.display()
	block18.display()
	block19.display()
	block20.display()
	block21.display()
	block22.display()
	block23.display()
	block24.display()
	block25.display()

	sling.display()

	polygon.display()

    drawSprites();


}


function mouseDragged()
{
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, {x:235, y:420}) 
	sling.attach(polygon.body);
	}
  }