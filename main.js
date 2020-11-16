
const $botonSiguiente = document.querySelector('#boton-siguiente');

const $botonSiguienteDos = document.querySelector('#boton-siguiente-2');

const $botonCalcular = document.querySelector('#boton-calcular');

let $divPadre = document.querySelector('#integrantes-creados');

let $edades = document.querySelectorAll('.integrante'); 

let $botonResetear = document.querySelector('#boton-resetear');

$botonSiguiente.onclick = function(event){

    let $divPadre = document.querySelector('#integrantes-creados');
    const $botonCalcular = document.querySelector('#boton-calcular');
    let numeroIntegrantes = Number(document.querySelector('#numero-integrantes').value)
    let indiceIntegrante = 0

    eliminarIntegrantesAnteriores();

     while (indiceIntegrante < numeroIntegrantes) {

        indiceIntegrante++          
         
         $divPadre.appendChild(crearIntegrante(indiceIntegrante));
         
    }

    if (indiceIntegrante > 0){
    mostrarBotonCalcular();

    }

   

    event.preventDefault();

}


function crearIntegrante (indice) {

    let indiceDeIntegrante = indice;
    

    let nuevoLabel = document.createElement('label');

    nuevoLabel.setAttribute('class', 'etiqueta')

    nuevoLabel.innerText = 'Ingrese la edad del integrante N°' + indiceDeIntegrante;

    let nuevoInput = document.createElement('input');

    nuevoInput.setAttribute('type', 'number');
    nuevoInput.setAttribute('min', '0');
    nuevoInput.setAttribute ('class', 'integrante');
    

    
    nuevoLabel.appendChild(nuevoInput);
    



    return nuevoLabel;



    }


function eliminarIntegrantesAnteriores (){


     document.querySelector('#integrantes-creados').innerHTML = "";

    
}


function mostrarBotonCalcular (evento){

    const $botonCalcular = document.querySelector('#boton-calcular');

    $botonCalcular.className = "";


} 


function mostrarResultados(){

    const $contenedorResultados = document.querySelector('#contenedor-resultados');

    $contenedorResultados.className = "";
}

function mostrarTrabajadores(){

    let $contenedorTrabajaores = document.querySelector('#contenedor-trabajadores');

    $contenedorTrabajaores.className= "";
}

function ocultarTrabajadores(){

    let $contenedorTrabajaores = document.querySelector('#contenedor-trabajadores');

    $contenedorTrabajaores.className= "oculto";

}

$botonCalcular.onclick = function (){

    let $edadesIntegrantes = document.querySelectorAll('.integrante'); 

    let $mayorEdad = document.querySelector('#mayor'); 
    let $menorEdad = document.querySelector('#menor');
    let $promedioEdad = document.querySelector('#promedio');


    $mayorEdad.innerText = 'La mayor edad es ' + calcularMayorEdad($edadesIntegrantes);

    $menorEdad.innerText = 'La menor edad es ' +   calcularMenorEdad($edadesIntegrantes);

    $promedioEdad.innerText = 'El promedio de edad es ' + calcularPromedioEdad($edadesIntegrantes);

    mostrarResultados();
    mostrarTrabajadores();


   
}


function ocultarBotonCalcular(){


    const $botonCalcular = document.querySelector('#boton-calcular');

    $botonCalcular.className = "oculto";


}

function ocultarResultados(){

    const $contenedorResultados = document.querySelector('#contenedor-resultados');

    $contenedorResultados.className = "oculto";


}


function borrarIntegrantes(){

    let $inputIntegrantes = document.querySelector('#numero-integrantes').value = "";

    return $inputIntegrantes;

     
}


function resetear(event){

    eliminarIntegrantesAnteriores();
    ocultarBotonCalcular();
    ocultarResultados();
    borrarIntegrantes();
    ocultarTrabajadores();


}


$botonResetear.onclick = resetear;

$botonSiguienteDos.onclick = function(event){

    let $respuestaUsuario = document.querySelector('#respuesta').toLowerCase();
    let $botonAgregar = document.querySelector('#boton-agregar');
    let $botonQuitar = document.querySelector('#boton-quitar');
    

    if ($respuestaUsuario === 'si'){

        mostrarBotonAgregar();
        mostrarBotonQuitar();

        $botonAgregar.onclick = function(){

            crearLabelSalario();





        }

        $botonQuitar.onclick = function(){

            eliminarLabelSalario();
        }


    }









    event.preventDefault();
}
