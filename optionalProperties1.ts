class area {
    private length: number;
    private width?: number;
 
    constructor(length, width?) {
       this.length = length;
       this.width = width;
    }
 
    public area(){
       if(this.width) return this.length * this.width;
 
       return this.length * this.length;
    }
 }
 
 let square = new area(50);
 let rectangle = new area(10,20);
 
 console.log(square.area());
 console.log(rectangle.area());