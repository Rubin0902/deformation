var wall;
var car,speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed=random(223,321)
  weight=random(30,52)




    car=createSprite(50, 200, 50,5);  
    car.velocityX = speed;
    car.shapeColor=color("blue");

    
    wall=createSprite(1200, 200, 50, height/2);  

    wall.shapeColor=color(230,230,230);
  //wall.shapeColor=color(80,80,80)
}


function draw() {
  background("black");  


   if(hasCollided(car,wall))
   {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation<80)
    {
      car.shapeColor=color("green");
    }
    if( (180>deformation)&&(deformation>80) )
    {
      car.shapeColour=color("yellow");
    }
    if(deformation>180)
    {
      car.shapeColor=color("red");
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
