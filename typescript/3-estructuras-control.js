"use strict";
// Iterador
var lista = [10, 12, 12];
for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
    var numero = lista_1[_i];
    console.log(numero); //10, 12, 12
}
for (var indice_numero in lista) {
    console.log(indice_numero);
}
var CustomCollection = /** @class */ (function () {
    function CustomCollection() {
        this.itemArray = [];
    }
    CustomCollection.prototype.Add = function (item) {
        this.itemArray.push(item);
    };
    return CustomCollection;
}());
