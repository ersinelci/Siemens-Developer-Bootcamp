var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.carInfo = function () {
        console.log("Car brand is ".concat(this.brand, " and car properties are ").concat(this.color, " and maximum speed is ").concat(this.maxSpeed, " "));
    };
    return Car;
}());
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ferrari;
}(Car));
var car1 = new Ferrari();
car1.color = "red";
car1.maxSpeed = 300;
car1.brand = "Ferrari";
car1.carInfo();
