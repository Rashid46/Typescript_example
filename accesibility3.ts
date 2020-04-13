class transport {
    private type: string;
    constructor(type: string) {
        this.type = type;
    }
 
    public transportType() {
        return this.type;
    }
 }
 
 let car = new transport('Vehicle')
 console.log(car.transportType());