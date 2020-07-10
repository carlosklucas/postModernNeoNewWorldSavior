class Game {
  constructor() {
    this.index = 0;
    //this.score = score;
    
    this.mapGame = tape.mapGame;
  }

  setup() {

    scenario = new Scenario(imageScenario, 3);
    score = new Score();
    live = new Live(tape.configs.maxLives, tape.configs.initialLives);
    
    //character = new Character(matrixCharacter, imageCharacter, 0, 30, 58, 135, 29, 51);
    character = new Character(matrixCharacter, imageCharacter, 0, 30, 130, 186, 73, 166);
    //ver constructor da classe (módulo) inimigo
    //  constructor(matrix, image, x, floorVariationY, widthC, heightC, widthSprite, heightSprite, velocity) 
    const covid = new Enemy(matrixCovid, imageCovid, width - 280, 30, 70, 72, 280, 286, 10);
    const statue = new Enemy(matrixStatue, imageStatue, width - 119, 30, 58, 144, 116, 287, 10);
    const cop = new Enemy(matrixCop, imageCop, width, 30, 58, 144, 685, 1210, 10);
    const sardine = new Enemy(matrixSardine, imageSardine, width, 300, 68, 47, 203, 142, 10);

    enemies.push(covid)
    enemies.push(statue)
    enemies.push(cop)
    enemies.push(sardine)
    
    gameSound.loop();
    
        if (sardine.appear()) {
     flyingSardineSound.play() 
    }

  }

  
  keyPressed(key) {
    if (key === 'ArrowUp') {
      console.log('The withch jumped!!!')
      character.jump()
      jumpSound.play();
    }
        if (key === 'ArrowRight') {
      console.log('Went to the right!!!')
      character.right()
      jumpSound.play();
    }
        if (key === 'ArrowLeft') {
      console.log('Went to the right!!!')
      character.left()
      jumpSound.play();
    }
    
  }

  draw() {
    scenario.show();
    scenario.move();
    character.show();
    character.applyGravity();
    score.show();
    score.addPoints();
    live.draw()

    const currentRow = this.mapGame[this.index]
    const enemy = enemies[currentRow.enemy];
    
    //there's no need to use the delay anymor
    //const visibleEnemy = enemy.x < -enemy.widthC;
    const visibleEnemy = enemy.x < -enemy.widthC;

    enemy.velocity = currentRow.velocity;
    enemy.show()
    enemy.move()


    if (visibleEnemy) {
      this.index++;
      enemy.appear()
      if (this.index > this.mapGame.length -1) {
        this.index = 0;
      }
      
      // parseInt, random gives 10.1
      //enemy.velocity = parseInt(random(10, 20));
    }

    
    if (character.isHitting(enemy)) {

      live.loseLives();
      if(live.lives <= 0) {
      image(imageGameOver, width / 2 - 200, height / 3)
      noLoop()  
      }
       
      character.remainsInvencible()
    }
  }
}