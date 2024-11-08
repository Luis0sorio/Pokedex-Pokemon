    let main = document.getElementById('main');
    //creo elcontenedor
    let contenedor= document.createElement('div');
    contenedor.className='contenedor';

    function creacion_cartas(main,contenedor) {
        //recorro el objeto
        for (let key in pokemon) {
            //la info que necesitamos
            let id=pokemon[key].id;
            let nombre=pokemon[key].nombre;
            let tipo=pokemon[key].tipos;

            //creo un div para meter toda la info
            let div_info=document.createElement('div');
            div_info.id='info';

            //creo la papelera
            let papelera=document.createElement('div');
            papelera.id='papelera';

            //creo el card
            let div= document.createElement('div');
            div.className='card';
            div.id = id;//se asigna como id, el id del propio pokemon
            div.setAttribute('data-nombre',nombre);
            //se rellenan
            let p1= document.createElement('p');
            p1.textContent=nombre;
            let p2= document.createElement('p');
            p2.textContent=id;
            let p3= document.createElement('p');
            p3.textContent=tipo;

            //añado la info  al div_info 
            div_info.appendChild(p1);
            div_info.appendChild(p2);
            div_info.appendChild(p3);

            //añado al div-carta el div de la info y tmb la papelera
            div.appendChild(div_info);
            div.appendChild(papelera);
            
            //añado al contenedor de cartas las cartas 
            contenedor.appendChild(div);
        }
        //añado todo al main
        main.appendChild(contenedor); 
    }
    creacion_cartas(main,contenedor);




// Creo el contenedor div donde se pondra todo lo de busqueda 
const containerbuscador = document.createElement("div");
containerbuscador.setAttribute("class", "buscador-container");

// creo el contenedor del div de input 
const containersearch = document.createElement("div");
containersearch.setAttribute("class", "search-container");

// busco el header y le añado una id header 
const header = document.querySelector("header");
header.setAttribute("id", "header");

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

// Añado el container-search al buscador-container
containerbuscador.appendChild(containersearch);

// hago containerbuscador donde se contiene todo como hijo del header 
header.appendChild(containerbuscador);


function buscarPokemon(searchInput) {
    const pokemonBusqueda = searchInput.value.toLowerCase();


    const cartas = contenedor.getElementsByClassName('card');

    for (const carta of cartas) {
        const nombrePok = carta.getAttribute('data-nombre').toLowerCase();
        if (nombrePok === pokemonBusqueda || nombrePok.includes(pokemonBusqueda)) {
            carta.style.display = '';
        } else {
            carta.style.display = 'none';
        }
    }
}

// Evento para escribir y buscar 
searchInput.addEventListener('input', function() {
    buscarPokemon(searchInput);
});

// Evento de clic en el botón para realizar la búsqueda
searchButton.addEventListener('click', function() {
    buscarPokemon(searchInput);
});

// Evento para detectar la tecla Enter 
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        buscarPokemon(searchInput);
    }
});


