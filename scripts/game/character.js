class Character extends Animation {
 constructor(matrix, image, x, floorVariationY, widthC, heightC, widthSprite, heightSprite){
      super(matrix, image, x, floorVariationY, widthC, heightC, widthSprite, heightSprite);

   this.floorVariationY = floorVariationY;
   this.yInitial = height - this.heightC - this.floorVariationY;
   this.y = this.yInitial;
   
   this.jumpVelocity = 0;
   this.gravity = 6;
   this.jumpHeight = -50;
   this.jumps = 0;
   this.invencible = false
 }
  
  jump() {
    if(this.jumps < 2) {
   this.jumpVelocity = this.jumpHeight;
    this.jumps++
    }
  }
  
  applyGravity(){
    this.y = this.y + this.jumpVelocity;
    this.jumpVelocity = this.jumpVelocity + this.gravity;
    
    if(this.y > this.yInitial) {
      this.y = this.yInitial
      this.jumps = 0;
    }
   
  }
  
  remainsInvencible() {
    this.invencible = true;
    //remains 1 sec invencible
    setTimeout(() => {
      this.invencible = false
    }, 1000)
  }
  

  isHitting(enemy) {
    //if true, then the character has been hit and we jump out of this verification, return false
    if(this.invencible) {
    return false;
    }

    const precision = 0.8
    //noFill()
    //rect(this.x, this.y, this.width * precision, this.height * precision)
    //rect(enemy.x, enemy.y, enemy.widthC * precision, enemy.heightC * precision)
    
    const colision = collideRectRect(this.x,
                                    this.y,
                                    this.widthC * precision,
                                    this.heightC * precision,
                                    enemy.x,
                                    enemy.y,
                                    enemy.widthC * precision,
                                    enemy.heightC * precision
                                    );
                                    
    return colision;
  }
}