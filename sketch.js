var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var backgroundImage;
var obstaclesGroup, obstacle1, obstacle2;
function preload(){
  trex_running = loadAnimation("borboleta1.png");
  trex_collided = loadImage("borboleta.png");
 groundImage=loadImage("nuvemnuvemnuvem.png");
 backgroundImage=loadImage("ceu.avif")
obstacle1=loadImage("vespa.png")
obstacle1=loadImage("passaro.png")
}

function setup() {
createCanvas(1920, 920);
  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adicione dimensão e posição ao trex
 trex.scale=0.5
  trex.x=50
  trex.y=100
  //crie um sprite ground (solo)
  ground = createSprite(200,1300,400,20);
  ground.addImage("ground",groundImage);
  
  ground.x = ground.width /2;
  obstaclesGroup=createGroup();
}

function draw() {
  background(backgroundImage);
  
  ground.velocityX = -2
  console.log(ground.x)
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  //pular quando a tecla espaço for pressionada
if (keyDown("space") && trex.y>300){
  trex.velocityY=-10;
}
  trex.velocityY = trex.velocityY + 0.8
  
 
 //impedir que o trex caia
  trex.collide(ground);
  drawSprites();
  spawnObstacles();
}
function spawnObstacles(){
if (frameCount % 60 == 0){

  var obstacle =createSprite(2000, 500);
  
  obstacle.velocityX= -6;
  var rand = Math.round(random(1,2));
  switch(rand){
    case 1: obstacle.addImage(obstacle1);
            break;
    case 2: obstacle.addImage(obstacle2);
            break;
    default: break;

  }
  obstacle.scale=0.25;
  obstacle.lifetime=400;
  obstaclesGroup.add(obstacle);
}
}