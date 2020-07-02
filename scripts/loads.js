//função para baixar ficheiros antes do jogo
function preload() {
  imageScenario = loadImage('images/scenario/city1.png');
  imageGameOver = loadImage('images/assets/game-over.png');
  imageCharacter = loadImage('images/character/superHero.png');
  imageCovid = loadImage('images/enemies/covid.png');
  imageCop = loadImage ('images/enemies/cop.png');
  imageStatue = loadImage ('images/enemies/statue.png');
  imageSardine = loadImage ('images/enemies/sardine.png');
  imageInitialScreen = loadImage ('images/scenario/initialScreen.png');
  fontInitialScreen = loadFont('images/assets/fontInitialScreen.otf');
  
  gameSound = loadSound('sounds/gameSoundMalhao.mp3');
  jumpSound = loadSound('sounds/yahoo.mp3');
}