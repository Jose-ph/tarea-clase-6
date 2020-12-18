


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

    if (indiceIntegrante > 0 ){ // por aca poner la validacion para q no pueda agregar integrantes
    mostrarBotonCalcular();

    }


    event.preventDefault();

}


function crearIntegrante (indice) {

    let indiceDeIntegrante = indice;
    

    let nuevoLabel = document.createElement('label');

    nuevoLabel.setAttribute('class', 'etiqueta d-table')

    nuevoLabel.innerText = 'Ingrese la edad del integrante N°' + indiceDeIntegrante;

    let nuevoInput = document.createElement('input');

    nuevoInput.setAttribute('type', 'number');
    nuevoInput.setAttribute('min', '0');
    nuevoInput.setAttribute ('class', 'integrante border border-dark mt-1');
    

    
    nuevoLabel.appendChild(nuevoInput);
    



    return nuevoLabel;



    }


function eliminarIntegrantesAnteriores (){


    document.querySelector('#integrantes-creados').innerHTML = "";

    
}


function mostrarBotonCalcular (evento){

    const $botonCalcular = document.querySelector('#boton-calcular');

    $botonCalcular.className = "btn btn-dark";


} 


function mostrarResultados(){

    const $contenedorResultados = document.querySelector('#contenedor-resultados');

    $contenedorResultados.className = "mb-3";
}

function mostrarTrabajadores(){

    let $contenedorTrabajaores = document.querySelector('#contenedor-trabajadores');

    $contenedorTrabajaores.className= "mb-3";
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
    ocultarResultadosSalarios();


}


$botonResetear.onclick = resetear;


function mostrarBotonAgregar(){

    let $botonAgregar = document.querySelector('#boton-agregar');

    $botonAgregar.className = "btn btn-secondary";


}

function mostrarBotonQuitar(){

    let $botonQuitar = document.querySelector('#boton-quitar');
    
    $botonQuitar.className = "btn btn-secondary";

}


function crearLabelSalario(indice){

    let $indice= indice;

    let $nuevoLabel = document.createElement('label');

    $nuevoLabel.setAttribute('id', 'etiqueta');
    $nuevoLabel.setAttribute('class', 'd-block')

    $nuevoLabel.innerText = 'Ingrese el salario anual del integrante ' + $indice;

    let $inputSalario = document.createElement('input');


    $inputSalario.setAttribute ('type' , 'number');
    $inputSalario.setAttribute('class' , 'salario border border-dark mt-1');
    $inputSalario.setAttribute('min' , '0');

    $nuevoLabel.appendChild($inputSalario);


    return $nuevoLabel;
    


}

function redireccionar (){


    return window.location.href = "https://argentinaprograma.com/";
 }

 function mostrarBotonCalcularSalario(){

    let $botonCalcularSalario = document.querySelector('#calcular-salario');;
    
    $botonCalcularSalario.className = "btn btn-secondary";

 }

 $botonSiguienteDos.onclick = function(event){

    let $respuestaUsuario = document.querySelector('#respuesta').value;
    let $botonAgregar = document.querySelector('#boton-agregar');
    let $botonQuitar = document.querySelector('#boton-quitar');
    let $botonCalcularSalario = document.querySelector('#calcular-salario');
    
    let $padre = document.querySelector('#contenedor-trabajadores');

    

    if ($respuestaUsuario.toLowerCase() === 'si'){

        console.log('La respuesta fue SI');

        mostrarBotonAgregar();
        mostrarBotonQuitar();
        mostrarBotonCalcularSalario();
        // indice para los salarios quiero que sea,  Ingrese salario integrante N° + indice
        let indiceSalarioIntegrante = 0 ;

        $botonAgregar.onclick = function(){


            indiceSalarioIntegrante ++;
            

            //crearLabelSalario();

            $padre.appendChild(crearLabelSalario(indiceSalarioIntegrante));

            

        }

        


        $botonQuitar.onclick = function(){

            let $nuevoLabel = document.querySelector('#etiqueta');

            indiceSalarioIntegrante = 0;

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
            $salarioMensualPromedio.textContent = 'El salario mensual promedio es ' + calcularSalarioMensualPromedio(salariosAnuales);


        }
    } else if($respuestaUsuario.toLowerCase() === 'no'){

        alert('Quizás te interese aprender a programar ! . Presiona Aceptar y serás redireccionado a la página')

        

        setTimeout( redireccionar , 3000);



        
    }









     event.preventDefault();
}


function ocultarResultadosSalarios(){



    let $resultadosSalarios = document.querySelector('#resultado-salarios');

    $resultadosSalarios.className = "oculto";



}

function validarCantidadDeIntegrantes(integrantes){


    let $indiceIntegrantes = integrantes;

    let contieneSoloNumeros = /^[0-9]\s+$/i.test($indiceIntegrantes);

   
     if ($indiceIntegrantes === "0"){

        console.log("Este campo no puede estar vacio");
    }

   

    else if($indiceIntegrantes > 30){



        console.log("El valor máximo de este campo es 30");

        

    }

    else if( !contieneSoloNumeros){

        console.log("Este campo solo puede tener números");
    }

    




}

function validarEdadesIntegrantes(edades){

    let $edades = edades;


    for (i=0 ; i<$edades.length ; i++){

        if ($edades[i] < 0){

            console.log("No puede haber edad negativa");

        }

        else if ($edades[i] >= 122 ){

            console.log("La persona más longeva del mundo tiene 122 años, verifica podrías ser un nuevo record mundial ");
        }
   
     }

     return "";
}






   

