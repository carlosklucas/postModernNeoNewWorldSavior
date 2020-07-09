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
  
  changeScene() {
    this.buttonM.remove()
    currentScreen = 'intro'
    gameSound.stop();
    //game.setup()
    welcome.stop();
  }
}