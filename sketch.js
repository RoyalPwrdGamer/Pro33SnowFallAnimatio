const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var bgImg
var engine,world
var maxsnow=100
var snow=[]

function preload(){
bgImg=loadImage("snow1.jpg")
}

function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  if(frameCount%150===0){
    for(var i=0;i<maxsnow;i++){
      snow.push(new ClassSnow(random(0,400),random(0,400)))
    }


  }
  
}

function draw() {
  background(bgImg);  
  Engine.update(engine)
  for(var i=0;i<maxsnow;i++){
    snow[i].display()
  }

}