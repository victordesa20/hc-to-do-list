const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const listName = newListInput.value //pegando o valor de cada input
  if (listName == null || listName == '') return //verifica se está vazia
  const list = createList(listName)
  newListInput.value = null //limpando input
  lists.push(list) //colocando item na lista
  render() //função para mostrar itens na tela
})

function createList(name) {
  return { id: Date.now().toString(), name: name }
}

function render() {
  //função para renderizar a lista
  clearElement(listContainer)
  lists.forEach(function (list) {
    //percorrer a lista inteira
    const item = document.createElement('li') //criando elementos
    item.classList.add('item') //adiciona uma class a nosa lista de classes
    item.innerText = list.name //vai receber list como texto
    listContainer.appendChild(item) //adicionando filho ao elemento mãe html
  })
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

render()
