let pokemitos = Array.from(pokemon); //copia del objeto original(para modificarla y eso)
let objetoPokemons = localStorage.getItem("pokemitos");
if (objetoPokemons == null) {
  localStorage.setItem("pokemitos", JSON.stringify(pokemitos));
}

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
    // let id2 = id;

    //formateamos la salida de los id de los pokemon para una mejor presentación.
    let idFormateado;
    if (id < 10) {
      idFormateado = `#00${id}`;
    } else if (id < 100) {
      idFormateado = `#0${id}`;
    } else {
      idFormateado = `#${id}`;
    }

    //imagen del pokemon y su contenedor
    let div_img = document.createElement("div");
    div_img.className = "imagenes";

    let img = document.createElement("img");
    img.src = "./src/img/pokemon/" + id + ".png";
    div_img.appendChild(img);

    //creo un div para meter toda la info
    let div_info = document.createElement("div");
    div_info.id = "info";

    //////////
    // div para guardar la imagen de los tipos
    let div_tipo = document.createElement("div");
    div_tipo.setAttribute("class", "tipo"); // definimos su clase
    for (let i = 0; i < tipo.length; i++) { //iteramos sobre los tipos
      let tipoPoke = tipo[i]; //guardamos los tipos
      let imgTipo = document.createElement("img"); //creamos etiquetas <img>
      imgTipo.src = "./src/img/botones/" + tipoPoke.toLowerCase() + ".png"; // establecemos la ruta para que las reciba
      imgTipo.alt = tipoPoke.toLowerCase(); // uso del atributo 'alt' para usarlo en el filtrado
      imgTipo.classList.add("tipo-img"); // definimos una clase para cada una 
      div_tipo.appendChild(imgTipo); // establecemos el nodo padre
    }
    //////////

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
    div_numero.textContent = idFormateado;
    // let div_tipo = document.createElement("div");
    // div_tipo.setAttribute("class", "tipo");
    // div_tipo.textContent = tipo;

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

    //boton para ocultar la carta seleccionada
    button.addEventListener("click",function(){
      div.style.display = "none"; 
    })
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

// CREAMOS LOS BOTONES DE TIPOS
const nav = document.getElementsByTagName("nav");
function crearBotonesTipos() {
  // seleccionamos la tqiueta donde se alojaran los botones.
  // al mismo tiempo creamos tambien un contenedor.
  let nav = document.querySelector("nav");
  let divTipos = document.createElement("div");

  //asignamos clases para cada uno de ellos.
  let h2 = document.createElement("h2");
  h2.textContent = "";

  divTipos.classList.add("container-tipos");
  h2.classList.add("h2-tipos");
  divTipos.classList.add("container-tipos");
  h2.classList.add("h2-tipos");

  //establecemos los nodos padres de la misma manera.
  nav.appendChild(divTipos);
  divTipos.appendChild(h2);

  //creamos una estructura Set para almacenar los tipos sin repetidos
  // de esta forma adeguramos que no hay errores al guardarlos.
  let setTipos = new Set();
  //iteramos sobre el objeto pokemon y creamos una variable 'tipos' donde guardamos el tipo correspondiente
  for (let i = 0; i < pokemitos.length; i++) {
    //iteramos sobre el Set y guardamos el tipo en una nueva variable.
    let tipos = pokemitos[i].tipos;
    for (let j = 0; j < tipos.length; j++) {
      setTipos.add(tipos[j]);
    }
  }

  //para poder ordenar lso tiposy mantener el ordem, convertimos el Set a array
  let arrayTipos = Array.from(setTipos).sort();
  //creamos un boton 'TODOS' cuya funcion será filtrar y mostrar todas las cartas.
  let todos = document.createElement("button");
  todos.textContent = "_____________"; // este es el botón 'TODOS', editado para una mejor visualización con CSS
  todos.setAttribute("id", "todos");
  todos.classList.add("btn-tipo");
  todos.addEventListener("click", function () {
    mostrarTodos(); // evento que muestra todas las cartas
  });
  divTipos.appendChild(todos); // le asignamos su nodo padre.

  //iteramos sobre el array y guardamos de nuevo los tipos en una nueva variable
  for (let i = 0; i < arrayTipos.length; i++) {
    let tipos = arrayTipos[i];
    //en cada vuelta, por cada tipo, creamos un boton y le asignamos un id y una clase.
    let botonTipos = document.createElement("button");
    botonTipos.textContent = tipos.toUpperCase();
    let id_nombre = tipos.toLowerCase();
    botonTipos.setAttribute("id", id_nombre);
    botonTipos.classList.add("btn-tipo");
    botonTipos.addEventListener("click", function () {
      filtrarTipos(tipos); // llamamos a la funcion que maneja el evento de filtro por tipo.
    });
    divTipos.appendChild(botonTipos);
  }
}
crearBotonesTipos();

/**
 * Funcion que maneja el evento de raton que filtra por tipo
 * @param {String} tipo
 */
