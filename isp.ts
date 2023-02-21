//Interface Segregation Principle

// Many client-specific interfaces are better than one general-purpose interface.

// ---------------------------------------------------
/*
interface Animal{
    fly(): void;
    swim(): void;
    walk(): void;
}

class Bird implements Animal {
    public fly(): void {
        console.log("I can fly")
    }

    public swim(): void {
        throw new Error("Birds cannot swim!");
    }
        
    public walk():void {
        console.log("I can walk")
    }
    }
*/
//------------------------------------------------
// Örneğimizdeki interface'deki methodlar class'ımız için çok uygun olmadı. Çünkü tanımladığımız Bird yüzemez.
// Bu nedenle interface'i bölüyoruz.

interface Fly{
    fly():void
}

interface Swim{
    swim():void
}

interface Walk{
    walk():void
}

class Bird implements Fly, Walk {
    public fly():void{
        console.log("I'm flying");
    };
    public walk():void{
        console.log("I'm walking");
    };
}

// Böylece sadece ihtiyaç olan interface'leri ilgili class'a implement ettik.


