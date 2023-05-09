const tareas = [
    {
        id: 1 ,
        titulo: 'pasear al perro',
        texto: 'sacar a pasearlo',
        realizada: false
    },
    {
        id: 2 ,
        titulo: 'cocinar',
        texto: 'cocinar antes que llegue la familia',
        realizada: false
    }, 
]

let idGlobal = tareas[1].id

let contenedor = document.getElementById("div-general")

function maquetador(objeto) {
   return `<div class="card">
    <h2>${objeto.titulo}</h2>
    <p>${objeto.texto}</p>
    <button onclick="borrarNota(${objeto.id})">borrar nota</button>
    </div>`
}

function pintar(lista , ubicacion){
    for(let elemento of lista){
        ubicacion.innerHTML += maquetador(elemento)
    } 
}

pintar(tareas , contenedor)

function crearNotas(titulo, texto) {
    return `<div class="card">
    <h2>${titulo}</h2>
    <p>${texto}</p>
    <button onclick="borrarNota(${idGlobal + 1})">borrar nota</button>
    </div>`
}

const formulario = document.querySelector("#formulario")

formulario.addEventListener ("submit", (e)=>{
    e.preventDefault()
    let titulo = formulario[0].value;
    let text = formulario[1].value;
    tareas.push({id: idGlobal + 1,
         titulo: titulo,
          texto: text,
           realizada: false});
    contenedor.innerHTML = "";
    pintar(tareas, contenedor);
})

function borrarNota(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    contenedor.innerHTML = "";
    pintar(tareas, contenedor);
}

