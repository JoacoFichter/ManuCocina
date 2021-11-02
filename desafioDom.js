// DESAFIO DOM

let nombreUsuario = prompt("Cuál es tu nombre?");
let titulosIndex = document.getElementById("titulosIndex");
let presentacion = document.createElement("div");
presentacion.innerHTML = `<h2 style="display: flex; justify-content: center;">Hola ${nombreUsuario}!</h3>`;
titulosIndex.appendChild(presentacion); 
