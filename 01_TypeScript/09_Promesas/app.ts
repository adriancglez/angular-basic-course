(() => {

    console.log('Inicio');

    const prom1: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Se terminó el timeout');
        }, 1000);
    });

    prom1.then(mensaje => console.log(mensaje)).catch(err => console.warn(err));

    console.log('Fin');

    const retirarDinero = (montoRetirar: number): Promise<number> => {
        let dineroActual = 1000;

        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject('No hay suficiente saldo');
            } else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    }

    retirarDinero(500).then(montoActual => console.log(`Me queda ${montoActual}`)).catch(console.warn);
})();