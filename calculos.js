

//Agregar en el main, para mostrar estos resultados

function calcularMayorEdad (edades){


    let $edades = document.querySelectorAll('.integrante'); 
  
    let mayorEdad = Number($edades[0].value);
  
  
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

  
  