function add(a:number, b: number): number {
    return a+b;
}

console.log(add(1,2));

let add_anonymous = function (a:number, b:number): number {
    return a+b;
}

console.log(add_anonymous(5,6));

let add_anonymous_type_2 = (a:number,b:number):number => a+b;
let add_anonymous_type_3 = (a:number,b:number):number => {return a+b;}

function add2(x:number,y:number, ...a:number[]) //...a yapısı sınırsız number tipinde input alabileceği anlamına gelir.
{
    var sum = 0;
    a.forEach(x=>{sum += x;})
    return sum;

}

function calculate(a:number,b:number,c:number=6): number {
    return a+b+c;
}

console.log(calculate(2,4));
console.log(calculate(2,4,10));
console.log(add2(2,3,4,5,6))


