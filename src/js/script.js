function criarCard(produto){
    const selecionarContainer = document.querySelector('.container-products')

    const card = cardCompleto(produto)
    selecionarContainer.appendChild(card)
}


function cardCompleto(produto){
    const criarContainer = document.createElement('div'); 
    criarContainer.classList.add('card-product');

    const criarImagem = document.createElement('img');
    criarImagem.src = produto.img;
    
    const criarNome = document.createElement('p');
    criarNome.classList.add('nome-product');
    criarNome.innerText = produto.nome;
    
    const criarCategoria = document.createElement('p');
    criarCategoria.classList.add('category-product');
    criarCategoria.innerText = produto.secao;

    criarContainer.append(criarImagem,criarNome,criarCategoria,cardPreco(produto))
    return criarContainer
}

function cardPreco(produto){
        const criarContainerPreco = document.createElement('div')
        criarContainerPreco.classList.add('preco')
        
        const criarSpan = document.createElement('span')
        criarSpan.innerText = 'R$'
        
        const criarPreco = document.createElement('p');
        criarPreco.classList.add('price-product');
        criarPreco.innerText = produto.preco

        criarContainerPreco.append(criarSpan,criarPreco)
        return criarContainerPreco
}


function montarCards(listaProdutos){
    listaProdutos.forEach((produto)=>{
        criarCard(produto)
    })
}

montarCards(listaProdutos)

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
}

todosProdutos()

//Filtrar por Nome 

function buscar(){
    const btnBusca = document.querySelector('.button-search')
    btnBusca.addEventListener('click',buscarPorNome)
}

function buscarPorNome(){
    const selecionarContainer = document.querySelector('.container-products')
    selecionarContainer.innerHTML = ''
    const selecionarInput = document.querySelector('#search').value

    
    const listarPorNome = listaProdutos.filter((produto)=>{
        return produto.nome.toLowerCase() === selecionarInput.toLowerCase() 
    })

    montarCards(listarPorNome)
    calcularTotal(listarPorNome)
}

buscar()

//Calcular Valor Total 

function calcularTotal(produtos){
    const selecionarPreco = document.querySelector('.value-price')     

    const soma = produtos.reduce((acumulador,valorAtual)=>{
        return acumulador + valorAtual.preco
    },0)

    return selecionarPreco.innerText = soma
}