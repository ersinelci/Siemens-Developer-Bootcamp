//Aşağıdaki örnekte Ferrari, Car class'ından inherit edildiği için Ferrari class'ı özel bir Car class'ıdır. 

class Car {
    brand:string;
    color:string;
    maxSpeed:number;
    carInfo():void{
        console.log(`Car brand is ${this.brand} and car properties are ${this.color} and maximum speed is ${this.maxSpeed} `);
    }
}

class Ferrari extends Car {
    
}

let car1 = new Ferrari();
car1.color = "red";
car1.maxSpeed = 300;
car1.brand = "Ferrari";
car1.carInfo();


