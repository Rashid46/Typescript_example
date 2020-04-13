class Person {
    fullName: string;
    itemList: any[] = [];
    constructor(firstName: string, lastName: string) {
        this.fullName = firstName + ' ' + lastName;
    }

    name() {
        return this.fullName;
    }

    addItem(item: string) {
        this.itemList.push(item);
    }
}

let person = new Person('Rashid', 'Shahariar');
console.log(person.name());

person.addItem('Pen');
person.addItem('Paper');

console.log(person.itemList);

