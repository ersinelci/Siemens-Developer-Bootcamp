//Interface Segregation Principle
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("I'm flying");
    };
    ;
    Bird.prototype.walk = function () {
        console.log("I'm walking");
    };
    ;
    return Bird;
}());
// Böylece sadece ihtiyaç olan interface'leri ilgili class'a implement ettik.
