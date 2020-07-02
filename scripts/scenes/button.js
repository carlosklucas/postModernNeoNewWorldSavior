class ButtonManagement {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    
    this.button = createButton(this.text)
    this.nextState = 'game'
  }
  
  draw() {
    this.button.position(this.x, this.y)
    this.button.center('horizontal')
    this.button.addClass('button-initial-screen')
    this.button.mousePressed(() => this.changeScene())
  }
  
  changeScene() {
    this.button.remove()
    currentScreen = 'game'
  }
}