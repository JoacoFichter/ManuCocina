//declaración de objetos, incorporación de los mismos a Array "listaProductos" y guardado en el localStorage:

class producto {
    constructor(nombre, precio, cantidadEnStock, nombreIMG) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
        this.nombreIMG = nombreIMG;
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
const gallesChoco = new producto("Galletitas de chocolate", 150, 10, "gallesChoco");
const gallesCrackers = new producto("Galletitas Crackers", 120, 8, "gallesCrackers");
const gallesAvena = new producto("Galletitas de avena", 120, 10, "gallesAvena");
const gallesLimon = new producto("Galletitas de limón", 140, 50, "gallesLimon");
const budinVainilla = new producto("Budín de vainilla", 300, 5, "budinVainilla");
const budinChoco = new producto("Budín de chocolate", 350, 9, "budinChoco");
const budinLimon = new producto("Budín de limón", 280, 7, "budinLimon");
const budinMarmolado = new producto("Budín marmolado", 300, 5, "budinMarmolado");
const bizcochuelo = new producto("Bizcochuelo", 500, 10, "bizcochuelo");
const marquise = new producto("Marquise de chocolate", 700, 4, "marquise");
const pastafrola = new producto("Pastafrola", 550, 2, "pastafrola");
const tortaVainilla = new producto("Torta de Vainilla", 460, 8, "tortaVainilla");

listaProductos.push (gallesChoco, gallesCrackers, gallesAvena, gallesLimon, budinChoco, budinLimon, budinMarmolado, budinVainilla, bizcochuelo, marquise, pastafrola, tortaVainilla);

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
guardarLocal("listaProductos", JSON.stringify(listaProductos));
let datosAlmacenados = JSON.parse(localStorage.getItem("listaProductos"));
console.log(datosAlmacenados);

//generación de cards a través del uso del DOM:

for (let producto of datosAlmacenados) {
    let flexCards = document.getElementById("flexCards");
    let crearCard = document.createElement("div");
    crearCard.innerHTML = `<div id="${producto.nombre}" class="card" style="height: 350px; width: 18rem; margin: 40px;">
                                <img src="../assets/img/${producto.nombreIMG}.jpg" class="card-img-top" alt="${producto.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p>$${producto.precio}</p>
                                    <a href="#" class="btn btn-primary">Añadir al carrito</a>
                                </div>
                                <div id="cantidadEnCarrito"></div>
                            </div>`
    flexCards.appendChild(crearCard);
}

//variables y funciones para el Filtrado:  (DESAFIO "EVENTOS")

let productosFiltrados = listaProductos;
let boton = document.getElementById("btnFiltrar");
boton.addEventListener("click", filtrarDatos);
let textoAFiltrar = document.getElementById("textoAFiltrar");
let divCards = document.getElementById("flexCards");
let padre = document.getElementById("flexCardsPadre");

const limpiarHTML = () =>{
    padre.removeChild(divCards);
    divCards = document.createElement("div");
    let a = document.createAttribute("id");
    a.value = "flexCards";
    divCards.setAttributeNode(a);
    let b = document.createAttribute("class");
    b.value = "colFlex colFlex--alignCenter colFlex--justifyCenter flexWrap flexSpcAround";
    divCards.setAttributeNode(b);
    padre.appendChild(divCards);
}

const mostrarProductos = () => {
    for (const producto of productosFiltrados){
        let crearCard = document.createElement("div");
    crearCard.innerHTML = `<div id="${producto.nombre}" class="card" style="height: 350px; width: 18rem; margin: 40px;">
                                <img src="../assets/img/${producto.nombreIMG}.jpg" class="card-img-top" alt="${producto.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p>$${producto.precio}</p>
                                    <a href="#" class="btn btn-primary">Añadir al carrito</a>
                                </div>
                                <div id="cantidadEnCarrito"></div>
                            </div>`
    flexCards.appendChild(crearCard);
    }
}

function filtrarDatos(){
    productosFiltrados = listaProductos.filter(elemento => (elemento.nombre).toUpperCase().includes((textoAFiltrar.value).toUpperCase()));
    limpiarHTML();
    mostrarProductos();
}





























































// DESAFIOS COMPLETADOS 


//código para ordenar los productos de menor a mayor precio

let ordenadosPorPrecio = [];
ordenadosPorPrecio = listaProductos;
ordenadosPorPrecio.sort(function (a,b) {
    return a.precio - b.precio;
});
//console.log(ordenadosPorPrecio)

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
/*
seleccionarProductos();
*/
