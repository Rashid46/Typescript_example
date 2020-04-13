class Circle {
    static pi: number = 3.14;
    
    static calculateArea(radius:number) {
        return this.pi * radius * radius;
    }
 }
 
 console.log(Circle.calculateArea(5));