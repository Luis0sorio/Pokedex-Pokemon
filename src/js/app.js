let main = document.getElementById('main');
 //creo elcontenedor
let contenedor= document.createElement('div');
contenedor.className='contenedor';
//recorro el objeto
for (let key in pokemon) {
    //la info que necesitamos
    let id=pokemon[key].id;
    let nombre=pokemon[key].nombre;
    let tipo=pokemon[key].tipos;

    //cremos un div para meter toda la info
    let div_info=document.createElement('div');
    div_info.id='info';

    //creo el card
    let div= document.createElement('div');
    div.className='card';
    div.id = id;//se asigna como id, el id del propio pokemon

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

    //añado al div-carta el div de la info
    div.appendChild(div_info);

    //añado al contenedor de cartas las cartas 
    contenedor.appendChild(div);
}
//añado todo al main
main.appendChild(contenedor);

