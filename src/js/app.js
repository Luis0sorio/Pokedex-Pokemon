let pokemitos = Array.from(pokemon); //copia del objeto original(para modificarla y eso)
localStorage.setItem("pokemitos", JSON.stringify(pokemitos)); //lo subimos

let main = document.querySelector("main");
main.setAttribute("id", "main");
//creo elcontenedor
let contenedor = document.createElement("div");
contenedor.className = "contenedor";

function CreacionCartas(main, contenedor) {
  let pk = JSON.parse(localStorage.getItem("pokemitos"));
  //recorro el objeto
  for (let key in pk) {
    //la info que necesitamos
    let id = pk[key].id;
    let nombre = pk[key].nombre;
    let tipo = pk[key].tipos;
    let id2 = id;

    //imagen y su div
    let div_img = document.createElement("div");
    div_img.className = "imagenes";

    let img = document.createElement("img");
    img.src = "./src/img/pokemon/" + id2 + ".png";
    div_img.appendChild(img);

    //creo un div para meter toda la info
    let div_info = document.createElement("div");
    div_info.id = "info";

    //creo la papelera
    let papelera = document.createElement("div");
    papelera.id = "papelera";
    let button = document.createElement("button");
    button.type = "submit";
    button.textContent = "borrar";
    papelera.appendChild(button);

    //creo el card
    let div = document.createElement("div");
    div.className = "card";
    div.id = id; //se asigna como id, el id del propio pokemon
    div.setAttribute("data-nombre", nombre);

    //se rellenan
    let div_nombre = document.createElement("div");
    div_nombre.setAttribute("id", "nombre");
    div_nombre.textContent = nombre;
    let div_numero = document.createElement("div");
    div_numero.setAttribute("id", "numero");
    div_numero.textContent = id;
    let div_tipo = document.createElement("div");
    div_tipo.setAttribute("id", "tipo");
    div_tipo.textContent = tipo;

    //añado la info  al div_info
    div_info.appendChild(div_numero);
    div_info.appendChild(div_nombre);
    div_info.appendChild(div_tipo);

    //añado al div-carta el div de la info y tmb la papelera
    div.appendChild(div_img);
    div.appendChild(div_info);
    div.appendChild(papelera);

    //añado al contenedor de cartas las cartas
    contenedor.appendChild(div);
  }
  //añado todo al main
  main.appendChild(contenedor);
}
CreacionCartas(main, contenedor);
let p = document.getElementById("papelera");
function b() {
  p.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}

//Botones para filtrar
const nav = document.getElementsByTagName("nav");

//*************************************************** */
// CREAMOS LOS BOTONES DE TIPOS
function crearBotonesTipos() {
  let nav = document.querySelector("nav");
  let divTipos = document.createElement("div");

  let h2 = document.createElement("h2");
  h2.textContent = "FILTRAR POR TIPOS: ";

  divTipos.classList.add("container-tipos");
  h2.classList.add("h2-tipos");

  nav.appendChild(divTipos);
  divTipos.appendChild(h2);

  let setTipos = new Set();
  for (let i = 0; i < pokemitos.length; i++) {
    let tipos = pokemitos[i].tipos;
    for (let j = 0; j < tipos.length; j++) {
      setTipos.add(tipos[j]);
    }
  }

  let arrayTipos = Array.from(setTipos).sort();
  //boton de 'todos'
  let todos = document.createElement("button");
  todos.textContent = "TODOS";
  todos.setAttribute("id", "todos");
  todos.classList.add("btn-tipo");
  todos.addEventListener("click", function () {
    mostrarTodos(); 
  });
  divTipos.appendChild(todos);

  for (let i = 0; i < arrayTipos.length; i++) {
    let tipos = arrayTipos[i];

    let botonTipos = document.createElement("button");
    botonTipos.textContent = tipos.toUpperCase();
    let id_nombre = tipos.toLowerCase();
    botonTipos.setAttribute("id", id_nombre);
    botonTipos.classList.add("btn-tipo");
    botonTipos.addEventListener("click", function () {
      filtrarTipos(tipos);
    });
    divTipos.appendChild(botonTipos);
  }
}
crearBotonesTipos();

//filtra por tipo de pokemon
function filtrarTipos(tipo) {
  const cartas = contenedor.getElementsByClassName("card");
  for (const carta of cartas) {
    const tipoPoke = carta.querySelector("#tipo").textContent.toLowerCase();
    if (tipoPoke.includes(tipo.toLowerCase())) {
      carta.style.display = "";
    } else {
      carta.style.display = "none";
    }
  }
}
// filtra y muestra todos los pokemon
function mostrarTodos() {
  const cartas = contenedor.getElementsByClassName("card");
  for (const carta of cartas) {
    carta.style.display = ""; 
  }
}

