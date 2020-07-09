class ButtonManagement {
  constructor(textB, x, y) {
    this.textB = textB;
    this.x = x;
    this.y = y;
    
    this.buttonM = createButton(this.textB)
    this.nextState = 'game'
  }
  
  draw() {
    this.buttonM.position(this.x, this.y)
    this.buttonM.center('horizontal')
    //calls CSS
    this.buttonM.addClass('button-initial-screen')
    this.buttonM.mousePressed(() => this.changeScene())
  }
  
  //previousScenario() {currentScreen.remove();}
  
  changeScene() {
    
    if (currentScreen === 'intro') {
      this.buttonM.remove()
      gameIntro.stop()
      gameIntro.hide()
      game.setup();
      currentScreen = 'game'
      return;
    }

    this.buttonM.remove()
    currentScreen = 'intro'
    intro.setup();
    gameSound.stop();
    //game.setup()
    welcome.stop();
    
  }
}