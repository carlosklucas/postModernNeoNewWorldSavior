class InitialScreen {
  constructor() {
    this.x = width / 2;
    this.y = height
  }
  
  setup() {
  welcome.loop()
    gameSound.loop();
    gameSound.setVolume(0.1, 1, 0)
    gameSound.setVolume(0.8, 3, 5)
    gameSound.setVolume(0.1, 0, 5)
    gameSound.setVolume(0.8, 1, 12)
    gameSound.setVolume(0.1, 0, 9)  
    gameSound.setVolume(0.8, 0, 12)
    gameSound.setVolume(0.1, 1, 13)
    //gameSound.setVolume(0.8, 2, 15)
    gameSound.setVolume(0.1, 2, 16)
    gameSound.setVolume(0.8, 3, 25)
    gameSound.setVolume(0.1, 0, 23)
    gameSound.setVolume(0.8, 4, 30)
    }

  draw() {
    this._background()
    this._text()
    this._button()
  }
  
  _background() {
      image(imageInitialScreen, 0, 0, width, height)
  }
  
  _text() {
    fill(0);
    strokeWeight(2);
    stroke(245, this.opacity);
    textAlign(CENTER);
    textSize(50);
    textFont(fontInitialScreen);
    text('The adventures of ', width / 2, height / 3);
    textSize(150);
    //x is half of the canvas, the heitht is 3 to be more up
    text('Malhao', width / 2, height / 5 * 3);
    textFont('Georgia')
  }
  
  _button() {
    buttonManagement.y = height / 7 * 5;
    buttonManagement.draw();

  }
}