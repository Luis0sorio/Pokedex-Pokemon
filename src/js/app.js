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


//busco la id del header en index.html   
const header = document.getElementById('header');

//creo el form en el html 
const form = document.createElement('form');
//pone en el form la id con un nombre search 
form.setAttribute("id", "search");

//creo un input donde se pondra la busqueada de los pokemons 
const searchInput = document.createElement('input');
searchInput.setAttribute("type","text");
searchInput.setAttribute("id","searchInput");
searchInput.setAttribute("placeholder","Buscar Pokemon por nombre ");

//creo el boton de busqueda 
const searchButton = document.createElement('button');
searchButton.setAttribute("type","button");
searchButton.setAttribute("id","searchButton");
searchButton.textContent = 'Buscar Pokemon';

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


function buscarPokemon (){
    const pokemonBusqueda = searchInput.value.toLowerCase();
    
    // //limpieza de busqueda : 
    // resultContainer.innerHTML = '';

    const cartas = contenedor.getElementsByClassName('card');

    for (const carta of cartas) {
    const nombrePok = carta.getAttribute('data-nombre').toLowerCase();
    if (pokemonBusqueda === 0)
        carta.style.display='none';
    if (nombrePok === pokemonBusqueda || nombrePok.startsWith(pokemonBusqueda) 
        || nombrePok.endsWith(pokemonBusqueda)
        ||nombrePok.includes(pokemonBusqueda)) {
       carta.style.display = '';
        }else {
        carta.style.display = 'none';
        }
    }

}

//prueba
searchInput.addEventListener('input', buscarPokemon);
