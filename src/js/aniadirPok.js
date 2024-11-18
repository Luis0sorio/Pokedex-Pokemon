    let body= document.body;//hago el 
    //div para el formulario
    let divFormulario=document.createElement('div');

    //titulo 
    let titulo=document.createElement('h1');
    titulo.textContent="Escribe los datos para añadir el POKEMON";

    //creamos el formulario 
    let form=document.createElement('form');
    form.method="GET";
    form.action="";
    form.id="formulario";

    //creamos los campos pra los datos
    //nombre-pokemon
    let divInputNombre=document.createElement('div');
    let inputNombre= document.createElement('input');
    inputNombre.type="text";
    inputNombre.id="nombre";
    inputNombre.name="nombre";
    inputNombre.required=true;//campo obligatorio
    divInputNombre.appendChild(inputNombre);

    //tipo-pokemon
    let divInputTipo=document.createElement('div');
    let inputTipo= document.createElement('input');
    inputTipo.type="text";
    inputTipo.id="tipo";
    inputTipo.name="tipo";
    inputTipo.required=true;//campo obligatorio
    divInputTipo.appendChild(inputTipo);

    //boton enviar
    let div_bton=document.createElement('div');
    let button=document.createElement('input');
    button.type="submit";
    button.value="Enviar";
    div_bton.appendChild(button);

    //let br1=document.createElement('br');
    let br2=document.createElement('br');
    
    //texto-nombres
    let div_nombre=document.createElement('div');
    let nombre=document.createElement('p');
    nombre.textContent="Nombre: ";
    div_nombre.appendChild(nombre);

    let div_tipo=document.createElement('div');
    let tipo=document.createElement('p');
    tipo.textContent="Tipo: ";
    div_tipo.appendChild(tipo);

    //boton de volver atrás
    let div_btonAtras=document.createElement('div');
    let atras=document.createElement('input');
    atras.type="button";
    atras.id="BotonAtras";
    atras.value="Volver Atrás";
    div_btonAtras.appendChild(atras);
    //evento para volver atrás
    atras.addEventListener("click",function(event) { 
        //añadir el contador..
        history.go(-2); //volver atrás
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
    //añadimos el titulo y el div al body 
    body.appendChild(titulo);
    body.appendChild(divFormulario);
    body.appendChild(div_btonAtras);

    //hasta aqui -->creacion de formulario
    //gestion de los datos, al enviar el formulario
    function aniadirP() {
        //bajo los pokemons
        let pokemons=JSON.parse(localStorage.getItem('pokemitos'));
        let datos=location.search;//obtenemos los datos despues del ?
            if (datos) {//si hay datos
                let datosJuntos=datos.split("&");//separo,para obtener los valores
                let nombre=datosJuntos[0].split("=");
                let tipo=datosJuntos[1].split("=");
                let nombreFinal=nombre[1];
                let tipoFinal=tipo[1];
                //al largo del array le sumamos 1 
                let idd=pokemons.length+1;
                //creo un objeto cn los datos
                let nuevo={
                    id:idd,
                    nombre:nombreFinal,
                    tipos:[tipoFinal],
                    nuevo:true
                }
                //lo añado al array
                pokemons.push(nuevo);
                //lo subo 
                localStorage.setItem('pokemitos',JSON.stringify(pokemons));
                inputNombre.value = "";
                inputTipo.value = "";
            }
    }
    aniadirP();
    //aqui n me funciona bien la creacion de la carta
