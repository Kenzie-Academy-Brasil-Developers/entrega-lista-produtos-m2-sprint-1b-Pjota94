//Filtrar Hortifruit

function hortifruit(){
    const btnHortifruit = document.querySelector('.hortifruit')
    btnHortifruit.addEventListener('click',filtrarHortifruit)
}

function filtrarHortifruit(){
    const selecionarContainer = document.querySelector('.container-products')
    selecionarContainer.innerHTML = ''
 
    const listaHortifruit = listaProdutos.filter((produto)=>{
        return produto.secao === 'Hortifruti'    
    })
    
    montarCards(listaHortifruit)
    calcularTotal(listaHortifruit)
    adicionarCarrinho()
}

hortifruit()

//Filtrar Panificadora

function panificadora(){
    const btnPanificadora = document.querySelector('.panificadora');
    btnPanificadora.addEventListener('click',filtrarPanificadora)
}

function filtrarPanificadora(){
    const selecionarContainer = document.querySelector('.container-products')
    selecionarContainer.innerHTML = ''

    const listarPanificadora = listaProdutos.filter((produto)=>{
        return produto.secao === 'Panificadora'
    })

    montarCards(listarPanificadora)
    calcularTotal(listarPanificadora)
    adicionarCarrinho()
}

panificadora()

//Filtrar Laticinios

function laticinios(){
    const btnLaticinios = document.querySelector('.laticinios');
    btnLaticinios.addEventListener('click',filtrarLaticinios)
}

function filtrarLaticinios(){
    const selecionarContainer = document.querySelector('.container-products')
    selecionarContainer.innerHTML = ''

    const listaLaticinios = listaProdutos.filter((produto)=>{
        return produto.secao === 'Laticínio'
    })

    montarCards(listaLaticinios)
    calcularTotal(listaLaticinios)
    adicionarCarrinho()
}

laticinios()

//Filtrar Todos

function todosProdutos(){
    const btnTodosProdutos = document.querySelector('.todos');
    btnTodosProdutos.addEventListener('click',filtrarTodosProdutos)
}

function filtrarTodosProdutos(){
    const selecionarContainer = document.querySelector('.container-products')
    selecionarContainer.innerHTML = ''
    montarCards(listaProdutos)
    calcularTotal(listaProdutos)
    adicionarCarrinho()
}

todosProdutos()

//Filtro automático do input(nome,seção e categoria) 

function buscar(){
    const inputBusca = document.querySelector('#search')
    inputBusca.addEventListener('input',buscaAutomatica)
}

function buscaAutomatica(){
    const selecionarContainer = document.querySelector('.container-products')
    selecionarContainer.innerHTML = ''
    const selecionarInput = document.querySelector('#search').value

    const listarPorNome = listaProdutos.filter((produto)=>{
        const {nome,secao,categoria} = produto
        inputLower = selecionarInput.toLowerCase()
        nomeLower = nome.toLowerCase()
        secaoLower = secao.toLowerCase()
        categoriaLower = categoria.toLowerCase()
        return nomeLower.includes(inputLower) || secaoLower.includes(inputLower) || categoriaLower.includes(inputLower)
    })
    montarCards(listarPorNome)
    calcularTotal(listarPorNome)
    adicionarCarrinho()
}

buscar()