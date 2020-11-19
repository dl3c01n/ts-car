"use strict";
var Car = /** @class */ (function () {
    function Car(plate, seaters, brand, colour) {
        var _this = this;
        this.generateCar = function () {
            console.log("La marque de ma voiture est : " + _this.brand);
            console.log("Il y a  " + _this.seaters + " de passagers");
            console.log("La plaque de ma voiture est : " + _this.plate);
            console.log("Ma voiture est : " + _this.colour);
        };
        this.plate = plate;
        this.seaters = seaters;
        this.brand = brand;
        this.colour = colour;
    }
    return Car;
}());
var car1 = new Car("AA-000-BB", 3, "Mercedes", "Noir Mat");
var car2 = new Car("JJ-666-DD", 3, "Renault", "Jaune");
var car3 = new Car("CC-999-ZZ", 3, "Aston Martin", "Gris");
car1.generateCar();
car2.generateCar();
car3.generateCar();
//# sourceMappingURL=test.js.map