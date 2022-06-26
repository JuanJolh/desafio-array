// Tienda de Consolas de Videojuegos

function Bienvenida(){
    alert("Bienvenido a GamerZone");
    nombre = prompt("Ingrese su nombre");
    alert("Bienvenido " + nombre);
}

function comprar(){
    for (let consola of consolas){
        let respuesta = prompt("Desea comprar la Consola:" + "\nNombre: " + consola.nombre + "\nPrecio: " + consola.precio + " USD" + "\nCapacidad: " + consola.capacidad + " GB" + "\nIngrese:Si o NO ").toUpperCase();
        switch(respuesta) {
            case "SI":
                consolas_seleccionadas.push(consola);
                break;
            default:
                break;
        }
    }
}
function total(){
    for (let consola of consolas_seleccionadas){
        total_precio += consola.precio;
    }
    alert("El total a pagar es: $" + total_precio + " USD" + "\nGracias por su Compra " + nombre);
}
let nombre = "";
let total_precio = 0;

Bienvenida()
comprar();
total();