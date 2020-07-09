class Enemy extends Animation {
  constructor(matrix, image, x, floorVariationY, widthC, heightC, widthSprite, heightSprite, velocity) {
    super(matrix, image, x, floorVariationY, widthC, heightC, widthSprite, heightSprite);

    this.floorVariationY = floorVariationY;

    this.velocity = velocity;

    //this.delay = delay;
    this.x = width
  }

  move() {
    // 3 é o factor de velocidade
    this.x = this.x - this.velocity;  
  }
  
  appear() {
    this.x = width;
  }
  
}