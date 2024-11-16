    let body= document.body;//hago el 
    //div para el formulario
    let divFormulario=document.createElement('div');

    //titulo 
    let titulo=document.createElement('h1');
    titulo.textContent="Escribe los datos para añadir el POKEMON";

    //creamos el formulario 
    let form=document.createElement('form');

    //creamos los campos pra los datos
    //nombre-pokemon
    let inputNombre= document.createElement('input');
    inputNombre.type="text";
    inputNombre.id="nombre";
    inputNombre.name="nombre";
    inputNombre.required=true;//campo obligatorio

    //tipo-pokemon
    let inputTipo= document.createElement('input');
    inputTipo.type="text";
    inputTipo.id="tipo";
    inputTipo.name="tipo";
    inputTipo.required=true;//campo obligatorio

    //boton enviar
    let button=document.createElement('input');
    button.type="submit";
    button.textContent="Enviar";

    //espacio
    //let br1=document.createElement('br');
    let br2=document.createElement('br');
    
    //texto-nombres
    let nombre=document.createElement('p');
    nombre.textContent="Nombre: "

    let tipo=document.createElement('p');
    tipo.textContent="Tipo: "

    //aqui añadimos las cosas
    //añadimos el campo nombre
    form.appendChild(nombre);
    form.appendChild(inputNombre);
    
    //campo tipo
    form.appendChild(tipo);
    form.appendChild(inputTipo);
    form.appendChild(br2);

    //boton de enviar
    form.appendChild(button);
    //añadimos el formulario al div donde va tdo
    divFormulario.appendChild(form);
    //añadimos el titulo y el div al body 
    body.appendChild(titulo);
    body.appendChild(divFormulario);

    //hasta aqui -->creacion de formulario

    //gestion de los datos, al enviar el formulario
        function aniadirP() {
            //bajo los pokemons
            let pokemons=JSON.parse(localStorage.getItem('pokemitos'));
            form.addEventListener("submit",function(event) { 
                //guardo los valores k 
                let nombrePokemon=inputNombre.value;
                let tipoPokemon=inputTipo.value;
                //al largo del array le sumamos 1 
                let idd=pokemons.length+1;
                //creo un objeto cn los datos
                let nuevo={
                    id:idd,
                    nombre:nombrePokemon,
                    tipos:tipoPokemon
                }
                //lo añado al array
                pokemons.push(nuevo);
                //lo subo 
                localStorage.setItem('pokemitos',JSON.stringify(pokemons));
                //limpio los valores 
                inputNombre.value="";
                inputTipo.value="";
            });
        }
    aniadirP();