// High level module

class StockManagement {
    _stockRepository:Price
    constructor(stockRepository:IStock){
        this._stockRepository = stockRepository;
    }

    savePrice(data:number){
        this._stockRepository.savePriceInfo(data);
    }
}

interface IStock {
    savePriceInfo(data:number);
}
// Low Level Module

class Price {
    savePriceInfo(data:number){
        console.log(`Price value is ${data} and saved!`);
    }
}

let priceInfo = new StockManagement(new Price());
priceInfo.savePrice(100);