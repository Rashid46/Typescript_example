class person {
    public name: string;
    constructor(name: string) {
       this.name = name;
    }
 
 
 }
 
 class employeee extends person {
    private salary: number;
    constructor(salary: number) {
       super('Rashid');
       this.salary = salary;
    }
 
    public detais() {
       console.log('The salary is ' + this.salary)
    }
 }
 
 let newEmployee = new employeee(500);
 console.log(newEmployee);
 console.log(newEmployee.detais());