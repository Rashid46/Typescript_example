class Shape {   
    radius: number   
    constructor(radius: number) {   
       this.radius = radius; 
    }   
 }   
 class Circle extends Shape {   
    display():void {  
        let area = 3.1416 * this.radius * this.radius;
       console.log("Area of the circle: " + area); 
    }   
 }  
 var obj = new Circle(320);   
 obj.display()  