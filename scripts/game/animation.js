class Animation {

// matriz é a posição da matriz, imagem é a imagem escolhida, x é a posição na tela, largura e altura do personagem
constructor(matrix, image, x, floorVariationY, widthC, heightC, widthSprite, heightSprite){
  this.matrix = matrix;
  this.image = image;
  this.widthC = widthC;
  this.heightC = heightC;
  this.x = x;
  this.floorVariationY = floorVariationY;
  this.y = height - this.heightC - this.floorVariationY;
  this.widthSprite = widthSprite;
  this.heightSprite = heightSprite;
  
  this.frameMalhao = 0; 
}

  show(){
  //image é um método do JS que posiciona no canvas a imagem
     image(this.image, this.x, this.y, this.widthC, this.heightC, this.matrix[this.frameMalhao][0], this.matrix[this.frameMalhao][1], this.widthSprite, this.heightSprite);
    
    this.change();
  }
  
  
  change(){
    this.frameMalhao++
    
    if(this.frameMalhao >= this.matrix.length - 1) {
    this.frameMalhao = 0
    }
      }
}