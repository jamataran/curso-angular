// Iterador
let lista: Array<number> = [10, 12, 12];
for (let numero of lista) {
    console.log(numero); //10, 12, 12
}

for (let indice_numero in lista) {
    console.log(indice_numero);
}

class CustomCollection<T> {
    private itemArray: Array<T>;

    constructor() {
        this.itemArray = [];
    }

    Add(item: T) {
        this.itemArray.push(item);
    }
}