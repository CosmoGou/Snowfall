const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var BackgroundImage = "snow2.jpg";
var drops =[];
var maxDrops = 100;


function preload (){
  BackgroundImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  for (var i = 0; i < maxDrops; i++){
  drops.push(new createSnow(random(0,800),random(0,400)));
  }
}


function draw() {
  background("black"); 
  for(var i = 0; i < maxDrops; i++){
    drops[i].display();
    drops[i].display();
  }
  drawSprites();

}