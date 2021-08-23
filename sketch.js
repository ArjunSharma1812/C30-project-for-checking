const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall1, wall2;
var bridge;
var jointLink;
var joinPoint;
var stones = [];
var zombie1, zombie2, zombie3, zombie4;
var backgrnd;
var zombie;
var breakButton;

function preload(){
     zombie1 = loadImage("./assets/zombie.png");
     zombie2 = loadImage("./assets/zombie.png");
     zombie3 = loadImage("./assets/zombie.png");
     zombie4 = loadImage("/assets/zombie.png");
     backgrnd = loadImage("./assets/background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  wall1 = new Base(width-200 ,height-100 ,370, 300);
  wall2 = new Base(180 ,830 ,370, 300);
  joinPoint = new Base(1560, height-200, 50, 50);
  bridge = new Bridge(25,{x: 300 ,y: 700 });
  Matter.Composite.add(bridge.body, joinPoint)
  jointLink = new Link(bridge, joinPoint);
  for(var i =0; i <= 8; i++){
    var x = random(width/2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80);
    stones.push(stone);
}
  zombie = createSprite(width / 2, height - 50);
  zombie.addAnimation("lefttoright", zombie1, zombie2, zombie3, zombie4);
  zombie.addAnimation("rightoleft", zombie1, zombie2, zombie3, zombie4);
  zombie.scale = 0.1;
  zombie.velocityX = 10;
  breakButton = createButton("");
  breakButton.position(width - 200, height / 2 - 50);
  breakButton.class("breakbutton");
  breakButton.mousePressed(handleButtonPress);
}

function draw() {
  background(51);
  Engine.update(engine);
  wall1.display();
  wall2.display();
  joinPoint.display();
  bridge.show();

  for(var stone of stones){
    stone.display();
  }
  drawSprites();
}

function handleButtonPress(){
  jointLink.dettach();
  setTimeout(() => {
    bridge.break();
  }, 1500);
}
