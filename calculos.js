function calcularMayorEdad (edades){


    let $valoresEdad = document.querySelectorAll('.nuevo-integrante');
  
    let mayorEdad = Number( $valoresEdad[0].value);
  
    let $mayorEdad = document.querySelector('#mayor');
  
    for (i = 0 ; i <$valoresEdad.length ; i++){
  
      
  
      if (mayorEdad < Number( $valoresEdad[i].value)){
  
        mayorEdad = Number( $valoresEdad[i].value)
      }
  
  
    }
     
    return   $mayorEdad. textContent = 'La mayor edad es ' + mayorEdad;
  
    
  
   
  
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
  

  
  