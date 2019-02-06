"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, skinColor) {
        this.name = name;
        this.age = age;
        this.skinColor = skinColor;
    }
    Animal.prototype.greet = function () {
        return 'Hola, ${name}';
    };
    return Animal;
}());
var animal = new Animal('perro', 23, Color.Black);
animal.skinColor = Color.Black;
// Herencia
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.greet = function () {
        return 'woof';
    };
    return Dog;
}(Animal));
// Abstracta
var Persona = /** @class */ (function () {
    function Persona(name) {
        this.name = name;
    }
    return Persona;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Developer;
}(Persona));
var persona = new Developer('Samuel');
function WriteMessage(message) {
    console.log(message.title);
}
