function calcularMayorEdad (edades){


    let $edades = document.querySelectorAll('integrante'); 
  
    let mayorEdad = Number( $edades[0].value);
  
    let $mayorEdad = document.querySelector('#mayor');
  
    for (i = 0 ; i <$edades.length ; i++){
  
      
  
      if (mayorEdad < Number( $edades[i].value)){
  
        mayorEdad = Number( $valoresEdad[i].value);
      }
  
  
    }
     
    return   mayorEdad;
  
    
  
   
  
  }


function calcularMenorEdad (edades){


    let $valoresEdad = document.querySelectorAll('.nuevo-integrante');
  
    let menorEdad = Number( $valoresEdad[0].value);
  
    let $menorEdad = document.querySelector('#menor');
  
    for (i = 0 ; i <$valoresEdad.length ; i++){
  
      
  
      if (menorEdad > Number( $valoresEdad[i].value)){
  
        menorEdad = Number( $valoresEdad[i].value)
      }
  
  
    }
     
    return   $menorEdad. textContent = 'La menor edad es ' + menorEdad;
  
  
  
  }
  

  
function calcularPromedioEdad(edades){

    let $valoresEdad = document.querySelectorAll('.nuevo-integrante');
  
    let $promedioEdad = document.querySelector('#promedio');
  
    let sumaEdades = 0;
  
    let promedioEdades = 0;
  
  
    for (i = 0 ; i <$valoresEdad.length ; i++){
  
      if($valoresEdad.length > 0){
  
      sumaEdades = sumaEdades + Number( $valoresEdad[i].value)
  
      
      }
      
   
  
      
   //
    }
  
    promedioEdades = sumaEdades/ $valoresEdad.length;
  
    return $promedioEdad.textContent = 'El promedio de edad del grupo familiar es ' + promedioEdades;
  } 

  
  