var zombie

function preload(){
zombie = loadImage("assets/zombie.png")
bgImg = loadImage("assets/bg1.jpeg")
}
function setup (){
createCanvas(windowWidth, windowHeight);
bg= createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

zombie = createSprite(displayWidth-1150, displayHeight- 300, 50,50);
zombie.addImage(zombie.png)
zombie.scale = 0.4;
zombie.debug = true 

}

function draw (){
if(keyDown("UP_ARROW")||touches.length>0){
  zombie.y = zombie.y-30  
}
if(keyDown("DOWN_ARROW")||touches.length>0){
zombie.y= zombie.y+30
}


}