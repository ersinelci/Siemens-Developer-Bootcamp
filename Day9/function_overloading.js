class Calculate {
    getSalary(a, b) {
        if (typeof (a) == "number") {
            return 5;
        }
        return "salary";
    }
}
var calculate1 = new Calculate();
console.log(calculate1.getSalary(1, 2)); // 5 dönmeli
console.log(calculate1.getSalary("ahmet", "mehmet")); //salary
