var garden_image , garden ;
var tom,tom_Animation1,tom_Animation2,tom_Animation3 ;
var jerry,jerry_Animation1,jerry_Animation2,jerry_Animation3;
function preload() {
    //load the images here
  garden_image=loadImage("images/garden.png");

  tom_Animation1=loadAnimation("images/cat1.png");
  tom_Animation2=loadAnimation("images/cat2.png","images/cat3.png");
  tom_Animation3=loadAnimation("images/cat4.png");

  jerry_Animation1=loadAnimation("images/mouse1.png");
  jerry_Animation2=loadAnimation("images/mouse2.png","images/mouse3.png");
  jerry_Animation3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(600,450);
    //create tom and jerry sprites here
   garden=createSprite(300,225,10,10);
   garden.addImage("garden",garden_image);
   garden.scale=0.65;
   
   tom=createSprite(450,350,10,10);
   tom.addAnimation("A1",tom_Animation1);
   tom.scale=0.1;

   jerry=createSprite(100,350,10,10);
   jerry.addAnimation("a1",jerry_Animation1);
   jerry.scale=0.1;

}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.velocityX=0;
       tom.addAnimation("A3",tom_Animation3);
       tom.changeAnimation("A3");
       jerry.addAnimation("a3",jerry_Animation3);
       jerry.changeAnimation("a3");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
    tom.velocityX=-3;
    tom.addAnimation("A2",tom_Animation2);
    tom.changeAnimation("A2");
    jerry.addAnimation("a2",jerry_Animation2);
    jerry.changeAnimation("a2");

 }

}
