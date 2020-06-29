let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let cenario;
let somDoJogo;
let jumpSound;
let personagem;
let inimigo;

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]

const matrizPersonagem = [
      [0, 0],
      [29, 0],
      [58, 0],
      [0, 51],
      [29, 51],
      [58, 51],
      [0, 102],
      [29, 102],
      [58, 102],
] 


//função para baixar ficheiros antes do jogo
function preload() {
  imagemCenario = loadImage('imagens/cenario/city1.png');
  imagemPersonagem = loadImage('imagens/personagem/superHero.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  somDoJogo = loadSound('sons/gameSoundMalhao.mp3');
  jumpSound = loadSound('sons/yahoo.mp3');
}

// função executada apenas uma vez antes do jogo
function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 29, 51);
  //ver constructor da classe (módulo) inimigo
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 52, 52, 104, 104);
  frameRate(30);
  
  somDoJogo.loop();
}

function keyPressed() {
 if(key === 'ArrowUp') {
   console.log('The withch jumped!!!')
  personagem.jump()
  jumpSound.play();
 }
}

function draw() {
  cenario.show();
  cenario.move();
  personagem.show();
  personagem.applyGravity();
  inimigo.show();
  inimigo.move();
  
  if(personagem.isHitting(inimigo)) {
  console.log('colidiu')
    noloop()
  }
    
}
  
