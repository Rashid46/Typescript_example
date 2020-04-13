class person {
    readonly name: string;
    height: number;
    constructor(name, height) {
       this.name = name;
       this.height = height;
    }
 }
 
 let newPerson = new person('Rashid', 168);
 console.log(newPerson);
 
 newPerson.height = 180;
 console.log(newPerson);