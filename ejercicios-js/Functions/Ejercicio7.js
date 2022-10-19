// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:


const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
 

  function finderName(names, element) {
    for (let i = 0; i < names.length; i++) {     /*--------------  Esto sirve para revisar toda la lista de elementos -------------------- */
        if (names[i] === element) {               /* -------Condicional: Las posiciones [i] de names son exactamente iguales a los elementos------------- */
            return console.log(i + 1, true);
        }  
    }
    return console.log(false);
  }
  finderName(nameFinder, 'Marc');