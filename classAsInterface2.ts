class Length {
    length: number;
  }
 
  class Area extends Length {
    area() {
       return this.length * this.length;
    }
  }
 
  let x = new Area();
 
  x.length = 10;
  console.log(x.area());
 