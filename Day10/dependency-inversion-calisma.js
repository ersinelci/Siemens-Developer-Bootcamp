// High level module
var StockManagement = /** @class */ (function () {
    function StockManagement(stockRepository) {
        this._stockRepository = stockRepository;
    }
    StockManagement.prototype.savePrice = function (data) {
        this._stockRepository.savePriceInfo(data);
    };
    return StockManagement;
}());
// Low Level Module
var Price = /** @class */ (function () {
    function Price() {
    }
    Price.prototype.savePriceInfo = function (data) {
        console.log("Price value is ".concat(data, " and saved!"));
    };
    return Price;
}());
var priceInfo = new StockManagement(new Price());
priceInfo.savePrice(100);
