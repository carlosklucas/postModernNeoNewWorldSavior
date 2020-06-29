class Inimigo extends Animacao {
 constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
   super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
 
   this.velocidade = 3;
 }
  
  move() {
    // 3 é o factor de velocidade
  this.x = this.x - this.velocidade;
    
    if(this.x < -this.largura){
    this.x = width;
    }
  }
}