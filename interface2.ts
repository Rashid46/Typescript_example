interface ICar {
    engine: string;
    horsePower: number;
    torque: number;
}

interface ISuperCar extends ICar {
    brakes: string;
    isHybrid: boolean;
}
var superCarObj: ISuperCar = {
    engine: "v12",
    horsePower: 800,
    torque: 780,
    brakes: "Brimbo",
    isHybrid: true
}

console.log(superCarObj);
