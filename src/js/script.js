function criarCard(produto){
    const selecionarContainer = document.querySelector('.container-products')

    const card = cardCompleto(produto)
    selecionarContainer.appendChild(card)
}


function cardCompleto(produto){
    const criarContainer = document.createElement('div'); 
    criarContainer.classList.add('card-product');

    const criarImagem = document.createElement('img');
    criarImagem.classList.add('img-products')
    criarImagem.src = produto.img;
    
    const criarNome = document.createElement('p');
    criarNome.classList.add('nome-product');
    criarNome.innerText = produto.nome;
    
    const criarCategoria = document.createElement('p');
    criarCategoria.classList.add('category-product');
    criarCategoria.innerText = produto.secao;

    criarContainer.append(criarImagem,criarNome,criarCategoria,cardComponentes(produto),cardPreco(produto))
    return criarContainer
}

function cardComponentes(produto){
    const criarContainerComponentes = document.createElement('div')
    criarContainerComponentes.classList.add('container-componentes')
    
    const criarComponentes = document.createElement('p')
    criarComponentes.classList.add('component-product')
    criarComponentes.innerText = 'Nutrientes:'

    const criarLista = document.createElement('ul');
    criarLista.classList.add('ul-lista-componentes');
        produto.componentes.forEach((elem)=>{
            const criarLiComponentes = document.createElement('li')
            criarLiComponentes.classList.add('li-componentes')
            criarLiComponentes.innerText = elem
            criarLista.appendChild(criarLiComponentes)
        })
        
    //Button para descer lista, fazer dps que terminar tudo.
    // const criarButtonLista = document.createElement('button');
    // criarButtonLista.classList.add('button-lista-componentes');
    // criarButtonLista.innerHTML = '<i class="fa-solid fa-angle-down"></i>'

    
    criarContainerComponentes.append(criarComponentes,criarLista)
    return criarContainerComponentes
}

function cardPreco(produto){
        const criarContainerPreco = document.createElement('div')
        criarContainerPreco.classList.add('preco')
        
        const criarSpan = document.createElement('span')
        criarSpan.innerText = 'R$'
        
        const criarPreco = document.createElement('p');
        criarPreco.classList.add('price-product');
        criarPreco.innerText = produto.preco

        const CriarButtonAddCart = document.createElement('button');
        CriarButtonAddCart.id = produto.id
        CriarButtonAddCart.classList.add('button-AddCar')
        CriarButtonAddCart.innerHTML = '<i class="fa-solid fa-cart-plus"></i>'

        criarContainerPreco.append(criarSpan,criarPreco,CriarButtonAddCart)
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
        const {nome,secao,categoria} = produto
        return nome.toLowerCase() === selecionarInput.toLowerCase() || secao.toLowerCase() === selecionarInput.toLowerCase() || categoria.toLowerCase() === selecionarInput.toLowerCase()
    })

    montarCards(listarPorNome)
    calcularTotal(listarPorNome)
    adicionarCarrinho()
}

buscar()

//Calcular Valor Total 

function calcularTotal(produtos){
    const selecionarPreco = document.querySelector('.value-price')     

    const soma = produtos.reduce((acumulador,valorAtual)=>{
        return acumulador + Number(valorAtual.preco)
    },0)

    return selecionarPreco.innerText = soma
}

//Adicionar ao Carrinho
const arrayCarrinho = [];

function adicionarCarrinho(){
    const selectButtonAdd = document.querySelectorAll('.button-AddCar')
    selectButtonAdd.forEach((produto)=>{
        produto.addEventListener('click',((event)=>{
            const selectId = event.currentTarget.id
            const encontrarProduto = listaProdutos.find((produto)=>{
                const {id} = produto
                return id == selectId
            })
           arrayCarrinho.push(encontrarProduto)
           renderizarCarrinho(arrayCarrinho)
           quantidadeCarrinho()
           somaCarrinho(arrayCarrinho)
        }))
    })
    
}

function renderizarCarrinho(arrayCarrinho){
    const selectCarrinho = document.querySelector('.body-carrinho')
    selectCarrinho.innerHTML = ''
    
    arrayCarrinho.forEach((produto)=>{
        const criarCardCarrinho = document.createElement('div');
        criarCardCarrinho.classList.add('container-body-carrinho')
        criarCardCarrinho.innerHTML = `<img class="img-body-carrinho" src="${produto.img}" alt="">
                                <div class="textos-body-carrinho">
                                    <p class="fruit-body-carrinho">${produto.nome}</p>
                                    <p class="secao-body-carrinho">${produto.secao}</p>
                                    <p class="preco-body-carrinho">R$ ${produto.preco}</p>
                                </div>
                                <button id="${produto.id}" class="button-body-carrinho">
                                    <i class="fa-solid fa-trash"></i>
                                </button>`
        selectCarrinho.appendChild(criarCardCarrinho)
        
        const selectButtonDel = document.querySelectorAll('.button-body-carrinho')
        removerCarrinho(selectButtonDel)
    })
}

function removerCarrinho(selectButtonDel){
    
    selectButtonDel.forEach((button)=>{
        button.addEventListener('click',((event)=>{
            const selectId = event.currentTarget.id
            arrayCarrinho.forEach((produto,index)=>{
                if(produto.id == selectId){
                    arrayCarrinho.splice(index,1)
                    renderizarCarrinho(arrayCarrinho)
                    quantidadeCarrinho()
                    somaCarrinho(arrayCarrinho)
                }
            })
        }))
    })
}

adicionarCarrinho()


//Quantidade de itens no carrinho

function quantidadeCarrinho(){
    const selectPai = document.querySelector('.body-carrinho')
    const selectQuantidade = document.querySelector('.numero-quantity-carrinho')
    selectQuantidade.innerText = selectPai.childElementCount
}

//Valor total dos itens no carrinho

function somaCarrinho(arrayCarrinho){
    const selectTotal = document.querySelector('.numero-total-carrinho')
    const soma = arrayCarrinho.reduce((acumulador,valorAtual)=>{
        return acumulador + Number(valorAtual.preco)
    },0)
    return selectTotal.innerText = soma
}
