/**
 * CONSTANTES DEL DOCUMENTO HTML
 */
const header = document.getElementsByTagName("header")[0];
const nav = document.getElementsByTagName("nav")[0];
const main = document.getElementsByTagName("main")[0];
const aside = document.getElementsByTagName("aside")[0];
const footer = document.getElementsByTagName("footer")[0];

let pokemons = Array.from(pokemon); //copia del objeto original(para modificarla y eso)
localStorage.setItem("pokemons", JSON.stringify(pokemons)); //lo subimos

//creo elcontenedor
let contenedor = document.createElement("div");
contenedor.className = "contenedor";

function CreacionCartas(main, contenedor) {
  let pk = JSON.parse(localStorage.getItem("pokemons"));
  //recorro el objeto
  for (let key in pk) {
    //la info que necesitamos
    let id = pk[key].id;
    let nombre = pk[key].nombre;
    let tipo = pk[key].tipos;

    //imagen y su div
    let div_img = document.createElement("div");
    div_img.className = "imagenes";

    let img = document.createElement("img");
    img.src = "../Pokedex-Pokemon/src/img/pokemon/" + id + ".png";
    div_img.appendChild(img);

    //creo un div para meter toda la info
    let div_info = document.createElement("div");
    div_info.id = "info";

    //creo la papelera
    let papelera = document.createElement("div");
    papelera.id = "papelera";

    //creo el card
    let div = document.createElement("div");
    div.className = "card";
    div.id = id; //se asigna como id, el id del propio pokemon
    div.setAttribute("data-nombre", nombre);
    //se rellenan
    let p1 = document.createElement("p");
    p1.textContent = nombre;
    let p2 = document.createElement("p");
    p2.textContent = id;
    let p3 = document.createElement("p");
    p3.textContent = tipo;

    //añado la info  al div_info
    div_info.appendChild(p2);
    div_info.appendChild(p1);
    div_info.appendChild(p3);

    //añado al div-carta el div de la info y tmb la papelera
    div.appendChild(div_img);
    div.appendChild(div_info);
    //div.appendChild(papelera);

    //añado al contenedor de cartas las cartas
    contenedor.appendChild(div);
  }
  //añado todo al main
  main.appendChild(contenedor);
}
CreacionCartas(main, contenedor);

//creo el form en el html
const form = document.createElement("form");
//pone en el form la id con un nombre search
form.setAttribute("id", "search");

//creo un input donde se pondra la busqueada de los pokemon
const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("id", "searchInput");
searchInput.setAttribute("placeholder", "Buscar Pokemon por nombre ");

//creo el boton de busqueda
const searchButton = document.createElement("button");
searchButton.setAttribute("type", "button");
searchButton.setAttribute("id", "searchButton");
searchButton.textContent = "Buscar Pokemon";

//añado los input en el form
form.appendChild(searchInput);
form.appendChild(searchButton);

//añado el formulario al header
header.appendChild(form);

// //prueba impresion :
// const resultContainer = document.createElement('div');
// resultContainer.setAttribute("id", "resultContainer");
// header.appendChild(resultContainer);
// //

/**
 *
 */
// function buscarPokemon (){
//     const pokemonBusqueda = searchInput.value.toLowerCase();

//     //limpieza de busqueda :
//     resultContainer.innerHTML = '';

//     for (const i in pokemon) {
//     const nombrePok = pokemon[i].nombre.toLowerCase();
//     if (nombrePok.includes(pokemonBusqueda)) {

//         //prueba
//        console.log(nombrePok);

//             // Crear un elemento para mostrar el resultado en la página
//             const resultItem = document.createElement('p');
//             resultItem.textContent = pokemon[i].nombre;
//             resultContainer.appendChild(resultItem);
//     }
//     }
// }

// //prueba
// searchButton.addEventListener('click', buscarPokemon);

/**
 * BOTONES DE FILTRO: TIPO Y HABITAT
 */

/**
 * Función que crea botones usando el DOM según el tipo de cada pokemon
 */
