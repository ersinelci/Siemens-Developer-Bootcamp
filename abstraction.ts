abstract class Animal {
    public abstract makeNoise(): void;
}

class Dog extends Animal {
    public override makeNoise(): void {
        console.log('bark');
    }
}

const dog = new Dog();

dog.makeNoise();