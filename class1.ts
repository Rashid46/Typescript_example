class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return 'Hello ' + this.name + '!';
    }
}

let person = new Person('Rashid Shahariar');
console.log(person.greet());