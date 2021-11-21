$("#botonContacto").click( () => {
    if (($("#nombreContacto")[0].value == "") || ($("#apellidoContacto")[0].value == "") || ($("#mensajeContacto")[0].value == "")) {
        $(".mensajeEnviado").hide();
        $(".mensajeError").show();
    }else{ 
        let infoEnvio = {   
                nombre:$("#nombreContacto")[0].value, 
                apellido:$("#apellidoContacto")[0].value,
                mensaje:$("#mensajeContacto")[0].value
        };
        let urlContacto = "https://jsonplaceholder.typicode.com/posts";
        $.post(urlContacto, infoEnvio, (respuesta, estado) => {
                    if (estado === "success") {
                        $(".mensajeEnviado").show();
                    };            
                },
            );
        $(".mensajeError").hide();
    }    
})
