(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    };

    const myFunction = ({ nombre, clave, poder }: any) => {

        console.log(nombre);
        console.log(clave);
        // console.log(poder);
    }

    myFunction(avenger);

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);

    const [ thor, ironman, spiderman ] = avengers;

    console.log(thor);
    console.log(ironman);
    console.log(spiderman);

    const myFunctionA = ([ thor, ironman, spiderman ]: any) => {

        console.log(thor);
        console.log(ironman);
        // console.log(spiderman);
    }

    myFunctionA(avengers);
})();