//Create variables here
var Dog, happyDog, dog;
var database;
var foodS, foodStock;
var addFoodButton;
var feedButton;
var fedTime, lastFed;
var foodObj;

function preload()
{
  //load images here
  
  happyDog = loadImage("happydog.png");
  Dog = loadImage("Dog.png");
}

function setup() {
	createCanvas(800, 800);
 
  database = firebase.database();
  dog = createSprite(400, 500, 10, 10);
  dog.addImage(Dog);
  dog.scale = 0.3;

 // foodStock = database.ref("Food");
  //foodStock.on("value", readStock);
//if(addFoods){
  foodObj = new Food(200, 200, 20, 20);
//}


feedButton = createButton("Feed Fido");
feedButton.position(700, 95);
feedButton.mousePressed(feedDog);

addFoodButton = createButton("Add Food")
  addFoodButton.position(800, 95);
  addFoodButton.mousePressed(addFoods);


}


function draw() {  
background(46, 139, 87);
//if(keyWentDown(UP_ARROW)){ 
  //writeStock(foodS);
  //foodS = foodS-1;
  //dog.addImage(happyDog);
//}
foodObj.display();
  drawSprites();
  //add styles here
  textSize(20);
  fill(100, 255, 255);

  stroke(0);

//text("Press the up arrow key to feed Fido milk!", 100, 200);
text("Number of food left: "+ foodS, 10, 30);

if(lastFed>=12){
  text("Last Feed: "+ lastFed%12 + " PM", 350, 30);
}else if(lastFed === 0){
  text("Last Feed: 12 AM", 350, 30);

}
else{
  text("Last Feed: "+lastFed+" AM", 350, 30);
}
}


//function readStock(data){
//foodS = data.val();

//}

//function writeStock(x){
  //if(x<=0){
    //x = 0;
  //}else(x = x-1);
//database.ref('/').update({
  //Food:x
//})
//}

function addFoods(){
 
foodS++;
database.ref("/").update({
  Food: foodS
})

  
}

function feedDog(){
dog.addImage(happyDog);
foodS -=1;
database.ref("/").update({

})
//foodObj.updateFoodStock(foodObj.getFoodStock()-1);
//database.ref("/").update({
  //Food:foodObj.getFoodStock(),
  //FeedTime:hour()
//})
}