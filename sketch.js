//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;


function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250,100,100);
  dog.addImage(dogImage);
  dog.scale = 0.15;

  happyDog = createSprite(250,250,100,100);
  happyDog.scale = 0.15
  //happyDog.addImage('dog2' ,happyDogImage);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  textSize(20);
}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodStock);
    dog.addImage(happyDogImage);
  }

  drawSprites();
  //add styles here
  text("Food Left:" + foodS, 150, 200);
  textSize(10);
  fill(255);
  stroke(0);

}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {

if(x<=0) {
    x=0;
}
else{
    x = x-1;
}

  database.ref('/').update({

  })
}



