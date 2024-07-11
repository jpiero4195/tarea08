//Author: Jean Valencia
//fecha: 2024-07-09
/*
Diseñe un objeto Javascript (JSON) que defina la informacion de una asignatura que dicta un docente en la PUCESE
Usted de considerar datos personales del docente. La asignatura sería un objeto anidado (dentro del objeto docente se enceuntra
el objeto asignatura - agregue datos pricipales de esa asignatura). Debería considerar los estudiantes matricukadis en esa 
asignatura (otro objeto anidado). Use Lógica y creatividad en este objeto.
*/
var docente = {
    nombre: "Carlos",
    apellido: "Gonzalez",
    edad: 24,
    asignatura: {
        nombre: "Programacion Orientada a Objetos",
        creditos: 4,
        estudiantes: [{
                nombre: "Juan",
                apellido: "Perez",
                edad: 20
            },
            {
                nombre: "Maria",
                apellido: "Gonzalez",
                edad: 21
            }
        ]
    }
};

console.log(docente);