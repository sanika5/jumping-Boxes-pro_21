var canvas;
var music;
var Box1, Box2, Box3, Box4;
var movingBox;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
    //create box sprite and give velocity

    movingBox = createSprite(random(10,750), 300, 20 ,20);
    movingBox.shapeColor = "white";
    movingBox.velocityX = 3;
    movingBox.velocityY = 3;

    //create 4 different surfaces

    Box1 = createSprite(100,590,180,20);
    Box1.shapeColor = "red";

    Box2 = createSprite(300,590,180,20);
    Box2.shapeColor = "green";

    Box3 = createSprite(500,590,180,20);
    Box3.shapeColor = "blue";

    Box4 = createSprite(700,590,180,20)
    Box4.shapeColor = "yellow";


    }

function draw() {
    background(rgb(169,169,169));

    if(movingBox.x < 0){
        music.stop()
        movingBox.velocityX = 3
    }else if(movingBox.x > 800){
        music.stop()
        movingBox.velocityX = -3
    }
    
    if(movingBox.isTouching( Box4)){
        music.play()
        movingBox.shapeColor = "yellow";
        movingBox.bounceOff( Box4)
    }

    else if(movingBox.isTouching( Box3)){
        music.stop()
        movingBox.shapeColor = "blue";
        movingBox.bounceOff( Box3);

         }


    else if(movingBox.isTouching(Box2)){
        music.stop()
        movingBox.shapeColor = "green";
        movingBox.bounceOff(Box2)
        movingBox.velocityX=0;
        movingBox.velocityY=0;
    }


    else if(movingBox.isTouching(Box1)){
        music.stop()
        movingBox.shapeColor = "red";
        movingBox.bounceOff(Box1)
    }    

    if(movingBox.y<0){
        music.stop()
        movingBox.velocityY=3
    }

    drawSprites()
    
}

    


