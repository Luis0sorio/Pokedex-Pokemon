let pokemitos = Array.from(pokemon); //copia del objeto original

let objetoPokemons = localStorage.getItem("pokemitos");
if (objetoPokemons === null) {
  localStorage.setItem("pokemitos", JSON.stringify(pokemitos));
}

// acceso al main del documento
let main = document.querySelector("main");
main.setAttribute("id", "main");

//creo el contenedor de las cartas
let contenedor = document.createElement("div");
contenedor.className = "contenedor";

/**
 * funcion que crea las cartas de los pokemon
 * @param {HTMLElement} main 
 * @param {HTMLElement} contenedor 
 */
function CreacionCartas(main, contenedor) {
  //accedemos al objeto de los pokemon
  let pk = JSON.parse(localStorage.getItem("pokemitos"));
  //extraemos los atributos a utilizar
  for (let key in pk) {
    let id = pk[key].id;
    let nombre = pk[key].nombre;
    let tipo = pk[key].tipos;
    let stats = pk[key].estadisticas_base;

    //formateamos la salida de los id de los pokemon para una mejor presentación.
    let idFormateado;
    if (id < 10) {
      idFormateado = `#00${id}`;
    } else if (id < 100) {
      idFormateado = `#0${id}`;
    } else {
      idFormateado = `#${id}`;
    }

    //creación del contendor de la carta
    let carta = document.createElement("div");
    carta.setAttribute("class", "carta");
    carta.id = id; //se asigna como id, el id del propio pokemon
    carta.setAttribute("data-nombre", nombre);

    //contenedor del anverso (carta)
    let anverso = document.createElement("div");
    anverso.setAttribute("class", "anverso"); //clase del contenedor
    //contenedor de la imagen en el anverso
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imagenes"); //clase del div que soporta es sprite
    let img = document.createElement("img");
    img.src = "./src/img/pokemon/" + id + ".png";
    imgDiv.appendChild(img);

    //informacion del pokemon (anverso)
    let infoDiv = document.createElement("div");
    infoDiv.id = "info";
    let div_nombre = document.createElement("div"); //div del nombre
    div_nombre.setAttribute("id", "nombre");
    div_nombre.textContent = nombre;
    let div_numero = document.createElement("div"); //div del numero
    div_numero.setAttribute("id", "numero");
    div_numero.textContent = idFormateado;
    // div para guardar la imagen de los tipos
    let div_tipo = document.createElement("div");//div del tipo
    div_tipo.setAttribute("class", "tipo"); 
    for (let i = 0; i < tipo.length; i++) {
      //iteramos sobre los tipos
      let tipoPoke = tipo[i]; //guardamos los tipos
      let pngTipo = document.createElement("img"); //creamos etiquetas <img>
      pngTipo.src = "./src/img/botones/" + tipoPoke.toLowerCase() + ".png"; // establecemos la ruta para que las reciba
      pngTipo.alt = tipoPoke.toLowerCase(); // uso del atributo 'alt' para usarlo en el filtrado
      pngTipo.classList.add("tipo-img"); // definimos una clase para cada una
      div_tipo.appendChild(pngTipo); // establecemos el nodo padre
    }

    //añado la info  al contenedor  infoDiv
    infoDiv.appendChild(div_numero);
    infoDiv.appendChild(div_nombre);
    infoDiv.appendChild(div_tipo);

    //boton de la papelera (anverso)
    let papelera = document.createElement("div");
    papelera.id = "papelera";
    let button = document.createElement("button");
    button.type = "button";
    // asignamos un icon de font-awesome a la papelera
    let icon = document.createElement("i");
    icon.className = "fas fa-trash";
    button.appendChild(icon);
    button.addEventListener("click", function () {
      carta.style.display = "none"; // Ocultamos la carta al hacer clic en la papelera
    });
    papelera.appendChild(button);

    // contenedor del reverso (carta)
    let reverso = document.createElement("div");
    reverso.setAttribute("class", "reverso");
    // el reverso muestra las estadisticas del pokemon
    let estadisticas = document.createElement("div"); //contenedor stats
    estadisticas.setAttribute("class", "stats"); //clase stats
    //iteramos sobre las estadisticas
    for (let infoStats in stats) {
      let statDiv = document.createElement("div");
      statDiv.setAttribute("class", "stat");
      statDiv.textContent = `${infoStats}: ${stats[infoStats]}`; //formateamos la salida
      estadisticas.appendChild(statDiv);
    }
    reverso.appendChild(estadisticas);

    //definimos los nodos hijos del contenedor del anverso
    anverso.appendChild(imgDiv);
    anverso.appendChild(infoDiv);
    anverso.appendChild(papelera);

    //anverso y reverso como hijos de la carta
    carta.appendChild(anverso);
    carta.appendChild(reverso);

    contenedor.appendChild(carta);

    //evento de click que gira la carta y muestra el reverso
    // si vuelves a hacer click, muestra el anverso
    carta.addEventListener("click", function() { 
      carta.classList.toggle("girar");
    });
  }
  main.appendChild(contenedor);
}
CreacionCartas(main, contenedor);


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
function filtrarTipos(tipo) {
  //creamos una constante 'cartas' que alberga cada carta referenciada por la clase.
  const cartas = contenedor.getElementsByClassName("carta");
  //iteramos sobre las cartas y una variable 'pngTipos' guarda las imagenes en su contenedor.
  for (const carta of cartas) {
    const pngTipos = carta.getElementsByClassName("tipo-img");
    let coincidenTipos = false; // booleano para establecer la coincidencia

    // si alguna imagen coincide con el tipo filtrado se torna verdadero
    for (const img of pngTipos) {
      if (img.alt === tipo.toLowerCase()) {
        //filtra sobre el texto alternativo de cada imagen
        coincidenTipos = true;
      }
    }
    // si es verdadero, coinciden, se muestran. Las que no, se ocultan.
    if (coincidenTipos) {
      carta.style.display = "";
    } else {
      carta.style.display = "none";
    }
  }
}

