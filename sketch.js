// função executada apenas uma vez antes do jogo
function setup() {
  createCanvas(windowWidth, windowHeight);
  initialScreen = new InitialScreen();
  game = new Game();
  scenes = {
    initialScreen,
    game
  };
  game.setup();
  buttonManagement = new ButtonManagement('Game Start', width / 2, height / 2);
  
frameRate(30)
  //gameSound.loop();
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[currentScreen].draw()
}

