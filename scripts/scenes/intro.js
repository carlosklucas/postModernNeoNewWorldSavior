class Intro {
    constructor (){
        }
        
        draw(){
          this._imagemVideo();  
        }
        
        
        
        _imagemVideo(){
      
        gameIntro.play();
        gameIntro.show();
            
          setTimeout(()=>{
            gameIntro.stop();
            gameIntro.hide();
          currentScreen = 'game';
          game.setup();
          },46000)
          
        
        }
    }