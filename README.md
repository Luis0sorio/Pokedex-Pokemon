 Los primeros commits de Michael no aparecen por que estaba usando la cuenta del portatil sin vincularla a su correo electronico 
 los problemas al hacer pull y push han llegado a borrar commit que no corresponde 
 el historial de commits de los colaboradores no refleja el original de commits.

Pokedex-Pokemon

El objetivo es crear una versión simplificada de una Pokedex utilizando JavaScript para gestionar el DOM, BOM, trabajar con eventos y otras herramientas.

Se deberán mostrar una lista de 151 Pokémon (nombre, tipo, sprite, etc.) en un página web de manera dinámica, permitir agregar nuevos Pokémon mediante un formulario con contenido libre en las etiquetas adecuadas (si es un numero, no vale un type="text"), y realizar otras tareas relacionadas.

Requisitos:
 Mostrar la lista de Pokemon en el formato "card"
  Se deberán mostrar los Pokémon en formato card, donde cada card debe incluir al menos el id, nombre, tipo/s, e imagen.
  Se deberán utilizar estilos de las cards trabajados, pudiendo elegir la disposición preferida (flexbox, grid, etc.).
  Se deberá agregar a cada card un botón para eliminar el Pokémon de la lista mostrada (u ocultarlo) y eliminarlo del objeto de Pokémon.

Agregar Pokemon con un formulario utilizando el objeto "Location"
  Se deberá crear un formulario en el fichero "agregar.html" ya ubicado en el directorio pages con, al menos, nombre y tipo (se le debe asignar automáticamente el siguiente ID disponible).
  Se deberá utilizar el objeto Location para reoger y gestionar los datos del formulario.
  Se deberá mostrar el nuevo Pokemon en la lista pero no debe ser agregado al array original.

 Buscador de Pokemon:
  Se debe implementar un buscador dentro del fichero index.html concretamente en el header para filtrar un Pokemon por nombre.
  Se deberá poder filtrar en el buscador utilizando eventos de teclado para poder filtar.
  Se deberá eliminar u ocultar (recomendado) los Pokemon que no encajen con el texto introducido.

 Navegación y uso del BOM:
  Se deberán utilizar funcionalidades del BOM para mostrar información en pantalla:
    - Objeto Screen aportará el tamaño de la pantalla.
    - Objeto Location gestionará los datos del formulario.
    - Objeto History aportará las veces que se ha accedido al formulario para insertar un dato.
    - Objeto Window para almacenar la lista de Pokemon SIEMPRE ACTUALIZADA con localStorage o sessionStorage pudiendo agregar, acceder y eliminar de la lista.

Uso de estructuras de datos:
  Se deberán utilizar al menos dos de las siguientes estructuras: Array, Set, Map, Object. Utilizar más de dos se valorará positivamente.

Uso de funciones y modularización:
  Se deberá organizar el código en funciones claras y reutilizables para tareas específicas (pintar lista, agregar pokemon, filtrar, gestionar almacenamiento, etc).

Documentación.
  Se deberá documentar cada funcion correctamente según lo visto en clase.

Trabajo en equipo y uso de Git:
  Se deberá colaborar utilizando Git para gestionar el proyecto. Es importante que cada integrante contribuya regularmente pues será parte de su calificación individual.
  Se evaluará el historial de commits para verificar la participación activa de todos los miembros.

        
Criterios de evaluación:
- Se han mostrado correctamente los 151 Pokémon en formato card, incluyendo al menos el ID, nombre, tipo/s e imagen.
- Se han aplicado estilos trabajados a las cards, utilizando disposiciones adecuadas como flexbox o grid.
- Se ha implementado correctamente el botón de eliminación en cada card, permitiendo eliminar (u ocultar) el Pokémon tanto de la lista mostrada como del objeto correspondiente.
- Se ha creado el formulario en agregar.html cumpliendo con los requisitos y utilizando el objeto Location para gestionar los datos.
- Se ha mostrado el nuevo Pokémon añadido desde el formulario en la lista, sin modificar el array original.
- Se ha implementado el buscador en index.html dentro del header, permitiendo filtrar los Pokémon por nombre utilizando eventos de teclado.
- Se han ocultado o eliminado adecuadamente los Pokémon que no coinciden con el texto introducido en el buscador.
- Se ha utilizado el objeto Screen para mostrar el tamaño de la pantalla correctamente.
- Se ha gestionado el formulario de agregar Pokémon con el objeto Location de forma adecuada.
- Se ha mostrado correctamente el número de accesos al formulario mediante el objeto History.
- Se ha gestionado la lista de Pokémon actualizada en el almacenamiento del navegador utilizando localStorage o sessionStorage, permitiendo agregar, acceder y eliminar elementos.
- Se han utilizado al menos dos estructuras de datos entre Array, Set, Map y Object de forma correcta.
- Se ha organizado el código en funciones claras y reutilizables para realizar tareas específicas, como pintar la lista, agregar Pokémon, - filtrar, y gestionar el almacenamiento.
- Se ha documentado cada función siguiendo el formato visto en clase.
- Se ha trabajado en equipo utilizando Git, con contribuciones regulares y equilibradas de todos los integrantes.
- Se ha demostrado la participación activa de todos los miembros en el historial de commits del repositorio de Git.
- Se ha explicado el proyecto en un vídeo de hasta 10 minutos, cubriendo todos los requisitos de la práctica.
- Se ha asegurado que todos los integrantes del grupo han participado en la explicación del vídeo, mostrando tanto el código como la ejecución.

Criterios de evaluación

    Se han mostrado correctamente los 151 Pokémon en formato card, incluyendo al menos el ID, nombre, tipo/s e imagen.
    Se han aplicado estilos trabajados a las cards, utilizando disposiciones adecuadas como flexbox o grid.
    Se ha implementado correctamente el botón de eliminación en cada card, permitiendo eliminar (u ocultar) el Pokémon tanto de la lista mostrada como del objeto correspondiente.
    Se ha creado el formulario en agregar.html cumpliendo con los requisitos y utilizando el objeto Location para gestionar los datos.
    Se ha mostrado el nuevo Pokémon añadido desde el formulario en la lista, sin modificar el array original.
    Se ha implementado el buscador en index.html dentro del header, permitiendo filtrar los Pokémon por nombre utilizando eventos de teclado.
    Se han ocultado o eliminado adecuadamente los Pokémon que no coinciden con el texto introducido en el buscador.
    Se ha utilizado el objeto Screen para mostrar el tamaño de la pantalla correctamente.
    Se ha gestionado el formulario de agregar Pokémon con el objeto Location de forma adecuada.
    Se ha mostrado correctamente el número de accesos al formulario mediante el objeto History.
    Se ha gestionado la lista de Pokémon actualizada en el almacenamiento del navegador utilizando localStorage o sessionStorage, permitiendo agregar, acceder y eliminar elementos.
    Se han utilizado al menos dos estructuras de datos entre Array, Set, Map y Object de forma correcta.
    Se ha organizado el código en funciones claras y reutilizables para realizar tareas específicas, como pintar la lista, agregar Pokémon, - filtrar, y gestionar el almacenamiento.
    Se ha documentado cada función siguiendo el formato visto en clase.
    Se ha trabajado en equipo utilizando Git, con contribuciones regulares y equilibradas de todos los integrantes.
    Se ha demostrado la participación activa de todos los miembros en el historial de commits del repositorio de Git.
    Se ha explicado el proyecto en un vídeo de hasta 10 minutos, cubriendo todos los requisitos de la práctica.
    Se ha asegurado que todos los integrantes del grupo han participado en la explicación del vídeo, mostrando tanto el código como la ejecución.

