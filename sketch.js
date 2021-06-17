var gd,garden
function preload() {
    //load the images here
   gd=loadImage("images/garden.png")
   ct=loadAnimation("images/cat1.png")
   ms=loadAnimation("images/mouse1.png")
   ct2=loadAnimation("images/cat2.png","images/cat3.png")
   ms2=loadAnimation("images/mouse2.png","images/mouse3.png")
   ct3=loadAnimation("images/cat4.png")
   ms3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  //  garden=createSprite(500,400)
   // garden.addImage(gd)
   mouse=createSprite(200,500)
   mouse.addAnimation("mouseTeasing",ms)
   mouse.scale=0.2
   cat=createSprite(700,500)
   cat.addAnimation("catSitting",ct)
   cat.scale=0.2
    
}

function draw() {

    background(gd);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catStanding",ct3)
        cat.x=300

        cat.changeAnimation("catStanding")
        mouse.addAnimation("mouseStanding",ms3)
        mouse.changeAnimation("mouseStanding")
    }
   // keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 
  if (keyCode===LEFT_ARROW) {
    cat.velocityX=-3
    mouse.addAnimation("MouseTeasing",ms2)
    mouse.changeAnimation("MouseTeasing")
cat.addAnimation("catRunning",ct2)
cat.changeAnimation("catRunning")
}
}

