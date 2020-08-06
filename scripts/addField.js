// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)


/*Criando funcionalidade */
function cloneField() {
  //Duplicar os campos. Quais campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  // pegar os campos . Que campos?
  const fields = newFieldContainer.querySelectorAll('input') 

  //para cada campo, limpar
  fields.forEach(function(field) {
    // pega o field do momento e limpa ele
    field.value = ""
  }) 

  // Colocar na página : onde ??
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}