/* let premioNescafe = 1000;
let diaria = 1.5;

duracionDia = premioNescafe / diaria;
console.log("Me van a durar " + duracionDia + " días.");

let meses = 30;
duracionMeses = duracionDia / meses;
console.log("Me van a durar " + duracionMeses + " meses.");

let años = 12;
duracionAños = duracionMeses / años;
console.log("Me van a durar " + duracionAños + " años."); */




                                /* BUCLES */



/* 1.- Bucle que empiece en 30, reste de dos en dos, por lo tanto vamos a tener solo números pares y que el límite sea -10;*/
for (let i = 30; i >= -10; i = i - 2){
   console.log(i);  
}

/* 2.- Bucle que empiece en 100 y que vaya dividiendo de dos en dos, hasta que esté por debajo de 10;*/
for (let i = 100; i >= 10; i = i / 2) {
    console.log(i);
}

/* 3.- Bucle que empiece en 40, que vaya multiplicando *2 y que llegue hasta 1000;*/
for (let i = 40; i <= 1000; i = i * 2) {
    console.log(i);
}

/* 4.- Hacer una pirámide de asteriscos*/
let piramide ="";

for (let i = 0; i<= 10; i++) {

    for (let a = 0; a <=i; a++) {

        piramide += "*"
    }

    piramide += '\n';
}

console.log(piramide);


/* 
let piramide = "";
let limite = 6;

for (let i=0; i<limite; i++) {

    for (let i = 0 ; h<= limite - 1 / 2; h++) {
        piramide += " ";
    }

    for (let j=0; j<i; j++) {
        piramide += "*"
    }

} */