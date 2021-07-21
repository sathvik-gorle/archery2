const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var playerArcher, computerArcher;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  playerArcher = new PlayerArcher(340, playerBase.body.position.y - 180, 120, 120 );
  arrow = new PlayerArrow(PlayerArcher.x, PlayerArcher.y, 20, 20)
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  if (keyIsDown(UP_ARROW) && computerArcher.angle < 1.77) {
    computerArcher.angle = 0.1;
  }else{
   computerArcher.angle = -0.1 
  }
  if (keyIsDown(DOWN_ARROW) && computerArcher.angle > 1.47) {
    computerArcher.angle = -0.1;

  }else{
    computerArcher.angle = 0.1
  }
  playerBase.display()
  player.display();
  
  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  
  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  function keyPressed(){
    if(keyCode === 32){
      arrow.shoot(playerArcher.body.angle)
    }
  }
}
