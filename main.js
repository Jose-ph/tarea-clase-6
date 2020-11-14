
const $botonSiguiente = document.querySelector('#boton-siguiente');

const $botonCalcular = document.querySelector('#boton-calcular');

$botonSiguiente.onclick = function(){


    const $botonCalcular = document.querySelector('#boton-calcular');
    let $numeroIntegrantes = Number(document.querySelector('#numero-integrantes').value)
    let integrante = 0

    vaciarDivIntegrantes();

     while (integrante < $numeroIntegrantes) {

        integrante++          
         
         crearIntegrantes(integrante);
         

         
    }

    if (integrante > 0){
    mostrarBotonCalcular();

    }





}