// função executada apenas uma vez antes do jogo
function setup() {
  createCanvas(windowWidth, windowHeight);

  initialScreen = new InitialScreen();
  game = new Game();
  gameIntro = new Intro();
  gameIntro.hide()

  //game.setup();
//initialScreen.setup();
  buttonManagement = new ButtonManagement('Start', width / 2, height / 2);
  
frameRate(30)
//gameSound.loop();  
scenes = {
  intro,
  initialScreen,
  game
  };
}
  
function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[currentScreen].draw()
}

