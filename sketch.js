var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg;
var jump;

function preload(){
bgImg = loadImage("assets/bg.png")

jump = loadSound("assets/jump.mp3")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

createCanvas(windowWidth,windowHeight)

//Crear bases superiores e inferiores
bottomGround = createSprite(width/2,height,width,20);
bottomGround.visible = false;

topGround = createSprite(wdith/2,0,width,20);
topGround.visible = false;
      
//Crear globo      
balloon = createSprite(100,height-100,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.5;



}

function draw() {
  
  background(bgImg);
        

  if(keyDown("space")) {
  jump.play();
  balloon.velocityY= -2;
            
  }else{
    balloon.velocityY = 2;
  }

  balloon.velocityX = 4;

  balloon.collide(bottomGround);
  balloon.collide(topGround);
   
  drawSprites();
        
}
