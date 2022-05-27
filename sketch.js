const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var background1Img, background2Img, background3Img
var welcomeImg, welcome, ticketBooth, ticketBoothImg, gate, gateImg, play, instructionBox4Img, stone, stoneImg
var carnival1, carnival1Img, carnival2, carnival2Img, carnival3, carnival3Img, carnival4, carnival4Img, carnival5, carnival5Img, carnival6, carnival6Img
var clickHere, clickHereButton, bronzeKey, bronzeKeyImg, chest1, chest2, instructionBox3, instructionBox4, instructionBox1, instructionBox2
var block1, block2, block3, block4, block5, block6, block7, block8, block9, blockImg, instructionBox1Img, instructionBox2Img, instructionBox3Img
var block1s, block2s, block3s, block4s, block5s, block6s, block7s, block8s, block9s
var mazeEntranceImg, playNow, playNowImg, treasureImg, treasure, treasureImg1, confetti, confettiImg
var maze1Img, maze2Img, maze3Img, maze4Img, maze1, maze2, maze3, maze4
var mazekey1, mazekeyImg, mazekey2, lifeBarImage, gameOverImg, resetImg, reset, gameOver, lifeBar, lifeBarA, lifeBarB
var cardboard1, cardboard2, cardboard3, cardboard4, cardboard5, cardboard6, cardboard7, cardboard8, cardboard9, cardboard10, cardboard11
var cardboard21, cardboard12, cardboard13, cardboard14, cardboard15, cardboard16, cardboard17, cardboard18, cardboard19, cardboard20, cardboard22
var cardboardTop, cardboardLeft, cardboardRight, cardboardBottom
var player1, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall5A, wall9, wall9A, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17
var wall18, wall19, wall20, wall20A, wall21, wall22, wall23, wall24, wall24A, wall25, wall26, wall27, wall29, wall30, wall31, wall32, wall33, wall34, wall35
var wall36, wall37, wall38, wall39, wall40, wall41, wall42, forestBg, music1, successMusic
//  startButton
var gameState = 0

function preload(){
  background1Img = loadImage("images/background.jpg")
  background2Img = loadImage("images/carnival/1.jpg")
  background3Img = loadImage("images/background2.jpg")
  play = loadImage("images/play.png")
  welcomeImg = loadImage("images/welcome.png")
  ticketBoothImg = loadImage("images/ticketBooth.png")
  gateImg = loadImage("images/gate.png")
  clickHere = loadImage("images/clickHere.png")
  carnival1Img = loadImage("images/carnival/1.jpg")
  carnival2Img = loadImage("images/carnival/2.jpg")
  carnival3Img = loadImage("images/carnival/3.jpg")
  carnival4Img = loadImage("images/carnival/4.jpg")
  carnival5Img = loadImage("images/carnival/5.jpg")
  carnival6Img = loadImage("images/carnival/6.jpg")
  instructionBox1Img = loadImage("images/Instruction1.png")
  instructionBox2Img = loadImage("images/Instruction2.png")
  instructionBox3Img = loadImage("images/instruction3.png")
  instructionBox4Img = loadImage("images/instruction4.png")
  instructionBox5Img = loadImage("images/instruction5.png")
  blockImg = loadImage("images/block.png")
  stoneImg = loadImage("images/stone.png")
  chest1 = loadImage("images/chest1.png")
  chest2 = loadImage("images/chest2.png")
  bronzeKeyImg = loadImage("images/SilverKey.png")
  mazeEntranceImg = loadImage("images/maze/maze1.jpg")
  playNowImg = loadImage("images/playNow.png")
  maze1Img = loadImage("images/maze/maze2.jpg")
  maze2Img = loadImage("images/maze/maze3.jpg")
  maze3Img = loadImage("images/maze/maze4.jpg")
  maze4Img = loadImage("images/maze/maze5.jpg")
  lifeBarImage = loadImage("images/lifeBar.png")
  gameOverImg = loadImage("images/gameOver.png")
  resetImg = loadImage("images/restart.png")
  mazekeyImg = loadImage("images/GoldKey.png")
  forestBg = loadImage("images/forest-clearing.jpg")
  treasureImg = loadAnimation("treasure/1.png","treasure/2.png","treasure/3.png","treasure/4.png","treasure/5.png",
  "treasure/6.png","treasure/7.png", "treasure/8.png","treasure/9.png","treasure/10.png","treasure/11.png","treasure/12.png","treasure/13.png","treasure/14.png","treasure/15.png")
  music1 = loadSound("sounds/music1.mp3")
  successMusic = loadSound("sounds/success.mp3")
  treasureImg1 = loadAnimation("treasure/14.png","treasure/15.png")
  confettiImg = loadAnimation("confetti/1.png","confetti/2.png","confetti/3.png","confetti/4.png","confetti/5.png","confetti/6.png","confetti/7.png","confetti/8.png")
}

