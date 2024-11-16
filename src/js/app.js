    let pokemons= Array.from(pokemon);//copia del objeto original(para modificarla y eso)
    localStorage.setItem('pokemons',JSON.stringify(pokemons));//lo subimos
    
    let main = document.getElementById('main');
    //creo elcontenedor
    let contenedor= document.createElement('div');
    contenedor.className='contenedor';

    function CreacionCartas(main,contenedor) {
        let pk=JSON.parse(localStorage.getItem('pokemons'));
        //recorro el objeto
        for (let key in pk) {
            //la info que necesitamos
            let id=pk[key].id;
            let nombre=pk[key].nombre;
            let tipo=pk[key].tipos;

            //imagen y su div
            let div_img=document.createElement('div');
            div_img.className='imagenes';

            let img=document.createElement('img');
            img.src="../Pokedex-Pokemon/src/img/pokemon/"+ id +".png";
            div_img.appendChild(img);

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
    CreacionCartas(main,contenedor);




function crearHeader (){
    // busco el header y le añado una id header 
    const header = document.querySelector("header");
    header.setAttribute("id", "header");

    //titulo pokemon
    const tituloPoke = document.createElement("h1");
    tituloPoke.textContent = "Pokedex Kanto";

    //titulo buscador

    const tituloSearch = document.createElement("label");
    tituloSearch.setAttribute("for","searchInput");
    tituloSearch.textContent = "BUSCAR POKÉMON";

    // Creo el contenedor div donde se pondra todo lo de busqueda 
    const containerbuscador = document.createElement("div");
    containerbuscador.setAttribute("class", "buscador-container");

    // creo el contenedor del div de input 
    const containersearch = document.createElement("div");
    containersearch.setAttribute("class", "search-container");

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



    //titulo pokemon
    header.appendChild(tituloPoke);
    //titulo busqueda
    header.appendChild(tituloSearch);
    // hago containerbuscador donde se contiene todo como hijo del header 
    header.appendChild(containerbuscador);


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
}

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




function crearFooter (){
    //Boton de Volver Arriba 

    //footer id 
    const footer = document.querySelector("footer");
    footer.setAttribute("id", "footer");

    //contenedor div de boton 
    const divArriba = document.createElement("div");
    divArriba.setAttribute("class","go-top");


    //crear boton
    const botonArriba = document.createElement("button");
    botonArriba.setAttribute("type","button");
    botonArriba.setAttribute("id","arriba");

    //crear span 
    const spanArriba = document.createElement("span");
    //creacion de id span por si hay que editar algo
    spanArriba.setAttribute("id","spanArriba");
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
    botonArriba.addEventListener("click" ,function()  {
    window.scrollTo({
        top: 0,
    });
    });

    gitIcon.addEventListener("click", function() {
        window.location.href = 'https://github.com/Luis0sorio/Pokedex-Pokemon';
    })
    }


    crearHeader();
    crearFooter();