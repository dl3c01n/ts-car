"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(plate, seaters, brand, colour, carburant) {
        var _this = this;
        this.generateCar = function () {
            console.log("La marque de ma voiture est : " + _this.brand);
            console.log("Il y a  " + _this.seaters + " de passagers");
            console.log("La plaque de ma voiture est : " + _this.plate);
            console.log("Ma voiture est : " + _this.colour);
            console.log("Ma voiture est : " + _this.carburant);
        };
        this.plate = plate;
        this.seaters = seaters;
        this.brand = brand;
        this.colour = colour;
        this.carburant = carburant;
    }
    return Car;
}());
var electricCar = /** @class */ (function (_super) {
    __extends(electricCar, _super);
    function electricCar(plate, seaters, brand, colour, carburant) {
        return _super.call(this, plate, seaters, brand, colour, carburant) || this;
    }
    return electricCar;
}(Car));
var fuelCar = /** @class */ (function (_super) {
    __extends(fuelCar, _super);
    function fuelCar(plate, seaters, brand, colour, carburant) {
        return _super.call(this, plate, seaters, brand, colour, carburant) || this;
    }
    return fuelCar;
}(Car));
var dieselCar = /** @class */ (function (_super) {
    __extends(dieselCar, _super);
    function dieselCar(plate, seaters, brand, colour, carburant) {
        return _super.call(this, plate, seaters, brand, colour, carburant) || this;
    }
    return dieselCar;
}(Car));
var pedalCar = /** @class */ (function (_super) {
    __extends(pedalCar, _super);
    function pedalCar(plate, seaters, brand, colour, carburant) {
        return _super.call(this, plate, seaters, brand, colour, carburant) || this;
    }
    return pedalCar;
}(Car));
var electric = new electricCar("AA-000-BB", 3, "Mercedes", "Noir Mat", "Electrique");
var fuel = new fuelCar("FF-666-BB", 3, "Renault", "Orange", "Essence");
var diesel = new dieselCar("ZZ-123-VV", 3, "Peugeot", "Marron", "Disel");
var pedal = new pedalCar("JJ-258-HJ", 3, "BMW", "Gris", "Pedale");
electric.generateCar();
fuel.generateCar();
diesel.generateCar();
pedal.generateCar();
//# sourceMappingURL=test.js.map