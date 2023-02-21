// Liskov Substitution Principle
// Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.

// Aşağıdaki örnekte de görülebileceği üzere sub-type'ın instance'ı objectlerle yer değişebilir ve programı bozmaz.
// Her sub-class tek bir upper-class'la ilişkisi vardır ve bu da Liskov Substitution Prensibini sağlar.
interface Shape {
  area() : number;
}

class Rectangle implements Shape {
  constructor(private _width: number, private _height: number) {}

  public area() : number {
    return this._height * this._width;
  }
}

class Square implements Shape {
  constructor(private _height: number) {}

  public area() : number {
    return Math.pow(this._height, 2);
  }
}


  