
const $botonSiguiente = document.querySelector('#boton-siguiente');

const $botonCalcular = document.querySelector('#boton-calcular');

$botonSiguiente.onclick = function(event){


    const $botonCalcular = document.querySelector('#boton-calcular');
    let numeroIntegrantes = Number(document.querySelector('#numero-integrantes').value)
    let indiceIntegrante = 0

    eliminarIntegrantesAnteriores();

     while (indiceIntegrante < numeroIntegrantes) {

        indiceIntegrante++          
         
         crearIntegrante(indiceIntegrante);
         

         
    }

    if (indiceIntegrante > 0){
    mostrarBotonCalcular();

    }



    event.preventDefault();

}






function crearIntegrante (indice) {

    let indiceDeIntegrante = indice;
    let $divPadre = document.querySelector('#integrantes-creados');

    let nuevoLabel = document.createElement('label');

    nuevoLabel.setAttribute('class', 'etiqueta')

    nuevoLabel.innerText = 'Ingrese la edad del integrante N°' + indiceDeIntegrante;

    let nuevoInput = document.createElement('input');

    nuevoInput.setAttribute('type', 'number');
    nuevoInput.setAttribute('min', '0');
    nuevoInput.setAttribute ('class', 'integrante');
    

    
    nuevoLabel.appendChild(nuevoInput);
    $divPadre.appendChild(nuevoLabel);
    



    return nuevoLabel;

    

    

    }



function eliminarIntegrantesAnteriores (evento){


    let $divPadre = document.querySelector('#integrantes-creados');

    $divPadre.innerHTML = "";
}


function mostrarBotonCalcular (evento){

    const $botonCalcular = document.querySelector('#boton-calcular');

    $botonCalcular.className = "";


} 


function mostrarDivContenedorResultados(){

    const $divContenedorResultados = document.querySelector('#contenedor-resultados');

    $divContenedorResultados.className = "";
}



$botonCalcular.onclick = function (){


    calcularMayorEdad();
    calcularMenorEdad();
    calcularPromedioEdad();
    mostrarDivContenedorResultados();


   
}

