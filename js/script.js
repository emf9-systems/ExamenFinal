
    
function botonGenero(genero) {
    let titulo = document.querySelector(".libros h2");    
    titulo.innerText = genero.innerText;
}

function botonRentar(boton){
    boton.innerText = "No Disponible";
    boton.style.backgroundColor = "#990000";
    boton.style.color = "#fff675";
    boton.disabled = true;
}

function alertaSesion(){
    alert("Inicio de sesión exitoso");
}

// Funcion extra

function recarga() {
    location.reload();
}

// El proposito de esta ultima funcion es poder recargar la pagina mediante un click al titulo de la pagina que se encuentra en el header