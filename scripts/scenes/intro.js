class Intro {
  constructor() {}

  draw() {
    this._imagemVideo();  
  }



  _imagemVideo() {

    gameIntro.play();
    gameIntro.show();

    setTimeout(() => {
      intro.stop();
      intro.hide();
      currentScreen = 'game';
      game.setup();
    }, 46000)


  }
}