// função executada apenas uma vez antes do jogo
function setup() {
  createCanvas(windowWidth, windowHeight);
  initialScreen = new InitialScreen();
  intro = new Intro();
  game = new Game();
  gameIntro.size(windowWidth, windowHeight)
  
  scenes = {
    intro,
    initialScreen,
    game
  };
  //game.setup();
  //initialScreen.setup()
  buttonManagement = new ButtonManagement('Start', width / 2, height / 2);
  buttonIntro = new ButtonManagement('Skip intro', 500, 0);
  
frameRate(40)
//gameSound.loop();
  //welcome.play();
}
  
function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[currentScreen].draw()
}

