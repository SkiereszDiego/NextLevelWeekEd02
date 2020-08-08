//procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)

//executar ação
function cloneField() {
    //duplicar os campos (node é elemento do html-ramificação)
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    //Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    
    //para cada campo limpar
    fields.forEach(function(field){
        //Pegar o field do momento e limpa ele
        field.value = ""
    })
    

    //colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}