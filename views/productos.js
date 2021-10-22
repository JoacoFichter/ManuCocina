//declaración de objetos e incorporación de los mismos a Array "listaProductos"
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

const listaProductos = [];
const gallesChoco = new producto("Galletitas de chocolate", 150, 10);
const gallesCrackers = new producto("Galletitas Crackers", 120, 8);
const gallesAvena = new producto("Galletitas de avena", 120, 10);
const gallesLimon = new producto("Galletitas de limón", 140, 50);
const budinVainilla = new producto("Budín de vainilla", 300, 5);
const budinChoco = new producto("Budín de chocolate", 350, 9);
const budinLimon = new producto("Budín de limón", 280, 7);
const budinMarmolado = new producto("Budín marmolado", 300, 5);
const bizcochuelo = new producto("Bizcochuelo", 500, 10);
const marquise = new producto("Marquise de chocolate", 700, 4);
const pastafrola = new producto("Pastafrola", 550, 2);
const tortaVainilla = new producto("Torta de Vainilla", 460, 8);

//incorporación de objetos al array "listaProductos"

listaProductos.push (gallesChoco, gallesCrackers, gallesAvena, gallesLimon, budinChoco, budinLimon, budinMarmolado, budinVainilla, bizcochuelo, marquise, pastafrola, tortaVainilla);

//código para ordenar los productos de menor a mayor precio

let ordenadosPorPrecio = [];
ordenadosPorPrecio = listaProductos;
ordenadosPorPrecio.sort(function (a,b) {
    return a.precio - b.precio;
});
console.log(ordenadosPorPrecio)

//declaración de funciones

function calcularIva(valorProducto) {
    let precioFinal = valorProducto * 0.21 + valorProducto;
    alert('El precio final con IVA incluido es de:' + ' $' + precioFinal);
}
function comprar() {
    let valorProducto = parseInt(prompt('ingrese el valor del producto que desea comprar'));
    calcularIva(valorProducto);
}

/*declaración de función que sirve para ver qué productos podría comprar el cliente según el dinero que tenga disponible*/

function seleccionarProductos(dineroDisponible = parseInt(prompt("Cuánto dinero tiene disponible?"))) { 
    console.log(dineroDisponible);
    const productosAccesibles = listaProductos.filter(producto => producto.precio <= dineroDisponible);
    for (const producto of productosAccesibles) {
        alert(`usted puede comprar los siguientes productos: ${producto.nombre}`);
    }
}

seleccionarProductos();

