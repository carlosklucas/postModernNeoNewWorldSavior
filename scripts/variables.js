let imageScenario;
let imageCharacter;
let imageCovid;
let imageStatue;
let imageCop;
let imageSardine;
let imageGameOver;
let imageInitialScreen;
let imageLive;
let fontInitialScreen;
let game;
let tape;
let welcomeSound;
let flyingSardineSound;
let gameIntro;

let scenario;
let gameSound;
let jumpSound;
let character;
let covid;
let statue;
let cop;
let sardine;
let score;

let currentScreen = 'initialScreen';
let scenes;
let buttonManagement;
let buttonIntro;
let live;

const matrixSardine = [
  [0, 0],
  [203, 0],
  [0, 142],
  [203, 142],
  [0, 284],
  [203, 284],
  [0, 426],
  [203, 426],
]

const matrixCop = [
  [0, 0],
  [685, 0],
  [1370,0],
  [2055, 0],
  [0, 1210],
  [685, 1210],
  [1370,1210],
  [2055, 1210],
  ]

const matrixStatue = [
  [0, 0],
  [116, 0],
  [232, 0],
  [348, 0],
  ]

const matrixCovid = [
  [0, 0],
  [280, 0],
  [560, 0],
  [840, 0],
  [0, 286],
  [280, 286],
  [560, 286],
  [840, 286],
  [0, 572],
  [280, 572],
  [560, 572],
  [840, 572],
  [0, 858],
  [280, 858],
  [560, 858],
  [840, 858],
]  
const matrixCharacter = [
      [0, 0],
      [73, 0],
      [146, 0],
      [219, 0],
      [292, 0],
      [0, 166],
      [73, 166],
      [146, 166],
      [219, 166],
      [292, 166],
] 

//const matrixCharacter = [ [0, 0],[29, 0],[58, 0],[0, 51],[29, 51],[58, 51],[0, 102],[29, 102],[58, 102],] 

const enemies = []