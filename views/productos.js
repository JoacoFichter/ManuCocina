function calcularIva(valorProducto) {
    let precioFinal = valorProducto * 0.21 + valorProducto;
    alert('El precio final con IVA incluido es de:' + ' $' + precioFinal);
}
function comprar() {
    let valorProducto = parseInt(prompt('ingrese el valor del producto que desea comprar'));
    calcularIva(valorProducto);
}

class producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }
    mostrarPrecio() {
        alert("El precio del producto es de $" + this.precio + " por unidad");
    }
    disponibilidad(cantidadAComprar = prompt("Cuántos " + this.nombre + " desea comprar?")) {
        if (cantidadAComprar <= this.cantidadEnStock) {
            alert("El producto está disponible");
            this.mostrarPrecio();
            alert("el precio total es de $" + (parseInt(cantidadAComprar) * this.precio));
        }else {
            alert("El producto no está disponible");
        }
    }
}

const gallesChoco = new producto("Galletitas de chocolate", 150, 10);
const gallesCrackers = new producto("Galletitas Crackers", 120, 8);

