const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

//escuchador de eventos, escucha cada vez que pasa cierto evento
//btn.addEventListener('click', btnOnClick);
// En JavaScript, las funciones son tratadas como "ciudadanos de primera clase". Esto significa que pueden ser asignadas a variables, pasadas como argumentos a otras funciones, y devueltas como valores desde otras funciones.Cuando escribes btn.addEventListener('click', btnOnClick), estás pasando la referencia de la función btnOnClick al método addEventListener. No estás llamando a la función en ese momento, sino diciendo a addEventListener: "Hey, aquí tienes la función btnOnClick. Úsala como el manejador del evento 'click'." Cuando pones paréntesis después del nombre de una función (como btnOnClick()), estás llamando a esa función y ella se ejecuta inmediatamente.

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}