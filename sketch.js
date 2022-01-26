var bgImg,agentImg,zombieImg;


function preload() {
  bgImg = loadImage("images/bg.jpg");
agentImg=loadImage("images/agent.png");
zombieImg=loadImage("images/zombie.png");
}
function setup() {
  createCanvas(800, 400);
  bg = createSprite(400, 200, 800, 400);
  bg.addImage(bgImg);
  bg.velocityX = -4;
 // bg.scale = 0.6;

  agent=createSprite(300,335);
  agent.addImage(agentImg);
  agent.scale=0.4;

zombie=createSprite(200,400)
zombie.addImage(zombieImg);

}

function draw() {
  background("blue");
  if (bg.x < 250) {
    bg.x = bg.width / 2

  }
  console.log(bg.x)
  drawSprites();
}