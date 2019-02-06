"use strict";
// Modulos y namespace
var Validador;
(function (Validador) {
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isValidNumber = function (value) {
            return value > 0;
        };
        return ZipCodeValidator;
    }());
    Validador.ZipCodeValidator = ZipCodeValidator;
})(Validador || (Validador = {}));
var validadorInstancia = new Validador.ZipCodeValidator();
validadorInstancia.isValidNumber(2);
