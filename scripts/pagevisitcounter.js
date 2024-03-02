// Inicializamos valor de la variable con el contenido de la etiqueta html .nvisitas
const visitsDisplay = document.querySelector(".nvisitas");

// Extraemos el valor guardado en la variable del localstorage, si no hay valor (0) es primera visita
// la variable numVisitas es el contador
let numVisitas = Number(window.localStorage.getItem("numVisitasList")) || 0;

// Condicionamos valores
if (numVisitas !== 0) {
	visitsDisplay.textContent = numVisitas;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// Incrementamos el valor del contador
numVisitas++;

// Guardamos el nuevo valor de la visita
localStorage.setItem("numVisitasList", numVisitas);
