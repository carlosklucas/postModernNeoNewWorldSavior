let imageScenario;
let imageCharacter;
let imageCovid;
let imageStatue;
let imageCop;
let imageSardine;
let imageGameOver;
let imageInitialScreen;
let fontInitialScreen;
let game;



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

const matrixSardine = [
  [0, 0],
  [204, 0],
  [0, 77],
  [204, 77],
  [0, 154],
  [204, 154],
  [0, 231],
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
  [232,0],
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
      [29, 0],
      [58, 0],
      [0, 51],
      [29, 51],
      [58, 51],
      [0, 102],
      [29, 102],
      [58, 102],
] 

const enemies = []