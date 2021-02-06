var cat
var catIMG

var mouse
var mouseIMG

var background
var backgroundIMG

function preload() {
    backroundIMG=loadImage("garden.png");
    catIMG=loadImage("cat1.png");
    mouseIMG=loadImage("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode==LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catImg3);
    cat.changeAnimation("catRunning");
}
}
