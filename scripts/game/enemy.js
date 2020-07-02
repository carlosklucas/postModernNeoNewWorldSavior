class Enemy extends Animation {
 constructor(matrix, image, x, floorVariationY, widthC, heightC, widthSprite, heightSprite, velocity, delay) {
   super(matrix, image, x, floorVariationY, widthC, heightC, widthSprite, heightSprite);
 
   this.floorVariationY = floorVariationY;
   
   this.velocity = velocity;
   this.delay = delay;
   this.x = width + this.delay
 }
  
  move() {
    // 3 é o factor de velocidade
  this.x = this.x - this.velocity;
    
    if(this.x < -this.widthC - this.delay){
    this.x = width;
    }
  }
}