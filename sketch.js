var trex, trex_running, edges;
var groundImage,ground;
var invisibleGround
var cloud,cloudImage

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
}

function setup(){
    createCanvas(600,200);
    
    // creating trex
    trex = createSprite(50,180,20,50);
    trex.addAnimation("running", trex_running);
    edges = createEdgeSprites();
    
    //adding scale and position to trex
    trex.scale = 0.5;
    trex.x = 50

    invisibleGround = createSprite(300,200,600,10)
    invisibleGround.visible=false

    ground = createSprite(300,180,600,10)
    ground.addImage("ground", groundImage)
  }


function draw(){
  //set background color 
  background(180);
  
  //logging the y position of the trex
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>=150){
    trex.velocityY = -10;
  }
  if(ground.x<=0){
    ground.x = ground.width/2
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleGround)
  ground.velocityX = -2
 //console.log(trex.y)

  if(frameCount%50===0){
    spawnCloud()
  }
  drawSprites();
}

function spawnCloud(){
cloud = createSprite(610,20,10,10)
cloud.velocityX=-4
cloud.y = Math.round(random(20,70))
cloud.addImage("cloud",cloudImage)
cloud.scale = 0.5
cloud.depth=trex.depth
trex.depth = trex.depth+1
}