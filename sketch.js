                                                                                           var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=0;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(245,153,100);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  text("press space to start",140,200)
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  paddle.collide(edges);
  
  if(keyDown("space")){
  ball.velocityY=5;
  ball.velocityX=5;
  }
  paddle.y=mouseY
  if (ball.x>400){
   ball.x=60
    ball.y=200
      }
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=5;
  }
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

