var dog,happyDog,database
var foodS,foodStock
function preload(){
Dog = loadImage("images/dogImg.png")
happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  dog= createSprite(400,500,0,0)
  dog.addImage(Dog)
  dog.scale=0.5
  
  foodS = firebase.database()
  foodStock= foodS.ref('food')
  foodStock.on("value",readFood,)
}

function draw() {  
  background(46,139,87)
  fill("red")
  textSize(16)
  text("Note: Press UP_ARROW Key To Feed Drogo Milk!",200,50)
  textSize(20)
  text("FOOD:"+foodS ,300,200)
  if(keyWentDown(UP_ARROW)){
 // writeFood(foodS)
 if(foodS<=0){
  foodS=0
}
else{
  foodS=foodS-1
}
//database.ref('/').set({
 // Food:x
//})
  dog.addImage(happyDog)
  }
  else{
    dog.addImage(Dog)
  }
  drawSprites();

}
function readFood(data){
  foodS=data.val()
}
function writeFood(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').set({
    Food:x
  })
}



