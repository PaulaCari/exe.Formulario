const fields = document.querySelectorAll("[required]")
for( field of campos){
    field.addEventListener("invalid" ,() => {
        console.log("campo invalido")
    })
}






















document.querySelector("form")
.addEventListener("submit", event => {
    console.log("Enviar o formulario")

    //não vai enviar o formulario
   // event.preventDefault()
})