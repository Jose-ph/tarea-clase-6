

//Agregar en el main, para mostrar estos resultados

function calcularMayorEdad (edades){


    let $edades = document.querySelectorAll('.integrante'); 
  
    let mayorEdad = Number($edades[0].value);
  
    //let $mayorEdad = document.querySelector('#mayor'); Esto debe ser usado en otro lugar
  
    for (i = 0 ; i <$edades.length ; i++){
  
      let edadComparar = Number( $edades[i].value);
  
      if (mayorEdad < edadComparar ){
  
        mayorEdad = edadComparar;
      }
  
  
    }
     
    return   mayorEdad;
  
    
  
   
  
  }


function calcularMenorEdad (edades){


    let $edades = document.querySelectorAll('.integrante');
  
    let menorEdad = Number( $edades[0].value);
  
   // let $menorEdad = document.querySelector('#menor');
  
    for (i = 0 ; i <$edades.length ; i++){
  
      let edadComparar = Number( $edades[i].value);
  
      if (menorEdad > edadComparar){
  
        menorEdad = edadComparar;
      }
  
  
    }
     
    return   menorEdad;
  
  
  
  }
  

  
function calcularPromedioEdad(edades){

    let $edades = document.querySelectorAll('.integrante');

    
  
    //let $promedioEdad = document.querySelector('#promedio');
  
    let sumaEdades = 0;
  
    let promedioEdades = 0;
  
  
    for (i = 0 ; i <$edades.length ; i++){

      let edadComparar = Number($edades[i].value);
  
      if($edades.length > 0){
  
      sumaEdades = sumaEdades + edadComparar;
  
      
      }
      
   
  
      
   
    }
  
    promedioEdades = sumaEdades/ $edades.length;
  
    return promedioEdades;
  } 

  
  