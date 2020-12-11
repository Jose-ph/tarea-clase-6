function probarValidarCantidadDeIntegrantes(){

/*console.assert(

    validarCantidadDeIntegrantes("0") === "Este campo no puede estar vacio",

    "validarCantidadDeIntegrantes no validó que el campo no esté vacío"


);*/

console.assert(

    validarCantidadDeIntegrantes("asjdkljaldlsak") === "Este campo solo puede tener números",

    "validarCantidadDeIntegrantes no validó que el campo solo contenga letras",



);


}

probarValidarCantidadDeIntegrantes();