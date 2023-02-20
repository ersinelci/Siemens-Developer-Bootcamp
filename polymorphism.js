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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    // behaviour'ları tanımladık.
    Animal.prototype.makeNoise = function () {
        console.log("Making noise.");
    };
    Animal.prototype.move = function () {
        console.log("Moving");
    };
    Animal.prototype.eat = function () {
        console.log("Eating");
    };
    return Animal;
}());
// Farklı class'lar için move fonksiyonu farklı şekillerde çalıştı.
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.move = function () {
        _super.prototype.move.call(this);
        console.log("Dog is walking");
    };
    return Dog;
}(Animal));
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snake.prototype.move = function () {
        _super.prototype.move.call(this);
        console.log("Snake is crawling");
    };
    return Snake;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.move = function () {
        //super.move();
        console.log("Bird is fliyng");
    };
    return Bird;
}(Animal));
var dog = new Dog();
var bird = new Bird();
var snake = new Snake();
dog.move();
bird.move();
snake.move();
