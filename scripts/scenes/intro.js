class Intro {
  constructor() {}
  
  setup() {
        this._imagemVideo(); 
  
  }

  draw() {
    //this._imagemVideo(); 
    //this._text()
    this._button()
  }



  _imagemVideo() {

    gameIntro.loop();
    gameIntro.show();
    //initialScreen.hide();

    setTimeout(() => {
      gameIntro.stop();
      gameIntro.hide();
      currentScreen = 'game';
      game.setup();
    }, 46000)


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
    buttonIntro.y = height - 570;
    buttonIntro.draw();
  }
  
}