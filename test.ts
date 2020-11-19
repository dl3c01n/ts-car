class Car {
    private _plate : string;
    private _seaters: number;
    private _brand: string;
    private _colour: string;
    private _carburant: string;

    constructor(plate: string, seaters: number, brand: string, colour: string, carburant: string){
        this._plate = plate;
        this._seaters = seaters;
        this._brand = brand;
        this._colour = colour;
        this._carburant = carburant;
    }

    public generateCar = () :void => {
        console.log(`La marque de ma voiture est : ${this._brand}`)
        console.log(`Il y a ${this._seaters} passagers`)
        console.log(`La plaque de ma voiture est : ${this._plate}`)
        console.log(`Ma voiture est : ${this._colour}`)
        console.log(`Ma voiture est : ${this._carburant}`)
    } 

    public setPlate = (plate: string) => {
        this._plate = plate
    }
    public setSeaters = (seaters: number) => {
        this._seaters = seaters
    }
    public setBrand = (brand: string) => {
        this._brand = brand
    }
    public setColour = (colour: string) => {
        this._colour = colour
    }
    public setCarburant = (carburant: string) => {
        this._carburant = carburant
    }

    public getPlate = () :string => {
        return this._plate;
    }
    public getSeaters = () :number => {
        return this._seaters;
    }
    public getBrand = () :string => {
        return this._brand;
    }
    public getColour = () :string => {
        return this._colour;
    }
    public getCarburant = () :string => {
        return this._carburant;
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

electric.generateCar()
electric.getBrand()