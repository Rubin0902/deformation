var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  car=createSprite(60, 200, 50, 50);
  wall =createSprite(700,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
    car.velocityX=speed;
}

function draw() {
  background(255,255,255);  


   if(hasCollided(car,wall))
   {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation<80)
    {
      car.shapeColor=color(0, 255, 0);
    }
    if( (180>deformation)&&(deformation>80) )
    {
      car.shapeColour=color(230, 230, 0);
    }
    if(deformation>180)
    {
      car.shapeColor=color(255, 0, 0);
    }
}
  drawSprites();
}
function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
