var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  
  fixedrect2 = createSprite(690,400,50,80);
  fixedrect2.shapeColor = "green";
  //fixedrect2.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    }
    else if(isTouching(movingRect,fixedrect2)){
      movingRect.shapeColor = "red";
      fixedrect2.shapeColor = "red";
    }
    else {
      movingRect.shapeColor = "pink"
      fixedRect.shapeColor = "pink"
      fixedrect2.shapeColor = "pink"

    }

  
  drawSprites();
}