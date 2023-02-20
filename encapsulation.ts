class Animal {
    // Attributes'ları tanımladık.
    private hunger: number;
    private health: number;

    setHealth(health: number) {
        if (health < 0){
            console.log("You can't set the health below 0")
        }
        this.health = health;
    }

    getHealth () {
        return this.health;
    }
    
    setHunger(hunger: number) {
        this.hunger = hunger;
    }

    getHunger () {
        return this.hunger;
    }
    // behaviour'ları tanımladık.

    makeNoise() {
        console.log("Making noise.")
    }
    }

    const dog = new Animal();

    //dog.health = -8;
    //dog.hunger = 5;

    // Kullanıcılar negatif değer de girebilir. Bu ve benzeri problemlerin önüne geçmek için
    // private keyword'ünü kullanacağız. Getter ve setter kullanacağız. Negatif değer tarzı boundary'leri bunun içine tanımlayacağız.

    dog.setHealth(100);
    dog.setHunger(10);

    console.log(`Dog has ${dog.getHealth()} health and ${dog.getHunger()} hunger`);

    
  
    

