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
            console.log("La marque de ma voiture est : " + _this._brand);
            console.log("Il y a " + _this._seaters + " passagers");
            console.log("La plaque de ma voiture est : " + _this._plate);
            console.log("Ma voiture est : " + _this._colour);
            console.log("Ma voiture est : " + _this._carburant);
        };
        this.setPlate = function (plate) {
            _this._plate = plate;
        };
        this.setSeaters = function (seaters) {
            _this._seaters = seaters;
        };
        this.setBrand = function (brand) {
            _this._brand = brand;
        };
        this.setColour = function (colour) {
            _this._colour = colour;
        };
        this.setCarburant = function (carburant) {
            _this._carburant = carburant;
        };
        this.getPlate = function () {
            return _this._plate;
        };
        this.getSeaters = function () {
            return _this._seaters;
        };
        this.getBrand = function () {
            return _this._brand;
        };
        this.getColour = function () {
            return _this._colour;
        };
        this.getCarburant = function () {
            return _this._carburant;
        };
        this._plate = plate;
        this._seaters = seaters;
        this._brand = brand;
        this._colour = colour;
        this._carburant = carburant;
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
electric.generateCar();
electric.getBrand();
//# sourceMappingURL=test.js.map