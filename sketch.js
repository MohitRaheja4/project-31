const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground;
var drop;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

fill("black")
   // ground=Bodies.rectangle(300,300,600,5);
    World.add(world,ground);
    if(frameCount%60==0)
    {
        maxDrops=100;
         for(i=0;i<maxDrops;i++)
         {
             fill(173,216,230);
            drop.push(new Drop(random(0,600),random(0,400)));
         }
    
    }
   
    
}

function draw(){
background("green");
   //ground.display();
   drop.display();

    Engine.update(engine);
}   

