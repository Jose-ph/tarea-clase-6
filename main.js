
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






function crearIntegrantes (integrante) {

    let numeroDeIntegrante = integrante;
    let $divPadre = document.querySelector('#integrantes-creados');

    let nuevoLabel = document.createElement('label');

    nuevoLabel.setAttribute('class', 'etiqueta')

    nuevoLabel.innerText = 'Ingrese la edad del integrante N°' + numeroDeIntegrante;

    let nuevoInput = document.createElement('input');

    nuevoInput.setAttribute('type', 'number');
    nuevoInput.setAttribute('min', '0');
    nuevoInput.setAttribute ('class', 'nuevo-integrante');
    

    
    nuevoLabel.appendChild(nuevoInput);
    $divPadre.appendChild(nuevoLabel);
    



    return $divPadre.appendChild(nuevoLabel);

    

    

    }



function vaciarDivIntegrantes (evento){


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

