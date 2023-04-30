var barco,sea 
function preload(){







barco.loadAnimation("imajki/ship-1.png","imajki/ship-2.png");
sea.loadImage("imajki/sea.png");





















}

function setup(){
  createCanvas(400,400);









barco = createSprite(200,200,50,50);
barco.scale = 0.5;





















  
}

function draw() {
  background("blue");
spriteName . addImage(sea);

sea.velicityX = 4;





























  if(sea.x < 0 ){
    sea.x = sea.width/2;
  }


    drawSprites();

 
}
