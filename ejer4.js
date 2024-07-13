//Author: Jean Valencia
//fecha: 2024-07-09
/*
Declare un array de 10 elementos numéricos. El noveno debe ser una función flecha (=>) que 
recibe un entero que indica la cantidad de veces que se imprime una palabra cualquier definida 
dentro de esta función(use el bucle while).
*/

//Tarea: diferencias entre let y var

//let: se puede reasignar, pero no se puede redeclarar
//var: se puede redeclarar, pero no se puede reasignar

let array = [1, 2, 3, 4, 5, 6, 7, 8,
    (veces) => {
        let palabra = "mtpd";
        let i = 0;
        while (i < veces) {
            console.log(palabra);
            i++;
        }
    },
    10
];
array[8](8);