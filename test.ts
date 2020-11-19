class Car {
    private plate : string;
    private seaters: number;
    private brand: string;
    private colour: string;

    constructor(plate: string, seaters: number, brand: string, colour: string){
        this.plate = plate;
        this.seaters = seaters;
        this.brand = brand;
        this.colour = colour;
    }

    public generateCar = () :void => {
        console.log(`La marque de ma voiture est : ${this.brand}`)
        console.log(`Il y a  ${this.seaters} de passagers`)
        console.log(`La plaque de ma voiture est : ${this.plate}`)
        console.log(`Ma voiture est : ${this.colour}`)
    } 
}

let car1 = new Car("AA-000-BB", 3, "Mercedes", "Noir Mat") 
let car2 = new Car("JJ-666-DD", 3, "Renault", "Jaune") 
let car3 = new Car("CC-999-ZZ", 3, "Aston Martin", "Gris") 

car1.generateCar()
car2.generateCar()
car3.generateCar()