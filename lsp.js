// Liskov Substitution Principle
// Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.
var Rectangle = /** @class */ (function () {
    function Rectangle(_width, _height) {
        this._width = _width;
        this._height = _height;
    }
    Rectangle.prototype.area = function () {
        return this._height * this._width;
    };
    return Rectangle;
}());
var Square = /** @class */ (function () {
    function Square(_height) {
        this._height = _height;
    }
    Square.prototype.area = function () {
        return Math.pow(this._height, 2);
    };
    return Square;
}());