function crearBotonesTipos() {
  //seleccionamos el <nav>
  let nav = document.querySelector("nav");
  //creamos un contenedor y un titulo para identificar a los botones en el documento
  let divTipos = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.textContent = "FILTRAR POR TIPOS: ";

  //les asignamos una clase a cada uno
  divTipos.classList.add("container-tipos");
  h2.classList.add("h2-tipos");

  //los incluimos como nodos hijos en el <nav>
  nav.appendChild(divTipos);
  divTipos.appendChild(h2);

  //creamos un Set para guardar los tipos sin repetirlos
  let setTipos = new Set();
  //iteramos sobre los pokemon y asignamos a una variable el tipo
  for (let i = 0; i < pokemon.length; i++) {
    let tipos = pokemon[i].tipos;
    for (let j = 0; j < tipos.length; j++) {
      //iteramos sobre el tipo y lo guardamos en el Set
      setTipos.add(tipos[j]);
    }
  }

  //transformamos el Set en un array para poder ordenarlos
  let arrayTipos = Array.from(setTipos).sort();

  //iteramos sobre el array y guardamos de nuevo el tipo
  for (let i = 0; i < arrayTipos.length; i++) {
    let tipos = arrayTipos[i];

    //creamos los botones, le asignamos un valor y clases en cada vuelta de ciclo
    let botonTipos = document.createElement("button");
    botonTipos.textContent = tipos.toUpperCase();
    botonTipos.classList.add("btn-tipo-" + tipos.toLowerCase());

    //lo incorporamos como nodo hijo del contenedor creado al principio
    divTipos.appendChild(botonTipos);
  }
}
crearBotonesTipos();

function crearBotonesHabitat() {
  //seleccionamos el <nav>>
  let nav = document.querySelector("nav");
  //creamos un contenedor y un titulo para identificar a los botones en el documento
  let divHabitat = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.textContent = "FILTRAR POR HÁBITAT: ";

  //les asignamos una clase a cada uno
  divHabitat.classList.add("container-habitats");
  h2.classList.add("h2-habitats");

  //los incluimos como nodos hijos en el <nav>
  nav.appendChild(divHabitat);
  divHabitat.appendChild(h2);

  //creamos un Set para guardar los habitats sin repetirlos
  let setHabitats = new Set();

  //iteramos sobre los pokemon y asignamos a una variable el habitat
  for (let i = 0; i < pokemon.length; i++) {
    let habitat = pokemon[i].habitat;
    //si existen habitats parecidos, los definimos en uno único
    if (habitat === "Montañas") {
      habitat = "Montaña";
    }
    //añadimos los habitats al Set
    setHabitats.add(habitat);
  }

  //transformamos el Set en un array para poder ordenarlos
  let arrayHabitats = Array.from(setHabitats).sort();

  //iteramos sobre el array y guardamos de nuevo el habitat
  for (let i = 0; i < arrayHabitats.length; i++) {
    let habitat = arrayHabitats[i];
    //creamos el boton para los habitats
    let botonHabitats = document.createElement("button");

    botonHabitats.textContent = habitat.toUpperCase();

    //Hay que formatear la lectura. Si hay espacios lo eliminamos y transformamos para poder guardarlos
    let formateoHabitat = "btn-hab-" + habitat.toLowerCase().replace(/\s+/g, "_"); 
    botonHabitats.classList.add(formateoHabitat);

    //lo incorporamos como nodo hijo del contenedor creado al principio
    divHabitat.appendChild(botonHabitats);
  }
}
crearBotonesHabitat();

function buscarPokemon() {
  const pokemonBusqueda = searchInput.value.toLowerCase();

  // //limpieza de busqueda :
  // resultContainer.innerHTML = '';

  const cartas = contenedor.getElementsByClassName("card");

  for (const carta of cartas) {
    const nombrePok = carta.getAttribute("data-nombre").toLowerCase();
    if (pokemonBusqueda === 0) carta.style.display = "none";
    if (
      nombrePok === pokemonBusqueda ||
      nombrePok.startsWith(pokemonBusqueda) ||
      nombrePok.endsWith(pokemonBusqueda) ||
      nombrePok.includes(pokemonBusqueda)
    ) {
      carta.style.display = "";
    } else {
      carta.style.display = "none";
    }
  }
}

//prueba
searchInput.addEventListener("input", buscarPokemon);
//modificar..

//hacer boton de añadir q te lleve al formulario de aniadir_pok