//****** CREAMOS LOS BOTONES DE HABITAT ******
// no pinta nada todavía
function crearBotonesHabitat() {
  let nav = document.querySelector("nav");
  let divHabitats = document.createElement("div");

  let h2 = document.createElement("h2");
  h2.textContent = "FILTRAR POR HÁBITAT: ";

  divHabitats.classList.add("container-tipos");
  h2.classList.add("h2-tipos");

  nav.appendChild(divHabitats);
  divHabitats.appendChild(h2);

  let setHabitat = new Set();
  for (let i = 0; i < pokemitos.length; i++) {
    let habitat = pokemitos[i].habitat;
    for (let j = 0; j < habitat.length; j++) {
      setHabitat.add(habitat[j]);
    }
  }

  let arrayHabitats = Array.from(setHabitat).sort();
  //boton de 'todos'
  let todos = document.createElement("button");
  todos.textContent = "TODOS";
  todos.setAttribute("id", "todos-habitat");
  todos.classList.add("btn-tipo");
  todos.addEventListener("click", function () {
    mostrarTodos(); 
  });
  divHabitats.appendChild(todos);

  for (let i = 0; i < arrayHabitats.length; i++) {
    let habitat = arrayHabitats[i];

    let botonHabitat = document.createElement("button");
    botonHabitat.textContent = habitat.toUpperCase();
    let id_nombre = habitat.toLowerCase().replace(/\s+/g, "-");
    botonHabitat.setAttribute("id", id_nombre);
    botonHabitat.classList.add("btn-habitat");
    botonHabitat.addEventListener("click", function () {
      filtrarHabitats(habitat);
    });
    divHabitats.appendChild(botonHabitat);
  }
}
crearBotonesHabitat();

//filtro infuncional
function filtrarHabitats(habitat) { // <- no recibe el habitat porque no está presente
  const cartas = contenedor.getElementsByClassName("card");
  for (const carta of cartas) {
    const habitatPoke = carta.getAttribute(""); // <- aquí va la referencia en la carta
    if (habitatPoke === habitatFiltro) {
      carta.style.display = "";
    } else {
      carta.style.display = "none";
    }
  }
}

// Creo el contenedor div donde se pondra todo lo de busqueda
const containerbuscador = document.createElement("div");
containerbuscador.setAttribute("class", "buscador-container");

// creo el contenedor del div de input
const containersearch = document.createElement("div");
containersearch.setAttribute("class", "search-container");

// busco el header y le añado una id header
const header = document.querySelector("header");
header.setAttribute("id", "header");

// creo el input donde se ingresaran los nombre de los pokemitos
const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("id", "searchInput");
searchInput.setAttribute("placeholder", "Buscar Pokémon por nombre");

// Creo el botón de búsqueda
const searchButton = document.createElement("button");
searchButton.setAttribute("type", "button");
searchButton.setAttribute("id", "searchButton");

// Creo la img y le añado los atributos que contienen la imagen y la clase
const lupaIcon = document.createElement("img");
lupaIcon.setAttribute("src", "./src/img/icons/lupa.png");
lupaIcon.setAttribute("class", "lupa-icon");

// hago que sea hijo de del boton
searchButton.appendChild(lupaIcon);

// Añado el input y el botón al contenedor
containersearch.appendChild(searchInput);
containersearch.appendChild(searchButton);

// Añado el container-search al buscador-container
containerbuscador.appendChild(containersearch);

// hago containerbuscador donde se contiene todo como hijo del header
header.appendChild(containerbuscador);

function buscarPokemon(searchInput) {
  const pokemonBusqueda = searchInput.value.toLowerCase();

  const cartas = contenedor.getElementsByClassName("card");

  for (const carta of cartas) {
    const nombrePok = carta.getAttribute("data-nombre").toLowerCase();
    if (nombrePok === pokemonBusqueda || nombrePok.includes(pokemonBusqueda)) {
      carta.style.display = "";
    } else {
      carta.style.display = "none";
    }
  }
}

// Evento para escribir y buscar
searchInput.addEventListener("input", function () {
  buscarPokemon(searchInput);
});

// Evento de clic en el botón para realizar la búsqueda
searchButton.addEventListener("click", function () {
  buscarPokemon(searchInput);
});

// Evento para detectar la tecla Enter
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    buscarPokemon(searchInput);
  }
});
