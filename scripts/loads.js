//função para baixar ficheiros antes do jogo
function preload() {
  imageScenario = loadImage('images/scenario/city1.png');
  imageGameOver = loadImage('images/assets/game-over.png');
  imageCharacter = loadImage('images/character/BMfinal.png');
  imageCovid = loadImage('images/enemies/covid.png');
  imageCop = loadImage ('images/enemies/cop.png');
  imageStatue = loadImage ('images/enemies/statue.png');
  imageSardine = loadImage ('images/enemies/sardine.png');
  imageInitialScreen = loadImage ('images/scenario/initialScreen.jpg');
  imageLive = loadImage ('images/assets/live.png');
  fontInitialScreen = loadFont('images/assets/fontInitialScreen.otf');
  tape = loadJSON('tape/tape.json');
  
  gameSound = loadSound('sounds/gameSoundMalhao.mp3');
  welcome = loadSound('sounds/welcome.mp3');
  flyingSardineSound = loadSound('sounds/flyingSardine.mp3');
  jumpSound = loadSound('sounds/jump.mp3');
  
  gameIntro = createVideo('videos/gameIntro.mp4');
  gameIntro.hide();
  
}