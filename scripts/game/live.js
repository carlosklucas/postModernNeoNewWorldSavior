class Live {
 constructor(total, initial) {
   
   //total lives that we can achieve, maximum
   this.total = total
   //value of the lives when back to the game start or some other reason
   this.initial = initial
   // initial lives
   this.lives = this.initial
   
   this.widhtL = 20
   this.heightL = 20
   this.xInitial = 20
   this.y = 20;
 }
  
  draw() {
    for(let i = 0; i < this.lives; i++) {
      const margin = i * 1;
      const position = this.xInitial * (1 + i)
      //position + margin to look better with hearts at x
      image(imageLive, position + margin , this.y, this.widhtL, this.heightL) 
    }
    
    
  }
  
  winLives() {
   if(this.lives <= this.total) {
    this.vidas++ 
   }
  }
  
  loseLives() {
    this.lives--;
  }
  
}