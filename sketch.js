var mainCharacter;
var npc, index;
var random1;
var powerPoint1, powerPoint2, powerPoint3, powerPoint4, powerPoint5, powerPoint6, powerPoint7;
var npcGroup;
var gameState = "play";
var mainCharacterImage;
var npcGroupImage;
var backgroundImage;
var powerPointImage;



function preload(){
mainCharacterImage = loadImage("rocketship.png");
npcGroupImage = loadImage("asteroid2.jpg");
backgroundImage = loadImage("space.jpeg");
powerPointImage = loadImage("points.jpg");
}

function setup() {
   createCanvas(1200,600);
   background = createSprite(0,0,600,300);
   background.addImage(backgroundImage);

    mainCharacter = createSprite(600,550,20,20);
    mainCharacter.addImage(mainCharacterImage);
    mainCharacter.scale = 0.05;
    
    powerPoint1 = createSprite(random(0,1200),random(0,600),30,30)
    powerPoint1.addImage(powerPointImage);
    powerPoint1.scale = 0.2;

    powerPoint2 = createSprite(random(0,1200),random(0,600),30,30)
    powerPoint2.addImage(powerPointImage);
    powerPoint2.scale = 0.2;

    powerPoint3 = createSprite(random(0,1200),random(0,600),30,30)
    powerPoint3.addImage(powerPointImage);
    powerPoint3.scale = 0.2;

    powerPoint4 = createSprite(random(0,1200),random(0,600),30,30)
    powerPoint4.addImage(powerPointImage);
    powerPoint4.scale = 0.2;

    powerPoint5 = createSprite(random(0,1200),random(0,600),30,30)
    powerPoint5.addImage(powerPointImage);
    powerPoint5.scale = 0.2;

    powerPoint6 = createSprite(random(0,1200),random(0,600),30,30)
    powerPoint6.addImage(powerPointImage);
    powerPoint6.scale = 0.2;

    powerPoint7 = createSprite(random(0,1200),random(0,600),30,30)
    powerPoint7.addImage(powerPointImage);
    powerPoint7.scale = 0.2;
   

    npcGroup = createGroup();
}

function draw() {
    //background(0);
    if(gameState === "play"){

    if(keyDown("left")){
        mainCharacter.x = mainCharacter.x-2;
    }

    if(keyDown("right")){
        mainCharacter.x = mainCharacter.x+2;
    }

    if(keyDown("up")){
        mainCharacter.y = mainCharacter.y-2;
    }

    if(keyDown("down")){
        mainCharacter.y = mainCharacter.y+2;
    }
    
    
if(mainCharacter.isTouching(powerPoint1)){
    mainCharacter.height = mainCharacter.height+5
    mainCharacter.width = mainCharacter.width+5
    powerPoint1.destroy();
}
if(mainCharacter.isTouching(powerPoint2)){
    mainCharacter.scale = mainCharacter.scale+0.05
    powerPoint2.destroy();
}
if(mainCharacter.isTouching(powerPoint3)){
    mainCharacter.scale = mainCharacter.scale+0.05
    powerPoint3.destroy();
}
if(mainCharacter.isTouching(powerPoint4)){
    mainCharacter.scale = mainCharacter.scale+0.05
    powerPoint4.destroy();
}
if(mainCharacter.isTouching(powerPoint5)){
    mainCharacter.scale = mainCharacter.scale+0.05
    powerPoint5.destroy();
}
if(mainCharacter.isTouching(powerPoint6)){
    mainCharacter.scale = mainCharacter.scale+0.05
    powerPoint6.destroy();
}
if(mainCharacter.isTouching(powerPoint7)){
    mainCharacter.scale = mainCharacter.scale+0.05
    powerPoint7.destroy();
}
    if(npcGroup.isTouching(mainCharacter)){
        gameState = "gameOver"
    }

   spawnNpc();
 

    drawSprites();
}
if(gameState === "gameOver"){
    npcGroup.destroyEach();
    powerPoint1.destroy();
    powerPoint2.destroy();
    powerPoint3.destroy();
    powerPoint4.destroy();
    powerPoint5.destroy();
    powerPoint6.destroy();
    powerPoint7.destroy();
    stroke(56,93,56);
    fill(56,93,56);
    textSize(35);
    text("You played well!",400,300);

}
}

function spawnNpc(){
    if(frameCount% 90 === 0){  
        for(var i = 0; i<random(8,12); i++){
            npc = createSprite(random(50,1150),random(0,200),20,20);
            npc.addImage(npcGroupImage);
            npc.scale = 0.2;
             npc.velocityY = 4;
             npcGroup.add(npc);
             }
    }
}

