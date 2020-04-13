abstract class Person {
    abstract name: string;
 
    display() {
        console.log(this.name);
    }
 }
 
 class Employee extends Person { 
    name: string;
    empCode: number;
    
    constructor(name: string, code: number) { 
        super();
        
        this.empCode = code;
        this.name = name;
    }
 }
 
 let emp: Person = new Employee("Rashid", 46);
 emp.display();