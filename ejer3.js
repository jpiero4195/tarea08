//Author: Jean Valencia
//fecha: 2024-07-09
/*
Diseñe un objeto en JavaScript(JSON) que tenga 4 elementos: Uno de ellos debe ser una función 
flecha (=>)que recibe 2 parámetros. La función retorna el producto de estos parámetros multiplicados por 100
*/
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 200,
    disponible: true,
    informacion: function() {
        return `Información del producto: ${this.nombre} - Precio: ${this.precio} - Disponible: ${this.disponible}`
    },
    descuento: (descuento) => {
        return this.precio * (1 - descuento / 100)
    }
}
console.log(producto.informacion())
console.log(producto.descuento(20))
