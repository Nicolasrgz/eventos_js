let dolar = document.querySelector("#dolar")
let monedaLocal = document.querySelector("#pesos")
let divisa = document.querySelector("#formular")

formular.addEventListener("submit",(e)=>{
    e.preventDefault()
    let pesos = 140
    let resultado2 = 0
    monedaLocal.innerHTML+=resultado2
    return monedaLocal.value = dolar.value * pesos

})