/*
  function filtrarTipos(tipo) {
    //creamos una constante 'cartas' que alberga cada carta referenciada por la clase.
    const cartas = contenedor.getElementsByClassName("card");
    //iteramos sobre las cartas y una variable 'tipoPoke' guarda el contenido del atributo 'tipo' alojado en su contenedor. 
    for (const carta of cartas) {
      const tipoPoke = carta.getElementsByClassName("tipo")[0].textContent.toLowerCase();
      //si el tipo corresponde con el 'tipo' guardado, se ocultan las cartas no coincidentes.
      if (tipoPoke.includes(tipo.toLowerCase())) {
        carta.style.display = "";
      } else {
        carta.style.display = "none";
      }
    }
  }*/
function filtrarTipos(tipo) {
  //creamos una constante 'cartas' que alberga cada carta referenciada por la clase.
  const cartas = contenedor.getElementsByClassName("card");
  //iteramos sobre las cartas y una variable 'pngTipos' guarda las imagenes en su contenedor. 
  for (const carta of cartas) {
    const pngTipos = carta.getElementsByClassName("tipo-img");
    let coinciden = false; // booleano para establecer la coincidencia

    // si alguna imagen coincide con el tipo filtrado se torna verdadero
    for (const img of pngTipos) {
      if (img.alt === tipo.toLowerCase()) { //filtra sobre el texto alternativo de cada imagen
        coinciden = true;
      }
    }
    // si es verdadero, coinciden, se muestran. Las que no, se ocultan.
    if (coinciden) {
      carta.style.display = "";
    } else {
      carta.style.display = "none";
    }
  }
}

// funcion que filtra y muestra todas las cartas de nuevo.
function mostrarTodos() {
  const cartas = contenedor.getElementsByClassName("card");
  for (const carta of cartas) {
    carta.style.display = "";
  }
}

function crearHeader() {
  // busco el header y le añado una id header

  const header = document.querySelector("header");
  header.setAttribute("id", "header");

  //titulo pokemon
  const tituloPoke = document.createElement("h1");
  tituloPoke.textContent = "POKÉDEX KANTO";

  //titulo buscador
  //titulo buscador

  const tituloSearch = document.createElement("label");
  tituloSearch.setAttribute("for", "searchInput");
  tituloSearch.textContent = "BUSCAR POKÉMON";

  // Creo el contenedor div donde se pondra todo lo de busqueda
  const containerbuscador = document.createElement("div");
  containerbuscador.setAttribute("class", "buscador-container");

  // creo el contenedor del div de input
  const containersearch = document.createElement("div");
  containersearch.setAttribute("class", "search-container");

  //boton de añadir pokemons
  let divBtonAniadir = document.createElement("div"); //div para el boton
  divBtonAniadir.id = "div-bton";
  let addInput = document.createElement("input"); //boton
  addInput.type = "submit";
  addInput.name = "botonAniadir";
  addInput.value = "Añadir Pokemon";
  divBtonAniadir.appendChild(addInput);

  // creo el input donde se ingresaran los nombre de los pokemons
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
  containersearch.appendChild(divBtonAniadir); //añado el div q contiene el boton al contenedor

  // Añado el container-search al buscador-container
  containerbuscador.appendChild(containersearch);

  //titulo pokemon
  header.appendChild(tituloPoke);
  //titulo busqueda
  header.appendChild(tituloSearch);
  // hago containerbuscador donde se contiene todo como hijo del header
  header.appendChild(containerbuscador);

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
  //evento del boton para añdir un pokemon
  addInput.addEventListener("click", function () {
    window.open("src/js/formularioP.html", "_blank"); //se abre otra pagina cn el fomrulario
  });
}

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

function crearFooter() {
  //Boton de Volver Arriba

  //footer id
  const footer = document.querySelector("footer");
  footer.setAttribute("id", "footer");

  //contenedor div de boton
  const divArriba = document.createElement("div");
  divArriba.setAttribute("class", "go-top");

  //crear boton
  const botonArriba = document.createElement("button");
  botonArriba.setAttribute("type", "button");
  botonArriba.setAttribute("id", "arriba");

  //crear span
  const spanArriba = document.createElement("span");
  //creacion de id span por si hay que editar algo
  spanArriba.setAttribute("id", "spanArriba");
  //contenido span
  spanArriba.textContent = "Volver arriba";

  //separacion del main con footer

  const hr = document.createElement("hr");

  //icono git
  const gitIcon = document.createElement("img");
  gitIcon.setAttribute("src", "./src/img/icons/logotipo-de-github.png");
  gitIcon.setAttribute("id", "gitIcon");

  botonArriba.appendChild(spanArriba); // span dentro del boton
  divArriba.appendChild(botonArriba); // el boton dentro del div
  footer.appendChild(hr); //hr dentro del footer
  hr.appendChild(gitIcon);
  footer.appendChild(divArriba); //el div dentro del footer

  //evento que nos redirige arriba de la pagina
  botonArriba.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
    });
  });
  // EVENTOS FILTRO DE TIPO Y HABITAT
  gitIcon.addEventListener("click", function () {
    window.location.href = "https://github.com/Luis0sorio/Pokedex-Pokemon";
  });
}

crearHeader();
crearFooter();

