const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var world,engine
function setup() {
  createCanvas(800,400);
engine=Engine.create()
world=engine.world
player=new Player(50,380,20,20)
ground=new Ground(400,380,800,20)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
 player.display()
 ground.display()
}
