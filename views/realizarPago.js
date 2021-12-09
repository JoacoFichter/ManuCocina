$("#btnComprarCarrito").click( () => {
    if (($("#nombreCompletoComprador")[0].value == "") || ($("#emailComprador")[0].value == "") || ($("#numeroTarjetaComprador")[0].value == "")) {
        $("#mensajeCompraRealizada").hide();
        $("#mensajeErrorCompra").show();
    }else{ 
        $(".mensajeError").hide();
        $("#mensajeCompraRealizada").show();
    }    
})