// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(repeatedTimes) {
  let sum = 0;
  for (let i = 0; i < repeatedTimes.length; i++) {
    if (typeof repeatedTimes[i] === "string") {
      sum += repeatedTimes[i].length;
    }
  }
  return console.log(sum / repeatedTimes.length);
}

averageWord(mixedElements);