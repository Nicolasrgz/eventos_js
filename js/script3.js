const formulario = document.getElementById('form-1')
const inputTitulo = document.getElementById('nome')
const textArea = document.getElementById('textarea')
const btnReset = document.querySelector('#form-1 button[type="reset"]')
const div = document.getElementById('div-cartas')
const busqueda = document.getElementById('search')
const checkbox = document.getElementById('check-apple')

let notas = [
    {
        id: 1,
        titulo: "comer",
        descripcion: "hoy tengo que comer",
        realizado: false
    },
    {
        id: 2,
        titulo: "jugar",
        descripcion: "hoy tengo que comer",
        realizado: false
    }
        
]
pintarDiv(notas, div)

//primera parte

let idGeneral = 3

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(inputTitulo.value && textArea.value){
        let nota = {
            id: idGeneral++,
            titulo: inputTitulo.value,
            descripcion: textArea.value,
            realizado: false
        }
        
        reiniciar(inputTitulo.value, textArea.value)
        notas.push(nota)
        pintarDiv(notas, div)
        
    }
   console.log(notas)
})

btnReset.addEventListener('click', ()=>{
    reiniciar(inputTitulo, textArea)
})

div.addEventListener('click', (e)=>{
    let dataSet = e.target.dataset
    if(dataSet.accion == "borrar"){
        notas = notas.filter(nota => nota.id != dataSet.id)
        pintarDiv(notas, div)
    }if(dataSet.accion == "estado"){
        const nota = notas.find(nota => nota.id == dataSet.id)
        nota.realizado = !nota.realizado
    }
})

busqueda.addEventListener('input', ()=>{
    const filtrarPorBusqueda = filtrarPorTitulo(notas , busqueda.value)
    if(checkbox.checked){
    const filtarPorRealizada = filtrarPorRealizadas(filtrarPorBusqueda)
    pintarDiv(filtarPorRealizada, div)
    }else{
        pintarDiv(filtrarPorBusqueda, div)
    }
})

checkbox.addEventListener('change', ()=>{
    const filtrarPorBusqueda = filtrarPorTitulo(notas , busqueda.value)
    if (checkbox.checked){
        const filtrarPorRealizada = filtrarPorRealizadas(filtrarPorBusqueda)
        pintarDiv(filtrarPorRealizada, div)
    }else{
        pintarDiv(filtrarPorBusqueda, div)
    }
})


function filtrarPorRealizadas(notas) {
    return notas.filter(nota => nota.realizado);
  }
  

function filtrarPorTitulo (notas, busqueda){
    return notas.filter(nota => nota.titulo.toLowerCase().includes(busqueda.toLowerCase()))
}




function reiniciar(input, text){
    text.value = ''
    input.value = ''
}

function pintarDiv(notas , ubicacion){
    let template = ""
    for(let nota of notas){
        template += crearDiv(nota)
    }
    ubicacion.innerHTML = template
}

function crearDiv (nota){
    let estado = ''
    if(nota.realizado){
        estado = 'checked'
    }
    return `<div>
         <input data-id="${nota.id}" type="checkbox" ${estado} name="chan" data-accion="estado" id="checkbox">
         <h3>${nota.titulo}</h3>
         <p>${nota.descripcion}</p>
        <button type="reset" data-accion="borrar" data-id="${nota.id}">borrar</button>
        </div>`
}