let botonGenero = document.querySelectorAll(".menu ul li");
let titulo = document.querySelector(".libros h2");

//de acuerdo a lo que hacia "forEach" que era recorrer los elementos, el raciocinio a aplicar fue, ¿De que otra manera, que se haya visto en clases, puedo recorrer mis elementos? y se me ocurrio el uso de bucles, lo que a nivel de entendimiento se hace mucho mas sencillo, en este caso el bucle "for" fue el que escogi para no tener que declarar mas variables "por fuera" y que queden dentro de la declaracion del bucle. Entonces cual es la idea al usar un bucle For, recorrer los elementos de botonGenero usando un indice "i" y al mismo tiempo este indice es asignado como "identificador" para cada elemento y de acuerdo a lo que se declara dentro de la funcion flecha, cuando a cualquiera de estos elemento se le haga un click se vera modificado el texto "Todos los libros" ubicado en ".libros h2", por ejemplo si se hace un click en "Autoayuda" este ya esta identificado como botonGenero[3], entonces titulo.innerText cambia por botonGenero[3].innerText

for (let i = 0; i < botonGenero.length; i++) {
    botonGenero[i].addEventListener("click", () => {
        titulo.innerText = botonGenero[i].innerText;
    });
}

let botonRentar = document.querySelectorAll(".libro button");

//La logica que se aplico en este caso obedece a la misma explicada anteriormente, cambiando el uso de un "forEach" por un bucle "for"

for (let i = 0; i < botonRentar.length; i++) {
    botonRentar[i].addEventListener("click", () => {
        botonRentar[i].innerText = "No Disponible";
        botonRentar[i].style.backgroundColor = "#990000";
        botonRentar[i].style.color = "#fff675";
        botonRentar[i].disabled = true;
    });
}

document.getElementById("login").addEventListener("click", () => {
    alert("Inicio de sesión exitoso");
});

// Funcion extra

let tituloPagina = document.querySelector('header h1');
tituloPagina.addEventListener("click", () => {
    location.reload();
});

// El proposito de esta ultima funcion es poder recargar la pagina mediante un click al titulo de la pagina que se encuentra en el header