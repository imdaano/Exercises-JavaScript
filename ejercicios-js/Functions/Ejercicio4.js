// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(totalNumbers) {
  let sum = 0
  for (let i = 0; i < totalNumbers.length; i++) {
    sum += totalNumbers[i] ;
    }
    return console.log(sum / totalNumbers.length);
}
average (numbers);
