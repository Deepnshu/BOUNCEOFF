var fixedrect, movingrect
var GameObject1, GameObject2,GameObject3,GameObject4,GameObject5



function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
  fixedrect = createSprite(100,400,50,50)
  movingrect = createSprite(800,400,50,50);
  fixedrect.shapeColor= "red";
  movingrect.shapeColor ="red";

  //GameObject1 = createSprite(100,100,50,50)
 //GameObject1.shapeColor= "red";
  //GameObject2 = createSprite(200,100,50,50)
  //GameObject2.shapeColor= "blue";
  //GameObject3 = createSprite(300,100,50,50);
  //GameObject3.shapeColor= "pink";
  //GameObject4 = createSprite(400,100,50,50);
 // GameObject4.shapeColor= "purple";
 // GameObject5 = createSprite(500,100,50,50);
 // GameObject5.shapeColor= "grey";
 movingrect.velocityX = -5;
 fixedrect.velocityX = 5;
 
}

function draw() {
  background("black");
//movingrect.x=mouseX
//movingrect.y=mouseY

//if(isTouching(movingrect, GameObject2))
//{
 // GameObject2.shapeColor= "green";
 // movingrect.shapeColor ="yellow";




//}
//else{
  //GameObject2.shapeColor= "blue";
 // movingrect.shapeColor ="red";

//}


bounceoff(movingrect,fixedrect);

  drawSprites();
}







