  var path,pathImg,boy,boyAnimate,invisbleBoundaryLeft,invisbleBoundaryRight

    function preload(){
      //pre-load images
      pathImg=loadImage("path.png");
      boyAnimate= loadAnimation("Runner-1.png","Runner-2.png")
  }

    function setup(){
        createCanvas(400,400);
        //create sprites here
      path=createSprite(200,200);
      path.addImage(pathImg);
      path.velocityY = 7;
      path.scale = 1.2
      boy=createSprite(200,200);
      boy.addAnimation('running',boyAnimate)
      boy.scale=0.1
      invisbleBoundaryLeft=createSprite(50,200,10,400)
      invisbleBoundaryLeft.visible=false
      invisbleBoundaryRight=createSprite(360,200,10,400)
      invisbleBoundaryRight.visible=false
    }

    function draw() {
        background(0);
      if (path.y > 400){
        path.y = height/4;
      }
      if (keyDown(RIGHT_ARROW)){
        boy.velocityX=4;
      }
      if (keyDown(LEFT_ARROW)){
        boy.velocityX=-4;
      }
      boy.collide(invisbleBoundaryLeft);
      boy.collide(invisbleBoundaryRight);
      
      drawSprites();
    }