function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  startButton = createSprite(width/2,height/2)
  startButton.addImage(play)
  startButton.scale = 0.9

  gate = createSprite(340,200)
  gate.addImage("carnivalGate",gateImg)
  gate.visible = false
  gate.scale = 1.1

  ticketBooth = createSprite(700,220)
  ticketBooth.addImage(ticketBoothImg)
  ticketBooth.visible = false
  
  clickHereButton = createSprite(705,310)
  clickHereButton.addImage(clickHere)
  clickHereButton.scale = 0.5
  clickHereButton.visible = false
  
  playNow = createSprite(-400,-200)
  playNow.addImage(playNowImg)
  playNow.scale = 0.9
  playNow.visible = false

  invisibleSprite1 = createSprite(100,10)
  invisibleSprite1.visible = false

  invisibleSprite2 = createSprite(300,10)
  invisibleSprite2.visible = false

  instructionBox1 = createSprite(400,50)
  instructionBox1.addImage(instructionBox1Img)
  instructionBox1.scale = 0.5
  instructionBox1.visible = false

  instructionBox2 = createSprite(650,320)
  instructionBox2.addImage(instructionBox2Img)
  instructionBox2.scale = 0.7
  instructionBox2.visible = false

  instructionBox3 = createSprite(200,100)
  instructionBox3.addImage(instructionBox3Img)
  instructionBox3.scale = 0.4
  instructionBox3.visible = false

  instructionBox4 = createSprite(400,60)
  instructionBox4.addImage(instructionBox4Img)
  instructionBox4.scale = 0.6
  instructionBox4.visible = false

  instructionBox5 = createSprite(610,200)
  instructionBox5.addImage(instructionBox5Img)
  instructionBox5.scale = 0.6
  instructionBox5.visible = false

  ground = new Ground()
  block1 = new Block(350,334,30,30)
  block2 = new Block(385,334,30,30)
  block3 = new Block(315,334,30,30)
  block4 = new Block(280,334,30,30)
  block5 = new Block(245,334,30,30)
  block6 = new Block(350,304,30,30)
  block7 = new Block(315,304,30,30)
  block8 = new Block(280,304,30,30)
  block9 = new Block(315,274,30,30)
  ball = new Ball(30,300,15)
  slingshot1 = new Slingshot(ball.body,{x:60,y:310})

  key1chest = createSprite(-320,-320)
  key1chest.addImage(chest1)
  key1chest.scale = 0.8
  key1chest.visible = false

  key1chest2 = createSprite(-320,-320,30,30)
  key1chest2.visible = false

  block1s = createSprite(block1.body.position.x,block1.body.position.y,30,30)
  block1s.addImage(blockImg)
  block1s.scale = 0.075
  block1s.visible = false

  block2s = createSprite(block2.body.position.x,block2.body.position.y,30,30)
  block2s.addImage(blockImg)
  block2s.scale = 0.075
  block2s.visible = false

  block3s = createSprite(block3.body.position.x,block3.body.position.y,30,30)
  block3s.addImage(blockImg)
  block3s.scale = 0.075
  block3s.visible = false

  block4s = createSprite(block4.body.position.x,block4.body.position.y,30,30)
  block4s.addImage(blockImg)
  block4s.scale = 0.075
  block4s.visible = false

  block5s = createSprite(block5.body.position.x,block5.body.position.y,30,30)
  block5s.addImage(blockImg)
  block5s.scale = 0.075
  block5s.visible = false

  block6s = createSprite(block6.body.position.x,block6.body.position.y,30,30)
  block6s.addImage(blockImg)
  block6s.scale = 0.075
  block6s.visible = false

  block7s = createSprite(block7.body.position.x,block7.body.position.y,30,30)
  block7s.addImage(blockImg)
  block7s.scale = 0.075
  block7s.visible = false

  block8s = createSprite(block8.body.position.x,block8.body.position.y,30,30)
  block8s.addImage(blockImg)
  block8s.scale = 0.075
  block8s.visible = false

  block9s = createSprite(block9.body.position.x,block9.body.position.y,30,30)
  block9s.addImage(blockImg)
  block9s.scale = 0.075
  block9s.visible = false
 
  stone = createSprite(100,100,25,25)
  stone.addImage(stoneImg)
  stone.scale = 0.2
  stone.visible = false

  bronzeKey = createSprite(-325,-250)
  bronzeKey.addImage(bronzeKeyImg)
  bronzeKey.scale = 0.5 
  bronzeKey.visible = false

  player1 = createSprite(15,20/2,15/2,15/2)
  player1.shapeColor = "red"

  carnival6 = createSprite(width/2,height/2)
  carnival6.addImage(carnival6Img)
  carnival6.scale = 0.7
  carnival6.visible = false

  carnival5 = createSprite(width/2,height/2)
  carnival5.addImage(carnival5Img)
  carnival5.scale = 0.7
  carnival5.visible = false

  carnival4 = createSprite(width/2,height/2)
  carnival4.addImage(carnival4Img)
  carnival4.scale = 0.7  
  carnival4.visible = false

  carnival3 = createSprite(width/2,height/2)
  carnival3.addImage(carnival3Img)
  carnival3.scale = 0.7
  carnival3.visible = false

  carnival2 = createSprite(width/2,height/2)
  carnival2.addImage(carnival2Img)
  carnival2.scale = 0.7
  carnival2.visible = false

  carnival1 = createSprite(width/2,height/2)
  carnival1.addImage(carnival1Img)
  carnival1.scale = 0.7
  carnival1.visible = false

  welcome = createSprite(100,100,20,20)
  welcome.addImage(welcomeImg)
  welcome.visible = false
 
  invisibleSprite001 = createSprite(100,20,20,20)
  invisibleSprite002 = createSprite(235,20,20,20)
  invisibleSprite001.visible = false
  invisibleSprite002.visible = false
  invisibleSprite101 = createSprite(300,40,5,10)
  invisibleSprite101.velocityX = 2
  invisibleSprite101.visible = false
  invisibleSprite102 = createSprite(310,40,5,10)
  invisibleSprite102.visible = false
  invisibleSprite201 = createSprite(500,20,5,10)
  invisibleSprite202 = createSprite(510,20,5,10)
  invisibleSprite201.visible = false
  invisibleSprite202.visible = false
  
  confetti = createSprite(400,200)
  confetti.addAnimation("falling",confettiImg)
  confetti2 = createSprite(100,200)
  confetti2.addAnimation("falling",confettiImg)
  confetti3 = createSprite(800,200)
  confetti3.addAnimation("falling",confettiImg)
  confetti.visible = false
  confetti2.visible = false
  confetti3.visible = false

}

