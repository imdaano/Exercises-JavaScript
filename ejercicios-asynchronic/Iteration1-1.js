
// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

 fetch ("https://api.agify.io?name=michael")
 .then ((data) => data.json ())                   /* llegan los datos y los nombramos x */
 .then ((data) => console.log(data));             /* aquí enviamos los datos a imprimir */


