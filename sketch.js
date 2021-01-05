const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
var engine, world; 
var box1; 
function setup(){ 
    var canvas = createCanvas(1200,400); 
    engine = Engine.create();
     world = engine.world; 
     box1 = new Box(500,320,70,70); 
     box2 = new Box(720,320,70,70);
     box25 = new Box(610,300,290,20)
     box3 = new Box(500,240,70,70);
     box4 = new Box(720,240,70,70); 
     box45 = new Box(610,220,290,20);
     box5 = new Box(610,160,70,70);

     //bird1 = new Bird(500,200,25);
     pig1 = new Pig(610,320,25); 
     pig2 = new Pig(610,240,25);
     log1 = new Log(620,150,15,350,35) 
     log2 = new Log(600,150,15,350,75)
     ground = new Ground(width/2,height,width,20); 
    } 
     function draw(){ 
         background(0); 
         Engine.update(engine); 
         box1.display(); 
         box2.display(); 
         box25.display();        
         box3.display(); 
         box4.display(); 
         box45.display();
         box5.display(); 
     //    bird1.display(); 
         pig2.display(); 
         pig1.display();
         log1.display();
         log2.display();
         ground.display(); }