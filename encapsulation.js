var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.setHealth = function (health) {
        if (health < 0) {
            console.log("You can't set the health below 0");
        }
        this.health = health;
    };
    Animal.prototype.getHealth = function () {
        return this.health;
    };
    Animal.prototype.setHunger = function (hunger) {
        this.hunger = hunger;
    };
    Animal.prototype.getHunger = function () {
        return this.hunger;
    };
    // behaviour'ları tanımladık.
    Animal.prototype.makeNoise = function () {
        console.log("Making noise.");
    };
    return Animal;
}());
var dog = new Animal();
//dog.health = -8;
//dog.hunger = 5;
// Kullanıcılar negatif değer de girebilir. Bu ve benzeri problemlerin önüne geçmek için
// private keyword'ünü kullanacağız. Getter ve setter kullanacağız. Negatif değer tarzı boundary'leri bunun içine tanımlayacağız.
dog.setHealth(100);
dog.setHunger(10);
console.log("Dog has ".concat(dog.getHealth(), " health and ").concat(dog.getHunger(), " hunger"));
