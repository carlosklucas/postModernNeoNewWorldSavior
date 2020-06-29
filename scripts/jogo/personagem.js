class Personagem extends Animacao {
 constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
      super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
   
   this.yInitial = height - this.altura;
   this.y = this.yInitial;
   
   this.jumpVelocity = 0;
   this.gravity = 3;
 }
  
  jump() {
   this.jumpVelocity = - 30;
  }
  
  applyGravity(){
    this.y = this.y + this.jumpVelocity;
    this.jumpVelocity = this.jumpVelocity + this.gravity;
    
    if(this.y > this.yInitial) {
      this.y = this.yInitial
    }
   
  }
  
  isHitting(inimigo) {
    noFill()
    rect(this.x, this.y, this.largura, this.altura)
    rect(     inimigo.x,
                                    inimigo.y,
                                    inimigo.largura,
                                    inimigo.altura
                   )
    const precision = 0.8
    const colisao = collideRectRect(this.x,
                                    this.y,
                                    this.largura * precision,
                                    this.altura * precision,
                                    inimigo.x,
                                    inimigo.y,
                                    inimigo.largura * precision,
                                    inimigo.altura * precision
                                    );
                                    
    return colisao;
  }
}