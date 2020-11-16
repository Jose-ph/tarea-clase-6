
const $botonSiguiente = document.querySelector('#boton-siguiente');

const $botonCalcular = document.querySelector('#boton-calcular');

let $divPadre = document.querySelector('#integrantes-creados');

let $edades = document.querySelectorAll('.integrante'); 

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



$botonCalcular.onclick = function (){

    let $edadesIntegrantes = document.querySelectorAll('.integrante'); 


    calcularMayorEdad($edadesIntegrantes);
    calcularMenorEdad($edadesIntegrantes);
    calcularPromedioEdad($edadesIntegrantes);
    mostrarResultados($edadesIntegrantes);


    let $mayorEdad = document.querySelector('#mayor'); 
    let $menorEdad = document.querySelector('#menor');
    let $promedioEdad = document.querySelector('#promedio');


   
}

