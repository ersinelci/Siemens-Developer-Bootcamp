//Aşağıdaki örnekte Ferrari class'ı Engine class'ındaki start method'unun özelliğini almıştır. (bkz. has-a ilişkisi)
class Car {
    brand:string;
    color:string;
    maxSpeed:number;
    carInfo():void{
        console.log(`Car brand is ${this.brand} and car properties are ${this.color} and maximum speed is ${this.maxSpeed} `);
    }
}
class Engine {
    start():void{
        console.log("Engine started!")
    }
    
}
class Ferrari extends Car {
    constructor(){
        super();
        const ferrariEngine= new Engine();
        ferrariEngine.start();
    }
}

let car1 = new Ferrari();


