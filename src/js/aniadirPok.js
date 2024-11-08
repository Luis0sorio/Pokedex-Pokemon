    let Pokemonsss=[];
    let body= document.getElementById('body');
    //div para el formulario
    let divFormulario=document.createElement('div');

    //titulo 
    let h1=document.createElement('h1');
    h1.textContent="Escribe los datos para añadir el POKEMON";

    //creamos el formulario 
    let form=document.createElement('form');
    form.action="";//se va a trtar aki
    form.method="POST";

    //creamos los campos pra los datos
    //nombre-pokemon
    let input= document.createElement('input');
    input.type="text";
    input.id="nombre";
    input.name="nombre";
    input.required=true;//campo obligatorio

    //tipo-pokemon
    let inputt = document.createElement('input');
    inputt.type="text";
    inputt.id="tipo";
    inputt.name="tipo";
    inputt.required=true;//campo obligatorio

    //boton enviar
    let button=document.createElement('button');
    button.type="submit";
    button.textContent="Enviar";

    //espacio
    let br1=document.createElement('br');
    let br2=document.createElement('br');
    //texto-nombres
    let p=document.createElement('p');
    p.textContent="Nombre: "

    let p2=document.createElement('p');
    p2.textContent="Tipo: "

    //aqui añadimos las cosas
    body.appendChild(h1);
    form.appendChild(p);
    form.appendChild(input);
    //form2.appendChild(br1);
    form.appendChild(p2);
    form.appendChild(inputt);
    form.appendChild(br2);
    form.appendChild(button);
    divFormulario.appendChild(form);
    body.appendChild(divFormulario);
    //hasta aqui -->creacion de formulario
    //gestion de los datos
    
        
        function aniadirP() {
            form.addEventListener("submit",function (event) { 
                event.preventDefault(); 
                //bajo los pokemons
                Pokemonsss=JSON.parse(localStorage.getItem('pokemons'));

                //datos
                let nombrePokemon=input.value;
                let tipoPokemon=inputt.value;
                //al largo del array le sumamos 1 
                let idd=Pokemonsss.length+1;
                //creo un objeto cn los datos
                let nuevo={
                    id:idd,
                    nombre:nombrePokemon,
                    tipo:tipoPokemon
                }
                //lo añado al array
                Pokemonsss.push(nuevo);
                //lo subo 
                localStorage.setItem('pokemons',JSON.stringify(Pokemonsss));
                //limpio los valores 
                input.value="";
                inputt.value="";
            });
        }
        aniadirP();
        
        


































    //FALTA HACER EL TRATAMIENTO DE LOS DATOS, Y NO USAR EL POKEMONS
    //SINO BAJARLO DEL LOCAL STORAGE Y AÑADIRLO
    //ELID LO PODRIAS ASIGNAR 
    //1.EN CASODE Q SELO PIDAS AL USUARIO,MIRAR EN EL OBJETO SI ESTA SINO PSAÑADIR AHI LA CARTA CNLOS DTOS
    //2.EN CASO DE Q QUIERAS Q SE GENERE EL SIGUIENTE EN ORDEN, RECORER ELBJT.LENGHT,OBTENER ESTE LARGO Y DE AHI
    //PONERLE SUPONGO UN ++ ESO HARA Q SE LEPONGA POREJEMPLO UN ID 152
    //DEPENDE DEL TIPO PONERLE A LA CARTA UN FONDO COMO IDEA..