"use strict";
maxValue(1, 2);
function maxValue(value1, value2) {
    return Math.max(value1, value2);
}
// DEFINICIÓN DE TIPOS
// Boolean
var nombreVariable = false;
// Numero
var numeroDecimal = 43.43;
// Texto
var cadena = "prueba";
// Arrays
var listaEdades = [10, 12, 12];
var listaNombres = ['hola', 'mundo'];
// Tuplas (clave/valor)
var personaTupla;
personaTupla = ['luis', 23];
// Enumerados
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["White"] = 2] = "White";
    Color[Color["Black"] = 3] = "Black";
})(Color || (Color = {}));
Color.Black;
//void
function alerta() {
    alert('hola');
}
// Null
var u = null;
// Undefined.
var uf = undefined;
