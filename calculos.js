


function calcularMayorEdad (edades){


    let $edades = edades; 
  
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


    let $edades = edades;
  
    let menorEdad = Number($edades[0].value);
  
   
  
    for (i = 0 ; i <$edades.length ; i++){
  
      let edadComparar = Number( $edades[i].value);
  
      if (menorEdad > edadComparar){
  
        menorEdad = edadComparar;
      }
  
  
    }
     
    return   menorEdad;
  
  
  
  }
  

  
function calcularPromedioEdad(edades){

    let $edades = edades;
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

  
  function calcularMayorSalarioAnual(salarios){
    

    let $salarios = salarios; 
  
    let mayorSalarioAnual = Number($salarios[0].value);
  
  
    for (i = 0 ; i <$salarios.length ; i++){
  
      let salarioAComparar= Number( $salarios[i].value);
  
      if (mayorSalarioAnual< salarioAComparar ){
  
        mayorSalarioAnual= salarioAComparar;
      }
  
  
    }
     
    return   mayorSalarioAnual;
  


  }

  function calcularMenorSalarioAnual(salarios){

    let $salarios = salarios;
    let menorSalarioAnual = Number($salarios[0].value);

    for (i = 0 ; i <$salarios.length ; i++){
  
      let salarioAComparar= Number( $salarios[i].value);
  
      if (menorSalarioAnual > salarioAComparar ){
  
        menorSalarioAnual= salarioAComparar;
      }
  
  
    }
     
    return   menorSalarioAnual;
  


    
  }