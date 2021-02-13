const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var PlatformSpawn1;




function preload(){
backGroundImage = loadImage("DungeonBackground.png")
}

function setup(){
createCanvas(1000,1000)
engine = Engine.create();
world = engine.world;

player = new Player(500,500,50,50);


//level 1
Ground = new Platform(1000,1000,2000,10)

Platform1 = new Platform(random(200,500),950,150,10);
Platform2 = new Platform(random(650,900),950,150,10);

Platform3 = new Platform(random(200,500),880,150,10);
Platform4 = new Platform(random(650,900),880,150,10);

Platform5 = new Platform(random(200,250),810,150,10);
Platform6 = new Platform(random(400,500),810,150,10);
Platform7 = new Platform(random(650,750),810,150,10);

Platform8 = new Platform(random(200,500),740,150,10);
Platform9 = new Platform(random(650,900),740,150,10);

Platform10 = new Platform(random(650,850),670,150,10);
Platform11 = new Platform(random(150,450),670,150,10);

Platform12 = new Platform(random(200,250),600,150,10);
Platform13 = new Platform(random(400,500),600,150,10);
Platform14 = new Platform(random(650,750),600,150,10);

Platform15 = new Platform(random(100,500),530,150,10);
Platform16 = new Platform(random(650,900),530,150,10);

Platform17 = new Platform(random(200,250),460,150,10);
Platform18 = new Platform(random(400,500),460,150,10);
Platform19 = new Platform(random(650,750),460,150,10);

Platform20 = new Platform(random(400,500),390,150,10);
Platform21 = new Platform(random(650,750),390,150,10);

Platform22 = new Platform(random(200,250),320,150,10);
Platform23 = new Platform(random(400,500),320,150,10);
Platform24 = new Platform(random(650,750),320,150,10);

Platform25 = createSprite(850,250,150,10);
Platform25.shapeColor = color("#552A0C");
Platform25.velocityY = -3;
setBorder = createSprite(850,100,150,10);
setBorder2 = createSprite(850,270,150,10);
setBorder.visible = false;
setBorder2.visible = false;
Platform26 = createSprite(150,250,150,10);
Platform26.shapeColor = color("#552A0C");
Platform26.velocityY = -3;
setBorder3 = createSprite(150,100,150,10);
setBorder4 = createSprite(150,270,150,10);
setBorder3.visible = false;
setBorder4.visible = false;

Platform27 = createSprite(500,100,150,10);
Platform27.shapeColor = color("#552A0C");
Platform27.velocityX = 3;
setBorder5 = createSprite(250,100,10,100);
setBorder6 = createSprite(750,100,10,100);
setBorder5.visible = false;
setBorder6.visible = false;

//Level 1 Enemies
PlatformSpawn1 = Math.round(random(1,2))
switch(PlatformSpawn1){

case 1:
    zombie1 = new Zombie(Platform3.body.position.x,Platform3.body.position.y,10,10)
break

case 2:
    zombie1 = new Zombie(Platform4.body.position.x,Platform4.body.position.y,10,10)
break
}
PlatformSpawn2 = Math.round(random(1,2))
switch(PlatformSpawn2){

case 1:
    zombie2 = new Zombie(Platform8.body.position.x,Platform8.body.position.y,10,10)
break

case 2:
    zombie2 = new Zombie(Platform9.body.position.x,Platform9.body.position.y,10,10)
break
}
PlatformSpawn3 = Math.round(random(1,2,3))
switch(PlatformSpawn3){

case 1:
    zombie3 = new Zombie(Platform22.body.position.x,Platform22.body.position.y,10,10)
break

case 2:
    zombie3 = new Zombie(Platform23.body.position.x,Platform23.body.position.y,10,10)
break

case 3:
zombie3 = new Zombie(Platform24.body.position.x,Platform24.body.position.y,10,10)
break
}
}




function draw(){
background(backGroundImage);
console.log(player)
//level 1
if(Platform25.isTouching(setBorder)||Platform25.isTouching(setBorder2)){
    Platform25.velocityY =  Platform25.velocityY*(-1)
}
if(Platform26.isTouching(setBorder3)||Platform26.isTouching(setBorder4)){
    Platform26.velocityY =  Platform26.velocityY*(-1)
}
if(Platform27.isTouching(setBorder5)||Platform27.isTouching(setBorder6)){
    Platform27.velocityX =  Platform27.velocityX*(-1)
}
player.display();
Ground.display();
//level 1 displays
Platform1.display();
Platform2.display();
Platform3.display();
Platform4.display();
Platform5.display();
Platform6.display();
Platform7.display();
Platform8.display();
Platform9.display();
Platform10.display();
Platform11.display();
Platform12.display();
Platform13.display();
Platform14.display();
Platform15.display();
Platform16.display();
Platform17.display();
Platform18.display();
Platform19.display();
Platform20.display();
Platform21.display();
Platform22.display();
Platform23.display();
Platform24.display();
zombie1.display();
zombie2.display();
zombie3.display();
drawSprites();
}




//Movement
function keyPressed(){
if(keyCode === 37){
Matter.Body.setVelocity(player,{x:-3,y:0})
}
if(keyCode === 39){
player.body.position.x = player.body.position.x + 10
} 
if(keyCode === 38){
player.body.position.y = player.body.position.y - 10
}  
}