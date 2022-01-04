/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $addSalaryButton = document.querySelector('#btn-add-salary');
const $removeSalaryButton = document.querySelector('#btn-remove-salary');



$addSalaryButton.onclick = function(e){

    

    createInput();
   
}

function createInputs(number){

    for(let i = 0 ; i <number ; i++){

        const $calculateAgesForm = document.querySelector("#calculate-salary-form");
      


        let newInput = document.createElement('input');
        let newLabel = document.createElement('label');

        newLabel.setAttribute('for', `${i}`);

        newLabel.setAttribute('class', `family-member`);

        newLabel.textContent = `Por favor ingrese el salario anual -N° ${i+1}`

        newInput.setAttribute('type','number');
        newInput.setAttribute( 'id',`${i}`);
        newInput.setAttribute('class','family-member-salary');
        newInput.setAttribute('min','0');

        $calculateAgesForm.appendChild(newLabel);
        $calculateAgesForm .appendChild(newInput);
        

    }

    

}


function createInput(){

    const $calculateAgesForm = document.querySelector("#calculate-salary-form");
      


    let newInput = document.createElement('input');
    let newLabel = document.createElement('label');

   

    newLabel.setAttribute('class', `family-member`);

    newLabel.textContent = `Por favor ingrese el salario anual -N° `

    newInput.setAttribute('type','number');
    
    newInput.setAttribute('class','family-member-salary');
    newInput.setAttribute('min','0');

    $calculateAgesForm.appendChild(newLabel);
    $calculateAgesForm .appendChild(newInput);
}


function erasePreviousInputs(){

    let inputs = document.querySelectorAll('.family-member-salary');
    let labels = document.querySelectorAll('.family-member');
    
    for(let i = 0 ; i< inputs.length ; i++){

        inputs[i].remove()
        labels[i].remove()
    }
}