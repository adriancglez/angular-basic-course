(() => {

    const miFuncionN = function (a: string) {
        return a.toUpperCase();
    }

    const miFuncionF =  (a: string) => a.toUpperCase();

    const sumarN = function(a: number, b: number) {
        return a + b;
    }

    const sumarF = (a:number, b:number) => a + b;

    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            },1000);
        }
    };

    console.log(miFuncionN('Normal'));
    console.log(miFuncionF('Flecha'));
    console.log(sumarN(2,5));
    console.log(sumarF(2,5));
    hulk.smash();
})();