function draw() {

  background("black")

  Engine.update(engine);
  console.log(gameState)

  

  if(invisibleSprite101.isTouching(invisibleSprite102)){
    music1.play(false)
  }


  if(gameState === 0){
    background(background1Img);  

    if(mousePressedOver(startButton)){
      welcome.visible = true
      welcome.velocityX = 4
      startButton.x = 10000
      startButton.y = 10000
      startButton.destroy()
      ticketBooth.visible = true
      gate.visible = true
      gameState = 1
      clickHereButton.visible = true
    }
  } 

  if(gameState === 1){
    background(background2Img)

    if(mousePressedOver(clickHereButton)){
      ticketBooth.visible = false
      gate.visible = false
      carnival1.visible = true
      carnival1.lifetime = 20
      carnival2.visible = true
      carnival2.lifetime = 25
      carnival3.visible = true
      carnival3.lifetime = 30
      carnival4.visible = true
      carnival4.lifetime = 35
      carnival5.visible = true
      carnival5.lifetime = 40
      carnival6.visible = true
      carnival6.lifetime = 45
      instructionBox1.visible = true
      invisibleSprite1.velocityX = 2.5
      invisibleSprite1.velocityX = 2.5
      clickHereButton.visible = false
  
      ball.body.position.x = 30
      ball.body.position.y = 3

    }
    if(invisibleSprite1.isTouching(invisibleSprite2)){
      background(carnival6Img)
      invisibleSprite2.velocityX = 2.5
    }
  }

  if(gameState === 2){
    background(background3Img)
   
    slingshot1.display()
    key1chest.visible = true
    key1chest.x = 320
    key1chest.y = 320
    key1chest2.x = 320
    key1chest2.y = 320
    stone.visible = true
    block1s.visible = true
    block2s.visible = true
    block3s.visible = true
    block4s.visible = true
    block5s.visible = true
    block6s.visible = true
    block7s.visible = true
    block8s.visible = true
    block9s.visible = true
    block1s.x = block1.body.position.x
    block1s.y = block1.body.position.y
    block2s.x = block2.body.position.x
    block2s.y = block2.body.position.y
    block3s.x = block3.body.position.x
    block3s.y = block3.body.position.y
    block4s.x = block4.body.position.x
    block4s.y = block4.body.position.y
    block5s.x = block5.body.position.x
    block5s.y = block5.body.position.y
    block6s.x = block6.body.position.x
    block6s.y = block6.body.position.y
    block7s.x = block7.body.position.x
    block7s.y = block7.body.position.y
    block8s.x = block8.body.position.x
    block8s.y = block8.body.position.y
    block9s.x = block9.body.position.x
    block9s.y = block9.body.position.y
    stone.x = ball.body.position.x
    stone.y = ball.body.position.y
    instructionBox2.visible = true
    instructionBox3.visible = true
    if(stone.isTouching(key1chest2)){
      key1chest.addImage(chest2)
      bronzeKey.x = 325
      bronzeKey.y = 250
      bronzeKey.visible = true
      instructionBox2.visible = false
      instructionBox3.visible = false
      instructionBox2.x = 1000000
      instructionBox3.x = 1000000
      block1.body.position.x = 1000
      block1.body.position.y = 1000
      block2.body.position.x = 1000
      block2.body.position.y = 1000
      block3.body.position.x = 1000
      block3.body.position.y = 1000
      block4.body.position.x = 1000
      block4.body.position.y = 1000
      block5.body.position.x = 1000
      block5.body.position.y = 1000
      block6.body.position.x = 1000
      block6.body.position.y = 1000
      block7.body.position.x = 1000
      block7.body.position.y = 1000
      block8.body.position.x = 1000
      block8.body.position.y = 1000
      block9.body.position.x = 1000
      block9.body.position.y = 1000
      slingshot1.fly();
      ball.body.position.x = 1000
      ball.body.position.y = 1000
      instructionBox4.visible = true
    }
  }

  if(gameState === 3){
    background(mazeEntranceImg)
    key1chest.visible = false
    bronzeKey.visible = false
    playNow.x = 400
    playNow.y = 350
    playNow.visible = true
    instructionBox5.visible = true
    if(mousePressedOver(playNow)){
      background(mazeEntranceImg)
      playNow.x = 40000
      playNow.y = 35000
      gameState = 4
      
  maze1 = createSprite(400,200,800,400)
  maze1.addImage(maze1Img)
  maze1.scale = 0.499

  maze2 = createSprite(400,200,800,400)
  maze2.addImage(maze2Img)
  maze2.scale = 1.1
  maze2.visible = false

  maze3 = createSprite(400,200)
  maze3.addImage(maze3Img)
  maze3.scale = 0.5
  maze3.visible = false

  maze4 = createSprite(400,200)
  maze4.addImage(maze4Img)
  maze4.visible = false
  maze4.scale = 1

  canvasSprite1 = createSprite(102,102,200,200)
  canvasSprite1.shapeColor = "black"

  cardboard1 = createSprite(50/2,30/2,10/2,60/2);
  cardboard1.shapeColor = "white";

  cardboard2 = createSprite(100/2,100/2,100/2,10/2);
  cardboard2.shapeColor = "white";
  
  cardboard3 = createSprite(100/2,65/2,10/2,50/2);
  cardboard3.shapeColor = "white";
  
  cardboard4 = createSprite(250/2,100/2,100/2,10/2);
  cardboard4.shapeColor = "white";
  
  cardboard5 = createSprite(52/2,150/2,95/2,10/2);
  cardboard5.shapeColor = "white";
  
  cardboard6 = createSprite(50/2,250/2,10/2,100/2);
  cardboard6.shapeColor = "white";
  
  cardboard7 = createSprite(120/2,200/2,150/2,10/2);
  cardboard7.shapeColor = "white";
  
  cardboard8 = createSprite(200/2,150/2,10/2,100/2);
  cardboard8.shapeColor = "white";
  
  cardboard9 = createSprite(150/2,125/2,10/2,152/2);
  cardboard9.shapeColor = "white";
  
  cardboard10 = createSprite(250/2,50/2,100/2,10/2);
  cardboard10.shapeColor = "white";
  
  cardboard11 = createSprite(320/2,150/2,50/2,10/2);
  cardboard11.shapeColor = "white";
  
  cardboard12 = createSprite(300/2,100/2,10/2,100/2);
  cardboard12.shapeColor = "white";
  
  cardboard13 = createSprite(175/2,250/2,150/2,10/2);
  cardboard13.shapeColor = "white";
  
  cardboard14 = createSprite(250/2,200/2,10/2,100/2);
  cardboard14.shapeColor = "white";
  
  cardboard15 = createSprite(250/2,380/2,10/2,50/2);
  cardboard15.shapeColor = "white";
  
  cardboard16 = createSprite(380/2,250/2,55/2,10/2);
  cardboard16.shapeColor = "white";
  
  cardboard17 = createSprite(350/2,175/2,10/2,250/2);
  cardboard17.shapeColor = "white";
  
  cardboard18 = createSprite(50/2,350/2,100/2,10/2);
  cardboard18.shapeColor = "white";
  
  cardboard19 = createSprite(100/2,350/2,10/2,100/2);
  cardboard19.shapeColor = "white";
  
  cardboard20 = createSprite(250/2,350/2,200/2,10/2);
  cardboard20.shapeColor = "white";
  
  cardboard21 = createSprite(180/2,300/2,150/2,10/2);
  cardboard21.shapeColor = "white";
  
  cardboard22 = createSprite(300/2,270/2,10/2,150/2);
  cardboard22.shapeColor = "white";

  cardboardLeft = createSprite(5,110,5,180)
  cardboardLeft.shapeColor = "white";
  cardboardRight = createSprite(200,95,5,180)
  cardboardRight.shapeColor = "white";
  cardboardTop = createSprite(90,200,180,5)
  cardboardTop.shapeColor = "white";
  cardboardBottom = createSprite(112,4,180,5)
  cardboardBottom.shapeColor = "white";

  wall1 = createSprite(15,25,15,16)
  wall2 = createSprite(15,45,15,25)
  wall3 = createSprite(35,40,25,15)  
  wall4 = createSprite(15,65,15,16) 
  wall5 = createSprite(49,63,44,18)
  wall6 = createSprite(37.5,26,16,13) 
  wall7 = createSprite(63,34,16,23) 
  wall8 = createSprite(55,14,50,13)
  wall5A = createSprite(24,63,5,18)
  wall9 = createSprite(87.5,15.5,15,15)  
  wall9A = createSprite(87.5,26,18,5) 
  wall10 = createSprite(87.5,38,18,18) 
  wall11 = createSprite(87.5,72.5,18,50) 
  wall12 = createSprite(122,37.5,50,18)
  wall13 = createSprite(122,15.5,50,16) 
  wall14 = createSprite(172,15.5,48,16)  
  wall15 = createSprite(162,48,16,48)
  wall16 = createSprite(188,74,16,100)
  wall17 = createSprite(15,87,17,17) 
  wall18 = createSprite(61,85,20,26) 
  wall19 = createSprite(38,87,26,19) 
  wall20 = createSprite(15,120,17,47)  
  wall20A = createSprite(15,148,17,8) 
  wall21 = createSprite(18,161,19,17)
  wall22 = createSprite(37,139,17,68)
  wall23 = createSprite(87,137,68,17) 
  wall24 = createSprite(74,113,55,17) 
  wall24A = createSprite(48,137,5,20) 
  wall25 = createSprite(112,112,19,19)  
  wall26 = createSprite(87,187,69,19) 
  wall27 = createSprite(112,87,19,29) 
  wall28 = createSprite(136,117,19,69)  
  wall29 = createSprite(113,63,17,20)
  wall30 = createSprite(135,63,25,20) 
  wall31 = createSprite(137,78,18,10)  
  wall32 = createSprite(136,162,18,18)  
  wall33 = createSprite(100,162,52,18) 
  wall34 = createSprite(63.5,165,20,23)
  wall35 = createSprite(163,125,18,53) 
  wall36 = createSprite(160,88,26,18) 
  wall37 = createSprite(125,138,5,15) 
  wall38 = createSprite(175,162,40,18)
  wall39 = createSprite(188,140,18,23)
  wall40 = createSprite(150,187,45,18)
  wall41 = createSprite(176,187,6,18)
  wall42 = createSprite(187,175,18,6)
  
  wall20A.visible = false
  wall24A.visible = false
  wall5A.visible = false
  wall9A.visible = false

  wall1.visible = false
  wall2.visible = false
  wall3.visible = false
  wall4.visible = false
  wall5.visible = false
  wall6.visible = false
  wall7.visible = false
  wall8.visible = false
  wall9.visible = false
  wall10.visible = false
  wall11.visible = false
  wall12.visible = false
  wall13.visible = false
  wall14.visible = false
  wall15.visible = false
  wall16.visible = false
  wall17.visible = false
  wall18.visible = false
  wall19.visible = false
  wall20.visible = false
  wall21.visible = false
  wall22.visible = false
  wall23.visible = false
  wall24.visible = false
  wall25.visible = false
  wall26.visible = false
  wall27.visible = false
  wall28.visible = false
  wall29.visible = false
  wall30.visible = false
  wall31.visible = false
  wall32.visible = false
  wall33.visible = false
  wall34.visible = false
  wall35.visible = false
  wall36.visible = false
  wall37.visible = false
  wall38.visible = false
  wall39.visible = false
  wall40.visible = false
  wall41.visible = false
  wall42.visible = false
 
  player1.depth = wall42.depth + 1;

  mazekey1 = createSprite(190,190,20,20)
  mazekey1.addImage(mazekeyImg)
  mazekey1.scale = 0.15

  lifeBarA = createSprite(700,60,150,40)
  lifeBarA.shapeColor = "white"
  lifeBarB = createSprite(700,60,150,40)
  lifeBarB.shapeColor = "red"

  lifeBar = createSprite(600,60)
  lifeBar.addImage(lifeBarImage)
  lifeBar.scale = 0.1

  gameOver = createSprite(400,200)
  gameOver.addImage(gameOverImg)
  gameOver.visible = false

  reset = createSprite(600,300)
  reset.addImage(resetImg)
  reset.scale = 0.1
  reset.visible = false

  mazeEdge1 = createSprite(200,100,5,200)
  mazeEdge1.visible = false
  mazeEdge2 = createSprite(2,100,5,200)
  mazeEdge2.visible = false 
  mazeEdge3 = createSprite(100,2,200,5)
  mazeEdge3.visible = false
  mazeEdge4 = createSprite(100,200,200,5)
  mazeEdge4.visible = false
    }
  }

  if(gameState === 4){
    instructionBox5.visible = false
   
  if(player1.isTouching(mazeEdge1)){
    player1.bounceOff(mazeEdge1)
  } if(player1.isTouching(mazeEdge2)){
    player1.bounceOff(mazeEdge2)
  } if(player1.isTouching(mazeEdge3)){
    player1.bounceOff(mazeEdge3)
  } if(player1.isTouching(mazeEdge4)){
    player1.bounceOff(mazeEdge4)
  }

  if(player1.isTouching(wall1)){
   maze1.scale = maze1.scale+0.005
   maze2.scale = 1.1
   maze3.scale = 0.5
   maze4.scale = 0.5
  }
  if(player1.isTouching(wall2)){
    maze1.scale = 0.499
    maze4.visible = true
    maze4.scale = maze4.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
  }
  if(player1.isTouching(wall3)){
    maze1.scale = 0.499
    maze2.visible = true
    maze2.scale = maze2.scale+0.005
    maze1.visible = false
    maze3.visible = false
    maze4.visible = false
    maze3.scale = 0.5
    maze4.scale = 1
  }
  if(player1.isTouching(wall4)){
    maze1.scale = maze1.scale+0.005
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze1.visible = true
    maze4.scale = 1
  }
  if(player1.isTouching(wall5A)){
    maze1.visible = true
    maze1.scale = 0.499
    maze4.scale = 1
  }
  if(player1.isTouching(wall5)){
    maze1.scale = maze1.scale+0.005
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
    maze4.scale = 1
  }
  if(player1.isTouching(wall6)){
    maze1.scale = maze1.scale+0.005
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
    maze4.scale = 1
  }
  if(player1.isTouching(wall7)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
    maze4.scale = 1
  }
  if(player1.isTouching(wall8)){
    maze1.scale = 0.499
    maze4.visible = true
    maze4.scale = maze4.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
  }
  if(player1.isTouching(wall9)){
    maze3.scale = maze3.scale + 0.005
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze4.scale = 1
    maze3.visible = true
    maze1.visible = false
    maze2.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall9A)){
    maze3.scale = 0.5
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze4.scale = 1
    maze3.visible = true
    maze1.visible = false
    maze2.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall10)){
    maze3.scale = maze3.scale + 0.005
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze4.scale = 1
    maze3.visible = true
    maze1.visible = false
    maze2.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall11)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall12)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall13)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall14)){
    maze1.visible = false
    maze2.visible = false
    maze3.visible = false
    maze4.visible = true
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze3.scale = 0.5
    maze4.scale = maze4.scale + 0.005
  }
  if(player1.isTouching(wall15)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall16)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall17)){
    maze3.scale = maze3.scale + 0.005
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze4.scale = 1
    maze3.visible = true
    maze1.visible = false
    maze2.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall18)){
    maze3.scale = maze3.scale + 0.005
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze4.scale = 1
    maze3.visible = true
    maze1.visible = false
    maze2.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall19)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall20)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall21)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall20A)){
    maze3.scale = maze3.scale + 0.005
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze4.scale = 1
    maze3.visible = true
    maze1.visible = false
    maze2.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall22)){
    maze1.scale = 0.499
    maze2.visible = true
    maze2.scale = maze2.scale+0.005
    maze2.x = maze2.x + 0.005
    maze1.visible = false
    maze3.visible = false
    maze4.visible = false
    maze3.scale = 0.5
    maze4.scale = 1
  }
  if(player1.isTouching(wall24A)){
    maze1.scale = 0.499
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = false
    maze2.visible = false
    maze3.visible = true
    maze4.visible = false
  }
  if(player1.isTouching(wall23)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall24)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall25)){
    maze3.scale = maze3.scale + 0.0015
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze4.scale = 1
    maze3.visible = true
    maze1.visible = false
    maze2.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall27)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall28)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall26)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall29)){
    maze1.scale = 0.499
    maze4.visible = true
    maze4.scale = maze4.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
  }
  if(player1.isTouching(wall30)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall31)){
    maze3.scale = maze3.scale + 0.0015
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze4.scale = 1
    maze3.visible = true
    maze1.visible = false
    maze2.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall32)){
    maze3.scale = maze3.scale + 0.0015
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze4.scale = 1
    maze3.visible = true
    maze1.visible = false
    maze2.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall33)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  } 
  if(player1.isTouching(wall34)){
    maze3.scale = maze3.scale + 0.0015
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze4.scale = 1
    maze3.visible = true
    maze1.visible = false
    maze2.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall36)){
    maze3.scale = maze3.scale + 0.0015
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze4.scale = 1
    maze3.visible = true
    maze1.visible = false
    maze2.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall37)){
    maze3.scale = maze3.scale + 0.0015
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze4.scale = 1
    maze3.visible = true
    maze1.visible = false
    maze2.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall35)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall38)){
    maze1.scale = 0.499
    maze2.visible = true
    maze2.scale = maze2.scale+0.005
    maze1.visible = false
    maze3.visible = false
    maze4.visible = false
    maze3.scale = 0.5
    maze4.scale = 1
  }
  if(player1.isTouching(wall39)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall40)){
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1
    maze3.scale = 0.5
    maze4.scale = 1
    maze1.visible = true
    maze2.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall42)){
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze3.scale = 0.5
    maze4.scale = 1
    maze2.visible = true
    maze1.visible = false
    maze3.visible = false
    maze4.visible = false
  }
  if(player1.isTouching(wall41)){
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze3.scale = 0.5
    maze4.scale = 1
    maze2.visible = true
    maze1.visible = false
    maze3.visible = false
    maze4.visible = false
  }

  if(player1.isTouching(cardboard1) || player1.isTouching(cardboard2) || player1.isTouching(cardboard3) || player1.isTouching(cardboard4) || player1.isTouching(cardboard5) || player1.isTouching(cardboard6) || player1.isTouching(cardboard7) || player1.isTouching(cardboard8) || player1.isTouching(cardboard9) || player1.isTouching(cardboard10) || 
  player1.isTouching(cardboard11) || player1.isTouching(cardboard12) || player1.isTouching(cardboard13) || player1.isTouching(cardboard14) || player1.isTouching(cardboard15) || player1.isTouching(cardboard16) || player1.isTouching(cardboard17) || player1.isTouching(cardboard18) || player1.isTouching(cardboard19) || player1.isTouching(cardboard20) ||
  player1.isTouching(cardboard21) || player1.isTouching(cardboard22) || player1.isTouching(cardboardRight) || player1.isTouching(cardboardLeft) || player1.isTouching(cardboardBottom) || player1.isTouching(cardboardTop)){
    lifeBarB.width = lifeBarB.width - 30
    lifeBarB.x = lifeBarB.x + 15
    player1.velocityX = 0
    player1.velocityY = 0
    player1.x = 15
    player1.y = 10
    maze2.scale = 1.1
    maze1.scale = 0.499
    maze3.scale = 0.5
    maze4.scale = 1
 } 
  if(lifeBarB.width <= 0){
    lifeBarB.visible = false
    gameOver.visible = true
    reset.visible  = true
   }
  if(mousePressedOver(reset)){
    restart()
  }

  if(player1.isTouching(mazekey1)){
    gameState = gameState + 1
    player1.velocityX = 0
    player1.velocityY = 0
    forestBackground = createSprite(400,200)
    forestBackground.addImage(forestBg)
    forestBackground.scale = 0.45
    treasure = createSprite(400,200)
    treasure.addAnimation("prize",treasureImg)
    confetti.depth = treasure.depth+2
    confetti2.depth = confetti.depth
    confetti3.depth = confetti.depth
   }
  } 

  if(gameState === 5){
    confetti.visible  = true
    confetti2.visible = true
    confetti3.visible = true
    invisibleSprite001.velocityX = 2
    invisibleSprite201.velocityX = 2
    if(invisibleSprite001.isTouching(invisibleSprite002)){
      treasure.addAnimation("prize",treasureImg1)
      treasure.changeAnimation("prize",treasureImg1)
    }
    if(invisibleSprite201.isTouching(invisibleSprite202)){
      successMusic.play(false)
    }
  }

  drawSprites();
}

