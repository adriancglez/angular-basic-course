(function () {

    function getEdad() {
        return 100 + 100 + 300;
    }

    const nombre = 'Adrián';
    const apellido = 'González';
    const edad = 29;

    // const salida = nombre + apellido + edad;
    // const salida = nombre + " " + apellido + " ( " + edad + " )";

    const salida = `${nombre}\n${apellido}\n( ${edad + 100} ) ${getEdad() + 50}`;
    console.log(salida);


})();