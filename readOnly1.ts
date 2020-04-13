class person {
    readonly name: string;
    constructor(name) {
       this.name = name;
    }
 }
 
 let newPerson = new person('Rashid');
 console.log(newPerson.name);