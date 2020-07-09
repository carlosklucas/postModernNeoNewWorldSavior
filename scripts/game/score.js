class Score {
  constructor() {
    this.points = 0
  }
 
  show() {
    textAlign(RIGHT)
    fill('#fff')
    textSize(50)
    //points must be convert to Integer
   text(parseInt(this.points), width - 30, 50) 
  }
  
  addPoints() {
    // if I didn't have a ParseInt, there would be float numbers
   

    
    this.points = this.points + 0.2
  }
  
}