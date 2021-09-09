
var ship, sea, seaImage, shipMoving;
function preload(){
shipMoving=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(500, 200);
  sea.addImage("sea_image", seaImage);
  sea.scale=0.25;
  sea.velocityX=-2;

  ship=createSprite(200, 200);
  ship.addAnimation("ship_moving", shipMoving);
  ship.scale=0.25;
}

function draw() {
  background("lightBlue");
  
  if (sea.x < -100) {
    sea.x=500;
  }
  console.log(sea.x);

  drawSprites();
}