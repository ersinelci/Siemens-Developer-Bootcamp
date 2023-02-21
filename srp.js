// Single Responsibility Principle
// There should never be more than one reason for a class to change
var RecordBook = /** @class */ (function () {
    function RecordBook() {
    }
    return RecordBook;
}());
var Save = /** @class */ (function () {
    function Save() {
    }
    Save.prototype.saveToRecord = function (recordBook) {
        //method'lar ve diğer şeyler.
    };
    return Save;
}());
// İki ayrı iş için iki ayrı class tanımladık. Böylece her class'ın tek bir responsibility'si oldu.
