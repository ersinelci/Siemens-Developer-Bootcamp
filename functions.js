function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
let add_anonymous = function (a, b) {
    return a + b;
};
console.log(add_anonymous(5, 6));
let add_anonymous_type_2 = (a, b) => a + b;
let add_anonymous_type_3 = (a, b) => { return a + b; };
function add2(x, y, ...a) {
    var sum = 0;
    a.forEach(x => { sum += x; });
    return sum;
}
function calculate(a, b, c = 6) {
    return a + b + c;
}
console.log(calculate(2, 4));
console.log(calculate(2, 4, 10));
console.log(add2(2, 3, 4, 5, 6));
