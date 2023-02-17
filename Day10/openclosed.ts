enum SalaryType {
    High, 
    Low
}

// Open-closed prensibine uygun örnek 

interface ISalaryCalculate {
    calculate(salary: number): number;
}

class HighSalaryCalculate implements ISalaryCalculate{
    calculate(salary: number): number {
        return salary*10;
    }
}

class LowSalaryCalculate implements ISalaryCalculate {
    calculate(salary: number): number {
        return salary*5;
    }
}

// Mid level maaş feature'ı eklenmek istedi. Class ve interface'le kolayca çözüldü.
class MidSalaryCalculate implements ISalaryCalculate{
    calculate(salary: number): number {
        return salary*8;
    }
}


// Kötü Örnek, Open-Closed prensibi uygulanmamış. Yeni feature geldikçe switch'ler büyür. Program'ı maintain edemeyiz.

class SalaryCalculate {
    calculateGood(salary:number, SalaryCalculate:ISalaryCalculate) {
        return SalaryCalculate.calculate(salary);
    }

    CalculateBad(salary: number, salaryType: SalaryType): number {
        let sumSalary = 0;
        switch (salaryType) {
            case SalaryType.High:
                sumSalary = salary*10;
                break;
            case SalaryType.Low:
                sumSalary = salary*5
                break;
            default:
                break;
        }
        return sumSalary;
    }
} 

var salaryCalculate = new SalaryCalculate();
console.log(`bad-high ${salaryCalculate.CalculateBad(1000,SalaryType.High)}`)
console.log(`bad-low ${salaryCalculate.CalculateBad(1000,SalaryType.Low)}`)

console.log(`good-high ${salaryCalculate.calculateGood(1000,new HighSalaryCalculate)}`)
console.log(`good-low ${salaryCalculate.calculateGood(1000,new LowSalaryCalculate)}`)
console.log(`good-mid ${salaryCalculate.calculateGood(1000,new MidSalaryCalculate)}`)