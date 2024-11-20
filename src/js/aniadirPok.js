let body = document.body;
let divFormulario = document.createElement("div"); //hago el div para el formulario
divFormulario.setAttribute("id", "divFormulario");

let main = document.querySelector("main");

//acceder al header
const header = document.querySelector("header");
header.setAttribute("id", "header");

//definimos un titulo
let titulo = document.createElement("h1");
titulo.textContent = "Crear Pokémon";

//div del titulo
const divTitulo = document.createElement("div");
divTitulo.setAttribute("id", "divTitulo");

//creamos el formulario
let form = document.createElement("form");
form.method = "GET";
form.action = "";
form.id = "formulario";

//creamos los campos para los datos
//div para el nombre del pokemon
let divInputNombre = document.createElement("div");
divInputNombre.setAttribute("id", "divInputNombre");
let inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.id = "nombre";
inputNombre.name = "nombre";
inputNombre.placeholder = "Nombre del pokémon";
inputNombre.required = true; //campo obligatorio
divInputNombre.appendChild(inputNombre);

//div para el tipo del pokemon
let divInputTipo = document.createElement("div");
divInputTipo.setAttribute("id", "divInputTipo");
let inputTipo = document.createElement("input");
inputTipo.type = "text";
inputTipo.id = "tipo";
inputTipo.name = "tipo";
inputTipo.placeholder = "Tipo del Pokémon";
inputTipo.required = true; //campo obligatorio
divInputTipo.appendChild(inputTipo);

//boton de enviar
let div_bton = document.createElement("div");
div_bton.setAttribute("id", "div_bton");
let button = document.createElement("input");
button.id = "btn_env";
button.type = "submit";
button.value = "Crear Pokémon";
div_bton.appendChild(button);

//texto-nombres
let div_nombre = document.createElement("div");
let nombre = document.createElement("p");
nombre.textContent = "Nombre: ";
div_nombre.appendChild(nombre);

let div_tipo = document.createElement("div");
let tipo = document.createElement("p");
tipo.textContent = "Tipo: ";
div_tipo.appendChild(tipo);

//boton de volver atrás
let atras = document.createElement("input");
atras.type = "button";
atras.id = "BotonAtras";
atras.value = "Volver Atrás";

//evento para volver atrás
atras.addEventListener("click", function (event) {
  window.location.href = "../../index.html";
});

//aqui añadimos las cosas
//añadimos el campo nombre
form.appendChild(div_nombre);
form.appendChild(divInputNombre);

//campo tipo
form.appendChild(div_tipo);
form.appendChild(divInputTipo);

//boton de enviar
form.appendChild(button);
//añadimos el formulario al div donde va tdo
divFormulario.appendChild(form);

//hacemos que el h1 sea hijo del divTitulo
divTitulo.appendChild(titulo);
//hacemos que el divTitulo sea hijo del header
header.appendChild(divTitulo);
// definimos nodos hijos
main.appendChild(divFormulario);
form.appendChild(atras);

//hasta aqui -->creacion de formulario
//funcion que gestiona los datos del formulario (nuevo pokemon)
function aniadirP() {
  //accdemos a los pokemon
  let pokemons = JSON.parse(localStorage.getItem("pokemitos"));
  let datos = location.search; //obtenemos los datos despues del ?
  if (datos) {
    //si hay datos separo, para obtener los valores.
    let datosJuntos = datos.split("&");
    //separamos las posiciones del array de datos, obtenemos el valor
    let nombre = datosJuntos[0].split("=");
    let tipo = datosJuntos[1].split("=");
    // nos quedamos con el valor restante y lo guardamos en una variable nueva
    let nombreFinal = nombre[1];
    let tipoFinal = tipo[1];
    //al largo del array le sumamos 1
    let idPokemon = pokemons.length + 1;
    //creo un objeto con los datos
    let nuevo = {
      id: idPokemon,
      nombre: nombreFinal,
      tipos: [tipoFinal],
      nuevo: true, // identificamos al nuevo pokemon
    };
    //lo añado al array
    pokemons.push(nuevo);
    //lo subo
    localStorage.setItem("pokemitos", JSON.stringify(pokemons));
    inputNombre.value = "";
    inputTipo.value = "";
  }
}
aniadirP();

//accedo al head
const head = document.querySelector("head");

//crear link para los estilos : style.css
const linkStyle = document.createElement("link");
linkStyle.setAttribute("rel", "stylesheet");
linkStyle.setAttribute("href", "../css/style2.css");

//hago que los estilos sea hijo del head
head.appendChild(linkStyle);
