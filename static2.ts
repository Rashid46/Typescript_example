class area {
    static height: 100;
    width: number;
    constructor(width: number) {
       this.width = width;
    }
    calculateArea() {
        return area.height * this.width;
    }
 }
 
 let rectangleArea = new area(20);
 
 console.log(rectangleArea.calculateArea());
 