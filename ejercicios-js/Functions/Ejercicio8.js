// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:


const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(repiteNumber) {
    let counter = {};
    for (let i = 0; i < repiteNumber.length; i++) {
      if (repiteNumber[i] in counter) {
        counter[repiteNumber[i]]++;
      } else {
        counter[repiteNumber[i]] = 1;
      }
    }
    return console.log(counter);
  }

  repeatCounter(counterWords);