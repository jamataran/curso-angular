// Modulos y namespace
namespace Validador {
    export interface NumberValidator {
        isValidNumber(value: number): boolean;
    }

    export class ZipCodeValidator implements NumberValidator {
        isValidNumber(value: number): boolean {
            return value > 0;
        }

    }

}

let validadorInstancia: Validador.ZipCodeValidator = new Validador.ZipCodeValidator();
validadorInstancia.isValidNumber(2);