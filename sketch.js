var fixedBox, movingBox;

function setup() {
  createCanvas(800,400);
  movingBox = createSprite(400, 200, 50, 50);
  fixedBox = createSprite(600,200,50,50);
}

function draw() {
  background(255,255,255); 
  
  //to move the box with mouse pointers left and right movement
  movingBox.x = mouseX;
  //to move up and down with mouse y
  movingBox.y = mouseY;

  if(fixedBox.x - movingBox.x === fixedBox.width/2 + movingBox.width/2 || 
     movingBox.x - fixedBox.x === fixedBox.width/2 + movingBox.width/2 ||
     fixedBox.y - movingBox.y === fixedBox.height/2 + movingBox.height/2 ||
      movingBox.y - fixedBox.y === fixedBox.height/2 + movingBox.height/2 ){
    fixedBox.shapeColor = "red";
    movingBox.shapeColor = "red";
  }else{
    fixedBox.shapeColor = "black";
    movingBox.shapeColor = "black";
  }

  drawSprites();
}