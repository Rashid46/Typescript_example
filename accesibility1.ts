class person {
    private name: string;
    constructor(name: string) {
       this.name = name;
    }
 
 }
 
 class employeee extends person {
    public salary: number;
    constructor(salary: number) {
       super('Rashid');
       this.salary = salary;
    }
 }
 
 let newEmployee = new employeee(500);
 console.log(newEmployee);
 console.log(newEmployee.salary);
 
 