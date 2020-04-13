interface ICar {
    engine: string;
    horsePower: number;
    torque: number;
}

interface ISuperCar extends ICar {
    brakes: string;
    isHybrid: boolean;
    fuelEconomy: (number) => number;
}

class Supercar implements ISuperCar {
    engine: string;
    horsePower: number;
    torque: number;
    brakes: string;
    isHybrid: boolean;

    constructor(engine, horsePower, torque, brakes, ishybrid) { 
        this.engine = engine;
        this.horsePower = horsePower;
        this.torque= torque;
        this.brakes = brakes;
        this.isHybrid = ishybrid;
    }

    fuelEconomy(distancePerLitre: number) {
        return distancePerLitre;
    }
}

let superCar = new Supercar('v8', 200, 200, 'brimbo', false);

console.log(superCar);

console.log(superCar.fuelEconomy(10));