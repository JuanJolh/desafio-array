// Array Consolas
const consolas = [];

// Array Consolas Seleccionadas
const consolas_seleccionadas = [];

class consola{
    constructor(nombre, precio, capacidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.capacidad = capacidad;
        this.descuento = 5;
    }
}

consolas.push(new consola("Xbox Series X", "499", "1000"));
consolas.push(new consola("Xbox Series S", "299", "512"));
consolas.push(new consola("Play Station 5", "499", "825"));
consolas.push(new consola("Ninstendo Switch", "299", "32"));