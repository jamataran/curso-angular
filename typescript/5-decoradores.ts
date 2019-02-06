function Logged() {
    return function (target: any) {
        console.log('Funcion Logged');
    }
}

@Logged()
class TestDecorator {
    method(): boolean {
        return true;
    }
}