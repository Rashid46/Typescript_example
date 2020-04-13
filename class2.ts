class Person {
    fullName: string;
    constructor(firstName: string, lastName: string) {
        this.fullName = firstName + ' ' + lastName;
    }

    name() {
        return this.fullName;
    }
}

let person = new Person('Rashid', 'Shahariar');
console.log(person.name());