function keyPressed(){

  if(keyCode === 32){
   gameState = 2
    instructionBox1.visible = false
    slingshot1.attach(ball.body)
  } 

  if(keyCode === 78 ){
    gameState = 3
    instructionBox4.visible = false
    key1chest.visible = false
    bronzeKey.visible = false
  }

  if(keyCode === DOWN_ARROW){
    //  player1.y = player1.y - 4
    player1.velocityX= 0
    player1.velocityY= 0.5
    }

  if(keyCode === UP_ARROW){
    //  player1.y = player1.y - 4
    player1.velocityX= 0
    player1.velocityY= -0.5
  }

  if(keyCode === RIGHT_ARROW){
   // player1.x = player1.x + 4
   player1.velocityX= 0.5
   player1.velocityY= 0
  }

  if(keyCode === LEFT_ARROW){
   // player1.x = player1.x - 4
   player1.velocityX= -0.5
   player1.velocityY= 0
  }

  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}


function restart(){
  gameState = 4
  lifeBarB.width = 150
  lifeBarB.visible = true
  lifeBarB.x = 700
  gameOver.visible = false
  reset.visible = false
      maze2.scale = 1.1
      maze1.scale = 0.499
      maze3.scale = 0.5
      maze4.scale = 1
      maze2.visible = false
      maze1.visible = true
      maze3.visible = false
      maze4.visible = false
      playNow.x = 400
      playNow.y = 350
      

  }

