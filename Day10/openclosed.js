var SalaryType;
(function (SalaryType) {
    SalaryType[SalaryType["High"] = 0] = "High";
    SalaryType[SalaryType["Low"] = 1] = "Low";
})(SalaryType || (SalaryType = {}));
var HighSalaryCalculate = /** @class */ (function () {
    function HighSalaryCalculate() {
    }
    HighSalaryCalculate.prototype.calculate = function (salary) {
        return salary * 10;
    };
    return HighSalaryCalculate;
}());
var LowSalaryCalculate = /** @class */ (function () {
    function LowSalaryCalculate() {
    }
    LowSalaryCalculate.prototype.calculate = function (salary) {
        return salary * 5;
    };
    return LowSalaryCalculate;
}());
// Kötü Örnek, Open-Closed prensibi uygulanmamış. Yeni feature geldikçe switch'ler büyür. Program'ı maintain edemeyiz.
var SalaryCalculate = /** @class */ (function () {
    function SalaryCalculate() {
    }
    SalaryCalculate.prototype.calculateGood = function (salary, SalaryCalculate) {
        return SalaryCalculate.calculate(salary);
    };
    SalaryCalculate.prototype.CalculateBad = function (salary, salaryType) {
        var sumSalary = 0;
        switch (SalaryType) {
            case salaryType.High:
                sumSalary = salary * 10;
                break;
            case salaryType.Low:
                sumSalary = salary * 5;
                break;
            default:
                break;
        }
        return sumSalary;
    };
    return SalaryCalculate;
}());
