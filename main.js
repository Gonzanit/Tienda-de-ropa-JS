class Ropa {
    constructor(tipo, color, precio, stock){
        this.tipo = tipo;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }

    // Método para obtener el stock de un talle específico
    obtenerStock(talle) {
        return this.stock[talle] || 0;
    }
}

const prendas = [
    new Ropa("Remera", "Negro", 1499, { S: 6, M: 8, L: 10 }),
    new Ropa("Remera", "Blanco", 1999, { S: 1, M: 0, L: 2 }),
    new Ropa("Remera", "Gris", 999, { S: 0, M: 5, L: 6 }),
    new Ropa("Buzo", "Negro", 2499, { S: 6, M: 8, L: 10 }),
    new Ropa("Buzo", "Blanco", 2999, { S: 1, M: 0, L: 2 }),
    new Ropa("Buzo", "Gris", 2699, { S: 0, M: 5, L: 6 }),
    new Ropa("Canguro", "Negro", 2499, { S: 6, M: 8, L: 10 }),
    new Ropa("Canguro", "Blanco", 2999, { S: 1, M: 0, L: 2 }),
    new Ropa("Canguro", "Gris", 2799, { S: 0, M: 5, L: 6 })
];

function opcionesColor(){
    console.log("Opciones de colores:");
    console.log("1- Negro");
    console.log("2- Blanco");
    console.log("3- Gris");
    console.log("4- No tengo preferencias");
}

function opcionesTipo(){
    console.log("¿Qué tipo de prenda estás buscando?:");
    console.log("1- Remera");
    console.log("2- Buzo");
    console.log("3- Canguro");
}

function opcionesTalle(){
    console.log("¿Qué talle estás buscando?:");
    console.log("1- S (Chico)");
    console.log("2- M (Mediano)");
    console.log("3- L (Grande)");
}

alert("¡Bienvenidos a nuestra tienda online!");

const preferenciaUsuario = {tipo: "", color: "", talle: ""};

function seleccionarOpcion(opciones, mensaje) {
    let seleccion = "";
    while (!opciones.includes(seleccion)) {
        seleccion = prompt(mensaje).toLowerCase();
        if (!opciones.includes(seleccion)) {
            alert("Has ingresado una opción inválida");
        }
    }
    return seleccion;
}

opcionesTipo();
preferenciaUsuario.tipo = seleccionarOpcion(["remera", "buzo", "canguro"], "Elija el tipo de prenda que buscas: Remera, Buzo o Canguro");
opcionesColor();
let colorSeleccionado = seleccionarOpcion(["negro", "blanco", "gris", "no tengo preferencias"], "Elija el color que buscas: Negro, Blanco, Gris o No tengo preferencias");
preferenciaUsuario.color = (colorSeleccionado === "no tengo preferencias") ? "" : colorSeleccionado.charAt(0).toUpperCase() + colorSeleccionado.slice(1);
opcionesTalle();
preferenciaUsuario.talle = seleccionarOpcion(["s", "m", "l"], "Elija el talle que buscas: S, M o L").toUpperCase();

const prendaSeleccionada = prendas.find(prenda =>
    prenda.tipo.toLowerCase() === preferenciaUsuario.tipo &&
    (preferenciaUsuario.color === "" || prenda.color.toLowerCase() === preferenciaUsuario.color.toLowerCase()) &&
    prenda.obtenerStock(preferenciaUsuario.talle) > 0
);

if (prendaSeleccionada) {
    alert(`Has seleccionado: ${prendaSeleccionada.tipo} de color ${prendaSeleccionada.color}, talle ${preferenciaUsuario.talle}. Precio: $${prendaSeleccionada.precio}`);
} else {
    alert("No se encontró una prenda que coincida con tus preferencias.");
}
