// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:


let avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function mostLongest(hero) {
    let longestWord = hero [0];
    for (let i = 0; i < hero.length; i++) {
        if (hero[i].length > longestWord.length) {
            longestWord = hero [i];
        }
    }
    return console.log (longestWord);
}
mostLongest (avengers);



