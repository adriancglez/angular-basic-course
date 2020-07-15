(() => {

    const sumar = (a: number, b: number): number => a + b;

    const nombre = (): string => 'Hola Adrián';

    const obtenerSalario = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve('Adrian');
        });
    }

    obtenerSalario().then(a => console.log(a.toUpperCase()));
})();