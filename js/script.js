let resultado = document.querySelector("#resultado")
let peso = document.querySelector("#peso")
let estatura = document.querySelector("#estatura")
let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e);
    let resultado1 = 0
    resultado.innerHTML+=resultado1
    return resultado.value = peso.value / (estatura.value * 2)

})



console.dir(peso);
console.log(submit);
console.log(form);