class Animal {
    // Attributes'ları tanımladık.
    hunger: number
    health: number
        
    // behaviour'ları tanımladık.
    
    makeNoise() {
        console.log("Making noise.")
    }

    move() {
        console.log("Moving")
    }

    eat(){
        console.log("Eating")
    }
    }
    // Farklı class'lar için move fonksiyonu farklı şekillerde çalıştı.
    class Dog extends Animal{
        move(){
            super.move();
            console.log("Dog is walking");}

    }

    class Snake extends Animal{
        move(){
            super.move();
            console.log("Snake is crawling");}

    }

    class Bird extends Animal{
        move(){
            //super.move();
            console.log("Bird is fliyng");}

    }

    const dog: Animal = new Dog();
    const bird: Animal = new Bird();
    const snake: Animal = new Snake();

    dog.move();
    bird.move();
    snake.move();


