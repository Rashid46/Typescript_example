abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
 
    display() {
        console.log(this.name);
    }
 }
 
 class Employee extends Person { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name);
        this.empCode = code;
    }
 
    displayCode() {
       console.log(this.empCode);
    }
 
 }
 
 let emp = new Employee("James", 100);
 emp.display();
 emp.displayCode();
 