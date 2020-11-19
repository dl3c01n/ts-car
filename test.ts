class Car {
    public plate : string;
    public seaters: number;
    public brand: string;
    public colour: string;
    public carburant: string;

    constructor(plate: string, seaters: number, brand: string, colour: string, carburant: string){
        this.plate = plate;
        this.seaters = seaters;
        this.brand = brand;
        this.colour = colour;
        this.carburant = carburant;
    }

    public generateCar = () :void => {
        console.log(`La marque de ma voiture est : ${this.brand}`)
        console.log(`Il y a  ${this.seaters} de passagers`)
        console.log(`La plaque de ma voiture est : ${this.plate}`)
        console.log(`Ma voiture est : ${this.colour}`)
        console.log(`Ma voiture est : ${this.carburant}`)
    } 
}

class electricCar extends Car {
    constructor(plate: string, seaters: number, brand: string, colour: string, carburant: string){
        super(plate, seaters, brand, colour, carburant);
    }
}

class fuelCar extends Car {
    constructor(plate: string, seaters: number, brand: string, colour: string, carburant: string){
        super(plate, seaters, brand, colour, carburant);
    }
}

class dieselCar extends Car {
    constructor(plate: string, seaters: number, brand: string, colour: string, carburant: string){
        super(plate, seaters, brand, colour, carburant);
    }
}

class pedalCar extends Car {
    constructor(plate: string, seaters: number, brand: string, colour: string, carburant: string){
        super(plate, seaters, brand, colour, carburant);
    }
}

let electric = new electricCar("AA-000-BB", 3, "Mercedes", "Noir Mat", "Electrique") 
let fuel = new fuelCar("FF-666-BB", 3, "Renault", "Orange", "Essence") 
let diesel = new dieselCar("ZZ-123-VV", 3, "Peugeot", "Marron", "Disel") 
let pedal = new pedalCar("JJ-258-HJ", 3, "BMW", "Gris", "Pedale") 

electric.generateCar()
fuel.generateCar()
diesel.generateCar()
pedal.generateCar()