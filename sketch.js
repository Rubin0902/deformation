var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  car=createSprite(60, 200, 50, 50);
  wall =createSprite(700,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  

  car.velocityX=speed;
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation<80)
    {
      car.shapeColor=color(0, 255, 0);
    }
    if( (deformation>80) && (180>deformation))
    {
      car.shapeColour=color(230, 230, 0);
    }
    if(deformation>180)
    {
      car.shapeColor=color(255, 0, 0);
    }
    console.log(deformation)
}
  drawSprites();
}