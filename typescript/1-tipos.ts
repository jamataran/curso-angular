maxValue(1, 2);

function maxValue(value1: number, value2: number): number {
    return Math.max(value1, value2);
}

// DEFINICIÓN DE TIPOS

// Boolean
let nombreVariable: Boolean = false;

// Numero
let numeroDecimal: number = 43.43;

// Texto
let cadena: string = "prueba";

// Arrays
let listaEdades: number[] = [10, 12, 12];
let listaNombres: Array<string> = ['hola', 'mundo'];

// Tuplas (clave/valor)
let personaTupla: [string, number];
personaTupla = ['luis', 23];

// Enumerados
enum Color {
    Red, Green, White, Black
}

Color.Black;


//void

function alerta(): void {
    alert('hola');
}

// Null
let u: null = null;

// Undefined.
let uf: undefined = undefined;