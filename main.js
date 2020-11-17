
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


function mostrarBotonAgregar(){

    let $botonAgregar = document.querySelector('#boton-agregar');

    $botonAgregar.className = "";


}

function mostrarBotonQuitar(){

    let $botonQuitar = document.querySelector('#boton-quitar');
    
    $botonQuitar.className = "";

}


function crearLabelSalario(){

    

    let $nuevoLabel = document.createElement('label');

    $nuevoLabel.setAttribute('id', 'etiqueta');

    $nuevoLabel.innerText = 'Ingrese el salario anual del integrante';

    let $inputSalario = document.createElement('input');


    $inputSalario.setAttribute ('type' , 'number');
    $inputSalario.setAttribute('class' , 'salario');
    $inputSalario.setAttribute('min' , '0');

    $nuevoLabel.appendChild($inputSalario);


    return $nuevoLabel;
    


}

function redireccionar (){


    return window.location.href = "https://argentinaprograma.com/";
 }

 function mostrarBotonCalcularSalario(){

    let $botonCalcularSalario = document.querySelector('#calcular-salario');;
    
    $botonCalcularSalario.className = "";


 }

$botonSiguienteDos.onclick = function(event){

    let $respuestaUsuario = document.querySelector('#respuesta').value;
    let $botonAgregar = document.querySelector('#boton-agregar');
    let $botonQuitar = document.querySelector('#boton-quitar');
    let $botonCalcularSalario = document.querySelector('#calcular-salario');
    
    let $padre = document.querySelector('#contenedor-trabajadores');

    

    if ($respuestaUsuario === 'si'){

        console.log('La respuesta fue SI');

        mostrarBotonAgregar();
        mostrarBotonQuitar();
        mostrarBotonCalcularSalario();

        $botonAgregar.onclick = function(){

            

            crearLabelSalario();

            $padre.appendChild(crearLabelSalario());



        }

        $botonQuitar.onclick = function(){

            let $nuevoLabel = document.querySelector('#etiqueta');

            $padre.removeChild($nuevoLabel);
        }

        $botonCalcularSalario.onclick = function(){

            let salariosAnuales = document.querySelectorAll('.salario');

            let $mayorSalarioAnual = document.querySelector('#mayor-salario-anual');
            let $menorSalarioAnual = document.querySelector('#menor-salario-anual');
            let $salarioAnualPromedio = document.querySelector('#promedio-salario-anual');
            let $salarioMensualPromedio = document.querySelector('#promedio-salario-mensual');

            $mayorSalarioAnual.textContent = 'El mayor salario anual es ' + calcularMayorSalarioAnual(salariosAnuales);
            $menorSalarioAnual.textContent = 'El menor salario anual es ' + calcularMenorSalarioAnual(salariosAnuales);
            $salarioAnualPromedio.textContent = 'El salario anual promedio es ' + calcularSalarioAnualPromedio(salariosAnuales);



        }
    } else if($respuestaUsuario === 'no'){

        alert('Quizás te interese el siguiente curso. Presiona Aceptar y serás redireccionado a la página')

        

        setTimeout( redireccionar , 3000);



        
    }









     event.preventDefault();
}
