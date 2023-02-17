namespace isA {
    abstract class Vehicle {
        ileri():void {}
        abstract sag():void {}
        abstract sol():void {}
    
    }
    
    class Car extends Vehicle {
     sag(): void {
        console.log("saga gider");
     }
     sol(): void {
        console.log("sola gider");
     }
    }
    
    class Train extends Vehicle {
        sag(): void {
            throw new Error("Tren sağa gidemez");
            
        }
    
        sol(): void {
            throw new Error("Tren sola gidemez");
        }
    }
}