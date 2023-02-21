//Open-Close Principle
//Software entities should be open for extension, but closed for modification.
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * (this.radius * this.radius);
    };
    return Circle;
}());
var AreaCalculator = /** @class */ (function () {
    function AreaCalculator() {
    }
    AreaCalculator.prototype.calculateArea = function (shape) {
        return shape.calculateArea();
    };
    return AreaCalculator;
}());
