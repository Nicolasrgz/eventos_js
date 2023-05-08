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
    {    
        id: 3 ,
        titulo: 'comprar mercaderia',
        texto: 'ir al supermercado y traer lo que haga falta',
        realizada: false
    },   
    {    
        id: 4 ,
        titulo: 'hacer la tarea',
        texto: 'hacer la tarea del cohort o me sacan',
        realizada: false
    }, 
    {    
        id: 5 ,
        titulo: 'ir al gimnasio',
        texto: 'ir al gimnasio a las 20:00',
        realizada: false
    }, 
    ]

let idGlobal = tareas[4].id

let contenedor = document.getElementById("div-general")

function maquetador(objeto) {
   return `<div class="card">
    <h2>${objeto.titulo}</h2>
    <p>${objeto.texto}</p>
    </div>`
}

function pintar(lista , ubicacion){
    for(let elemento of lista){
        ubicacion.innerHTML += maquetador(elemento)
    } 
}

pintar(tareas , contenedor)

let titulo = document.querySelector("#titulo")
let texto = document.querySelector("#text")
let guardar = document.querySelector("#guardar")

function agregarNota(titulo, texto) {
    return `<div class="card">
    <h2>${titulo}</h2>
    <p>${texto}</p>
    </div>`
}

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
})
