var path,boy,leftBoundary,rightBoundary;
var boyImg,pathImg;
var i;
var count,score;
var bomb,bombImg;
var coin,coinImg;

function preload(){
  //pre-load images               
  
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
bombImg = loadImage("bomb.png")
coinImg = loadImage("coin.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here


//moveing background

  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.addAnimation(boyImg);
boy.scale=3;

//creating bomb
bomb = createSprite(210,210,5,5);
bomb.addImage(bombImg);
bomb.scale=0.1;
bomb.velocityY=4;

coin = createSprite(210,210,2,2);
coin.addImage(coinImg)
coin.velocityY=4;



//creating left boundary
leftBoundary=createSprite(50,50,100,800);
leftBoundary.visible=false;

//creating right boundary
rightBoundary=createSprite(350,350,100,800);
rightBoundary.visible=false;

}


function draw() {
  background(0);

 if (path.y > 400){
    path.y = height/2;
  }
 
if (boy.x=180){
  boy.x=boy.mouseX ; 
   boy.y=boy.mouseY; 

}
if(frameCount %350===0){
  bomb = createSprite(210,210,5,5);
  bomb.addImage(bombImg);
  bomb.scale=0.5;
  bomb.velocityY=4;  
  bomb.y=Math.round(random(0,210))
}
if(frameCount %350===0){
  coin = createSprite(10,10,5,5);
  coin.addImage(coinImg);
  coin.scale=0.2;
  coin.velocityY=4;  
  coin.y=Math.round(random(0,350))
}
if(boy.isTouching(bomb)){
  count=+2
}

if(boy.isTouching(coin)){
score=+1
}

text("DEATH:"+count,300,30,5,5);
text("SCORE:"+score,300,40,5,5);

  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

drawSprites();

}
