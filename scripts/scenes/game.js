class Game {
  constructor() {
    this.currentEnemy = 0;
  }

  setup() {
    scenario = new Scenario(imageScenario, 3);
    score = new Score();
    
    character = new Character(matrixCharacter, imageCharacter, 0, 30, 58, 135, 29, 51);
    //ver constructor da classe (módulo) inimigo
    const covid = new Enemy(matrixCovid, imageCovid, width - 280, 30, 70, 72, 280, 286, 10, 10);
    const statue = new Enemy(matrixStatue, imageStatue, width - 119, 30, 58, 144, 116, 287, 10, 10);
    const cop = new Enemy(matrixCop, imageCop, width, 30, 58, 144, 685, 1210, 10, 10);
    const sardine = new Enemy(matrixSardine, imageSardine, width, 200, 51, 36, 204, 77, 10, 10);

    enemies.push(covid)
    enemies.push(statue)
    enemies.push(cop)
    enemies.push(sardine)

  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      console.log('The withch jumped!!!')
      character.jump()
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

    const enemy = enemies[this.currentEnemy];
    const visibleEnemy = enemy.x < -enemy.widthC;

    enemy.show()
    enemy.move()

    if (visibleEnemy) {
      this.currentEnemy++;
      if (this.currentEnemy > 3) {
        this.currentEnemy = 0;
      }
      // parseInt, random gives 10.1
      enemy.velocity = parseInt(random(10, 20));
    }

    if (character.isHitting(enemy)) {
      image(imageGameOver, width / 2 - 200, height / 3)
      noLoop()
    }
  }
}