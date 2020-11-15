

//Agregar en el main, para mostrar estos resultados

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


    let $edades = document.querySelectorAll('integrante');
  
    let menorEdad = Number( $valoresEdad[0].value);
  
    let $menorEdad = document.querySelector('#menor');
  
    for (i = 0 ; i <$edades.length ; i++){
  
      
  
      if (menorEdad > Number( $edades[i].value)){
  
        menorEdad = Number( $edades[i].value)
      }
  
  
    }
     
    return   menorEdad;
  
  
  
  }
  

  
function calcularPromedioEdad(edades){

    let $edades = document.querySelectorAll('integrante');
  
    let $promedioEdad = document.querySelector('#promedio');
  
    let sumaEdades = 0;
  
    let promedioEdades = 0;
  
  
    for (i = 0 ; i <$edades.length ; i++){
  
      if(edades.length > 0){
  
      sumaEdades = sumaEdades + Number( $edades[i].value)
  
      
      }
      
   
  
      
   
    }
  
    promedioEdades = sumaEdades/ $edades.length;
  
    return promedioEdades;
  } 

  
  