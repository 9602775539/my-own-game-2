var bgImg, agentImg, zombieImg, zombie2Img;


function preload() {
  bgImg = loadImage("images/bg.jpg");
  agentImg = loadImage("images/agent.png");
  zombieImg = loadImage("images/zombie.png");
  zombie2Img = loadImage("images/zombie2.png");
}
function setup() {
  createCanvas(800, 400);
  bg = createSprite(400, 200, 800, 400);
  bg.addImage(bgImg);
  bg.velocityX = -4;
  // bg.scale = 0.6;

  agent = createSprite(300, 335);
  agent.addImage(agentImg);
  agent.scale = 0.4;



}

function draw() {
  background("blue");
  if (bg.x < 250) {
    bg.x = bg.width / 2

  }
  console.log(bg.x)
  enemies();
  drawSprites();
}
function enemies() {
  if (frameCount % 100 === 0) {
    zombie = createSprite(700, 320, 30, 50);
    zombie.velocityX = -3;
    zombie.scale=0.3;
    var rand = Math.round(random(1, 2))
    switch (rand) {
      case 1: zombie.addImage(zombieImg)
        break;

      case 2: zombie.addImage(zombie2Img)
        break;

      default: break;
    }
  }
}