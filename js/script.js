let botonGenero = document.querySelectorAll(".menu ul li");
let titulo = document.querySelector(".libros h2");

botonGenero.forEach(button => {
    button.addEventListener("click", () => {
        titulo.textContent = button.getAttribute("data-genre");
    });
});


let botonRentar = document.querySelectorAll(".libro button");

botonRentar.forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = "No Disponible";
        button.style.backgroundColor = "#990000";
        button.style.color = "#fff675";
        button.disabled = true;
    });
});

document.getElementById("login").addEventListener("click", () => {
    alert("Inicio de sesión exitoso");
});

// Funcion extra

let tituloPagina = document.querySelector('header h1');
tituloPagina.addEventListener("click", () => {
    location.reload();
});

// El proposito de esta ultima funcion es poder recargar la pagina mediante un click al titulo de la pagina que se encuentra en el header