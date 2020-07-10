class Intro {
  constructor() {}
  
  setup() {
        this._imageVideo();
        //this._imageVideo().background() 
        //this._button()
  
  }

  draw() {
    //this._imageVideo(); 
    
    background(400);
    this._button()
    //image(gameIntro, 10, 10);
    //image(gameIntro, windowWidth, windowHeight);
  }

  _imageVideo() {
    //gameIntro.background(220)
    //image(gameIntro, 0, 0, width, height);
    //gameIntro.loop();
    //gameIntro.show();
    //initialScreen.hide();

    setTimeout(() => {
      //buttonIntro.buttonM.remove();
      gameIntro.stop();
      gameIntro.hide();
      buttonIntro.changeScene();
      //this._button().remove()
      //currentScreen = 'game';
      //game.setup();
    }, 46000)


  }
  
  _button() {
    buttonIntro.y = height - 570;
    //buttonIntro.x = width -0;
    buttonIntro.draw()
    //buttonIntro.position(0, 0)
    //buttonIntro.position(0,0)
  }
  
}