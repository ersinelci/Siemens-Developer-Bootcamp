class Animal {
    // Attributes'ları tanımladık.
    hunger: number
    health: number
    
    // behaviour'ları tanımladık.

    makeNoise() {
        console.log("Making noise.")
    }
    }

class Dog extends Animal {
    makeNoise(){
        console.log("Bark")
    }
} 

class Cat extends Animal {
}

const dog = new Dog();
const cat = new Cat();
// dog değişkeninin Animal class'ını inherit etmesine rağmen kendi içinde tanımlanan makeNoise() fonksiyonunu çağırdığını görebiliyoruz.

dog.makeNoise();

// cat değişkeni ise Animal class'ını inherit ederek parent class'daki fonksiyonu çalıştırır.
cat.makeNoise();



