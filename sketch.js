var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var divisionHeight=300;
var turn = 0;
var score = 0;
var gameState = "start"
var loseSound
var winSound

function preload() {
  
loseSound = loadSound("sounds/loseSound.mp3")
winSound = loadSound("sounds/winSound.mp3")

}

function setup() {
  createCanvas(500, 625);
  engine = Engine.create();
  world = engine.world;
 


  for (var k = 8; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
   }


   for(var j = 13; j<= width;j=j+35)
{
  plinkos.push(new Plinko(j,75));
}

for (var j = 10; j <=width; j=j+40) 
{

   plinkos.push(new Plinko(j,175));
}


for (var j = 25; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,275));
}

   
ground = new Ground(width/2,height,width,20);


    
}
 


function draw() {
  rectMode(CENTER);
  
  background(200, 100, 0);
  textSize(20)
 text("CASINO MONEY EARNED : "+score, 10,30);
textSize(30)
  text(" $500 ", 12, 350);
  text(" $0 ", 114, 350);
  text(" $200", 174, 350);
  text(" $200", 257, 350);
  text(" $0 ", 350, 350);
  text(" $500 ", 414, 350);
  //text(" 500 ", 480, 550);

  if (particle!=null) {
    particle.display();

    if (particle.body.position.y>600) {
      
if (particle.body.position.x<100) {
  score = score+500;
  winSound.play();
  particle = null;
  if (turn>=5) {
    gameState = "end"
  }
}

    }
  }
  if (particle!=null) {
    particle.display();

    if (particle.body.position.y>600) {
      
if (particle.body.position.x<150) {
  score = score+0;
  loseSound.play();
  particle = null;
  if (turn>=5) {
    gameState = "end"
  }
}

    }
  }

  if (particle!=null) {
    particle.display();

    if (particle.body.position.y>600) {
      
if (particle.body.position.x<240) {
  score = score+200;
  winSound.play();
  particle = null;
  if (turn>=5) {
    gameState = "end"
  }
}

    }
  }
  
  if (particle!=null) {
    particle.display();

    if (particle.body.position.y>600) {
      
if (particle.body.position.x<310) {
  score = score+200;
  winSound.play();
  particle = null;
  if (turn>=5) {
    gameState = "end"
  }
}

    }
  }

  
  if (particle!=null) {
    particle.display();

    if (particle.body.position.y>600) {
      
if (particle.body.position.x<410) {
  score = score+0;
  loseSound.play();
  particle = null;
  if (turn>=5) {
    gameState = "end"
  }
}

    }
  }

  if (particle!=null) {
    particle.display();

    if (particle.body.position.y>600) {
      
if (particle.body.position.x<510) {
  score = score+500;
  winSound.play();
  particle = null;
  if (turn>=5) {
    gameState = "end"
  }
}

    }
  }
  

  if ( gameState =="end") {
    
    textSize(50);
    text("GameOver", 100, 250);
   
  }

  
  Engine.update(engine);
  ground.display();

  for (var j=0;j<plinkos.length; j++){
    plinkos[j].display();
  }
   
  /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-15, width/2+15), 10,10));
     score++;
   }
   
 
   for (var y=0;y<particles.length; y++){
    particles[y].display();
  }
  */
   
  for (var k=0;k<divisions.length; k++){
    divisions[k].display();
  }

 
}

function mousePressed() {
  
  if(gameState!=="end"){

turn++
particle = new Particle(mouseX, 10, 10, 10)
  }
}