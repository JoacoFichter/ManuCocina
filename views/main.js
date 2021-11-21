//declaración de objetos, incorporación de los mismos a Array "listaProductos":

class producto {
    constructor(nombre, precio, cantidadEnStock, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
        this.id = id;
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
const gallesChoco = new producto("Galletitas de chocolate", 120, 10, "gallesChoco");
const gallesCrackers = new producto("Galletitas Crackers", 130, 8, "gallesCrackers");
const gallesAvena = new producto("Galletitas de avena", 140, 10, "gallesAvena");
const gallesLimon = new producto("Galletitas de limón", 145, 50, "gallesLimon");
const budinVainilla = new producto("Budín de vainilla", 280, 5, "budinVainilla");
const budinChoco = new producto("Budín de chocolate", 290, 9, "budinChoco");
const budinLimon = new producto("Budín de limón", 300, 7, "budinLimon");
const budinMarmolado = new producto("Budín marmolado", 350, 5, "budinMarmolado");
const bizcochuelo = new producto("Bizcochuelo", 400, 10, "bizcochuelo");
const marquise = new producto("Marquise de chocolate", 450, 4, "marquise");
const pastafrola = new producto("Pastafrola", 500, 2, "pastafrola");
const tortaVainilla = new producto("Torta de Vainilla", 550, 8, "tortaVainilla");

listaProductos.push (gallesChoco, gallesCrackers, gallesAvena, gallesLimon, budinVainilla, budinChoco, budinLimon, budinMarmolado, bizcochuelo, marquise, pastafrola, tortaVainilla);

//guardado del array en el localStorage:

let guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
guardarLocal("listaProductos", JSON.stringify(listaProductos));

let datosAlmacenados = JSON.parse(localStorage.getItem("listaProductos"));

//generación de cards a través de la manipulación del DOM:

let crearCards = (lista) => {
    for (let producto of lista) {
        $("#flexCards").append(
                        `<div id="${producto.id}" class="card cardBorder" style="height: 350px; width: 18rem; margin: 40px;">
                            <img src="../assets/img/${producto.id}.jpg" class="card-img-top imgTienda" alt="${producto.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p>$${producto.precio}</p>
                                <button id="${producto.id}Btn" class="btn btn-primary">Añadir al carrito</button>
                            </div>
                            <div id="cantidadEnCarrito"></div>
                        </div>`
        );
        //Genero evento para agregar productos al array donde irán los productos del carrito:
        $(`#${producto.id}Btn`).click( () => {
            listaCarrito.push(producto);
            console.log(listaCarrito);
            $("#bodyTablaCarrito").append(`
                            <tr>
                                <th scope="row"></th>
                                <td class="parrafoRosa">${producto.nombre}</td>
                                <td class="parrafoRosa">${producto.precio}</td>
                                <td>
                                    <input type="number" id="cantidad${producto.id}Carrito" value="1">
                                </td>
                            </tr>
            `);
        })
    }
}

crearCards(datosAlmacenados);

//variables y funciones para el Filtrado:  (DESAFIO "EVENTOS")

const limpiarHTML = () =>{
    $("#flexCards").remove();
    $("#flexCardsPadre").prepend(`<div id="flexCards" class="colFlex colFlex--alignCenter colFlex--justifyCenter flexWrap flexSpcAround"></div>`);
}

let filtrarDatos = () => {
    productosFiltrados = listaProductos.filter(elemento => (elemento.nombre).toUpperCase().includes((($("#textoAFiltrar")[0]).value).toUpperCase()));
    limpiarHTML();
    crearCards(productosFiltrados);
}

$("#btnFiltrar").click(filtrarDatos);

// -------------------- CARRITO --------------------

$("#abrirCarrito").click( () => { 
    $("#contenedorCarrito").slideDown();
});
$("#cerrarCarrito").click( () => { 
    $("#contenedorCarrito").slideUp(); 
});

// Creación de array para almacenar productos que van al carrito:
const listaCarrito = []
































































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
