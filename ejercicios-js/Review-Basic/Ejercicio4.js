// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y
// devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.
// Haz varios ejemplos y compruebalos.

const bugs = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
   for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element === text) {
        return i;
    }
   }
   return "Elemento no encontrado";
}
console.log(findArrayIndex(bugs, 'Salamandra'));

console.log(findArrayIndex(bugs, 'salamendra'));

console.log(findArrayIndex(bugs, 'selamanda'));
