class Animacao {

// matriz é a posição da matriz, imagem é a imagem escolhida, x é a posição na tela, largura e altura do personagem
constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
  this.matriz = matriz;
  this.imagem = imagem;
  this.largura = largura;
  this.altura = altura;
  this.x = x;
  this.y = height - this.altura;
  this.larguraSprite = larguraSprite;
  this.alturaSprite = alturaSprite;
  
  this.frameBruxa = 0; 
}

  show(){
  //image é um método do JS que posiciona no canvas a imagem
     image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameBruxa][0], this.matriz[this.frameBruxa][1], this.larguraSprite, this.alturaSprite);
    
    this.change();
  }
  
  
  change(){
    this.frameBruxa++
    
    if(this.frameBruxa >= this.matriz.length - 1) {
    this.frameBruxa = 0
    }
      }
}