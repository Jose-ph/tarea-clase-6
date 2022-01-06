/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $addSalaryButton = document.querySelector("#btn-add-salary");
const $removeSalaryButton = document.querySelector("#btn-remove-salary");

const $calculateSalariesButton = document.querySelector("#calculate-salaries");
const $results = document.querySelector("#resultados");

$addSalaryButton.onclick = function (e) {
  createInput();
};

$removeSalaryButton.onclick = function () {
  erasePreviousInputs();

  hideResults();
};

$calculateSalariesButton.onclick = function () {
  const $annualSalaries = document.querySelectorAll(".family-member-salary");

  let annualSalaries = [];

  for (let i = 0; i < $annualSalaries.length; i++) {
    annualSalaries.push(Number($annualSalaries[i].value));
  }

  console.log(annualSalaries);

  if (annualSalaries.length === 0) {
    alert("Agrega salarios para calcular");
  } else {
    showSalaries("mayor", calculatehigherSalary(annualSalaries));
    showSalaries("menor", calculateLowerSalary(annualSalaries));
    showSalaries("promedio", calculateAverageAnnualSalary(annualSalaries));

    /*eliminar salarios anteriores */

    document.querySelector(
      ".promedio-salario-mensual"
    ).textContent += `${calculateAverageMonthlySalary(annualSalaries)}`;

    $results.className = "";
  }
};

function calculateAverageMonthlySalary(salaries) {
  let counter = 0;

  for (let i = 0; i < salaries.length; i++) {
    counter += salaries[i];
  }

  let totalMonthlySalary = counter / 12;

  let averageMonthlySalary = totalMonthlySalary / salaries.length;

  return averageMonthlySalary;
}

function hideResults() {
  $results.className = "results d-none";
}

function calculatehigherSalary(salaries) {
  let higherSalary = 0;

  for (let i = 0; i < salaries.length; i++) {
    if (salaries[i] > higherSalary) {
      higherSalary = salaries[i];
    }
  }

  return higherSalary;
}

function calculateLowerSalary(salaries) {
  let lowerSalary = salaries[0];

  for (let i = 0; i < salaries.length; i++) {
    if (salaries[i] < lowerSalary) {
      lowerSalary = salaries[i];
    }
  }

  return lowerSalary;
}

function calculateAverageAnnualSalary(salaries) {
  let counter = 0;

  for (let i = 0; i < salaries.length; i++) {
    counter += salaries[i];
  }

  let averageAnnualSalary = counter / salaries.length;

  return averageAnnualSalary;
}

function createInput() {
  const $calculateAgesForm = document.querySelector("#calculate-salary-form");

  let newInput = document.createElement("input");
  let newLabel = document.createElement("label");

  newLabel.setAttribute("class", `family-member`);

  newLabel.textContent = `Por favor ingrese el salario anual: `;

  newInput.setAttribute("type", "number");

  newInput.setAttribute("class", "family-member-salary");
  newInput.setAttribute("min", "0");

  $calculateAgesForm.appendChild(newLabel);
  $calculateAgesForm.appendChild(newInput);
}

function erasePreviousInputs() {
  let inputs = document.querySelectorAll(".family-member-salary");
  let labels = document.querySelectorAll(".family-member");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].remove();
    labels[i].remove();
  }
}

function showSalaries(type, value) {
  document.querySelector(`.${type}-salario-anual`).textContent += " " + value;
}
