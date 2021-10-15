function calcularIva(valorProducto) {
    let precioFinal = valorProducto * 0.21 + valorProducto;
    alert('El precio final con IVA incluido es de:' + ' $' + precioFinal);
}
function comprar() {
    let valorProducto = parseInt(prompt('ingrese el valor del producto que desea comprar'));
    calcularIva(valorProducto);
}


