class Animal {
    readonly name: string;
    public skinColor: Color;
    private age: number;

    constructor(name: string, age: number, skinColor: Color) {
        this.name = name;
        this.age = age;
        this.skinColor = skinColor;
    }

    greet(): string {
        return 'Hola, ${name}';
    }
}

let animal = new Animal('perro', 23, Color.Black);
animal.skinColor = Color.Black;


// Herencia
class Dog extends Animal {
    greet(): string {
        return 'woof';
    }
}

// Abstracta
abstract class Persona {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Developer extends Persona {

}

let persona = new Developer('Samuel');

// Interfaces
interface Message {
    title: string;
    message: string;
    errorNumber?: number;

}

function WriteMessage(message: Message) {
    console.log(message.title);
}
