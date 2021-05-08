const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, iron,rubber,hammer;
var sand1, sand2, sand3, sand4,sand5,sand6;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);

    sand1 = new Sand(505,450,10);
    sand2 = new Sand(510,450,10);
    sand3 = new Sand(515,450,10);
    sand4 = new Sand(520,450,10);
    sand5 = new Sand(525,450,10);
    sand6 = new Sand(515,445,10);
    sand7 = new Sand(520,445,10);
    sand8 = new Sand(525,445,10);
    sand9 = new Sand(530,445,10);
    sand10 = new Sand(535,445,10);


}

function draw(){
    background("orange");
    Engine.update(engine);
    Plane.display();
    Stone.display();
     Iron.display();
    Rubber.display();
 Hammer.display();
Sand1.display();
    Sand2.display();
    Sand3.display();
    Sand4.display();
    Sand5.display();
    Sand6.display();
    Sand7.display();
    Sand8.display();
    Sand9.display();
    Sand10.display();
}