// funcion que filtra y muestra todas las cartas de nuevo.
function mostrarTodos() {
  const cartas = contenedor.getElementsByClassName("carta");
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
  addInput.type = "button";
  addInput.name = "botonAniadir";
  addInput.value = "Añadir";
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
  const lupaIcon = document.createElement("i");
  lupaIcon.className = "fas fa-search";
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
    window.location.href="src/pages/agregar.html"; //se abre el formulario
  });
}

/**
 * funcion que permite buscar al pokemon y filtrar por coincidencias en su nombre
 * @param {HTMLElement} searchInput 
 */
function buscarPokemon(searchInput) {
  const pokemonBusqueda = searchInput.value.toLowerCase();
  const cartas = contenedor.getElementsByClassName("carta");
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

  //crear imagen de icono
  const imgArriba = document.createElement("img");
  //creacion de id span por si hay que editar algo
  imgArriba.setAttribute("src", "./src/img/icons/flecha-arriba.png");
  imgArriba.setAttribute("class", "flecha-icon");

  botonArriba.appendChild(imgArriba); // span dentro del boton
  divArriba.appendChild(botonArriba); // el boton dentro del div
  footer.appendChild(divArriba); //el div dentro del footer

  //evento que nos redirige arriba de la pagina
  botonArriba.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
    });
  });
}

crearHeader();
crearFooter();


const body = document.getElementsByTagName("body")[0]; //obtenemos el cuerpo del documento
/**
 * funcion para usar el objeto Screen y mostrar la resolución y características de la pantalla
 * @param {HTMLElement} body 
 */
function objetoScreen(body) {
  let divScreen = document.createElement("div"); //creamos una variable contenedora donde guardaremos la informacion 
  divScreen.setAttribute("id", "screen-info"); // definimos sus atributos
  //creamos variables de ancho y alto de pantalla
  let ancho = window.screen.width;
  let alto = window.screen.height;
  // variable 'resolucion' que muestra la informacion formateada
  let resolucion = ancho + " x " + alto;
  divScreen.textContent = `${resolucion}`; // definimos el contenido dentro del 'div'
  body.appendChild(divScreen); // le asignamos como nodo hijo
}
objetoScreen(body); // llamamos a la funcion y muestra la resolución en la ventana

/**
 * funcion para usar definir un enlace al repositorio de GitHub
 * @param {HTMLElement} body 
 */
function enlaceGit(body){
  let divGit = document.createElement("div");
  //contenedor del span y del icono
  divGit.setAttribute("class", "div-git");

  //etiqueta con corta descripcion
  let spanGit = document.createElement("span");
  spanGit.setAttribute("class", "span-git");
  spanGit.textContent = "Repositorio GitHub";

  // icono de GitHub
  let gitIcon = document.createElement("img");
  gitIcon.setAttribute("src", "./src/img/icons/logotipo-de-github.png");
  gitIcon.setAttribute("id", "gitIcon");

  //defino nodos hijos
  divGit.appendChild(spanGit);
  divGit.appendChild(gitIcon);

  body.appendChild(divGit);

  // Evento de enlace GIT
  gitIcon.addEventListener("click", function () {
    window.location.href = "https://github.com/Luis0sorio/Pokedex-Pokemon";
  });
}
enlaceGit(body); //llamo a la funcion