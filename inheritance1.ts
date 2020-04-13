class Car {
    engine: string;
    constructor(engine: string) {
        this.engine = engine;
    }
}

class SuperCar extends Car {
    move() {
        return this.engine;
    }
}


let superCar = new SuperCar('v8');
console.log(superCar.move());