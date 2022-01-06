/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $calculateButtton = document.querySelector("#calculate-btn");
const $nextButton = document.querySelector("#next");
const $older = document.querySelector("#older");
const $younger = document.querySelector("#younger");
const $average = document.querySelector("#average");
const $results = document.querySelector("#results");
const $resetButton = document.querySelector("#reset-btn");

$nextButton.onclick = (e) => {
  e.preventDefault();

  erasePreviousInputs();

  const numberOfFamilyMembers = Number(
    document.querySelector("#family-members").value
  );

  createInputs(numberOfFamilyMembers);

  showCalculateButton();

  //Importa el orden sino el nodelist es vacío.
  const $agregateSalaryButtons = document.querySelectorAll(".agregate");
  const $removeSalaryButtons = document.querySelectorAll(".deagregate");

  console.log($agregateSalaryButtons);

  if (numberOfFamilyMembers <= 0) {
    hideCalculateButton();
  }
};

function showCalculateButton() {
  return $calculateButtton.classList.remove("d-none");
}

function hideCalculateButton() {
  return $calculateButtton.classList.add("d-none");
}

function hideResults() {
  $results.classList.add("d-none");
}

$calculateButtton.onclick = () => {
  let ages = document.querySelectorAll(".family-member-age");

  let agesArray = [];

  for (let i = 0; i < ages.length; i++) {
    agesArray.push(Number(ages[i].value));
  }

  $older.textContent = `La mayor edad del grupo es: ${getOlder(agesArray)}`;
  $younger.textContent = `La menor edad del grupo es: ${getYounger(agesArray)}`;
  $average.textContent = `El promedio de edad del grupo familiar es : ${getAverage(
    agesArray
  )}`;
  $results.classList.remove("d-none");
};

$resetButton.onclick = () => {
  erasePreviousInputs();
  hideResults();

  hideCalculateButton();
};

function getOlder(array) {
  let counter = 0;

  array.forEach((element) => {
    if (element > counter) {
      counter = element;
    }
  });

  return counter;
}

function getYounger(array) {
  /* let younger = Math.min(...array)

    return younger */

  let counter = array[0];

  array.forEach((element) => {
    if (element < counter) {
      counter = element;
    }
  });

  return counter;
}

function getAverage(array) {
  let counter = 0;

  array.forEach((element) => {
    counter += element;
  });

  let average = counter / array.length;

  return average;
}

function erasePreviousInputs() {
  let inputs = document.querySelectorAll(".family-member-age");
  let labels = document.querySelectorAll(".family-member");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].remove();
    labels[i].remove();
  }
}

function createInputs(number) {
  for (let i = 0; i < number; i++) {
    const $calculateAgesForm = document.querySelector("#calculate-ages");

    let newInput = document.createElement("input");
    let newLabel = document.createElement("label");

    newLabel.setAttribute("for", `${i}`);

    newLabel.setAttribute("class", `family-member`);

    newLabel.textContent = `Por favor ingrese la edad del miembro N° ${i + 1}`;

    newInput.setAttribute("type", "number");
    newInput.setAttribute("id", `${i}`);
    newInput.setAttribute("class", "family-member-age");
    newInput.setAttribute("min", "0");

    $calculateAgesForm.appendChild(newLabel);
    $calculateAgesForm.appendChild(newInput);
  }
}

