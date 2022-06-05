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
        adicionarCarrinho(produto,CriarButtonAddCart)
        return criarContainerPreco
}

function montarCards(listaProdutos){
    listaProdutos.forEach((produto)=>{
        criarCard(produto)
    })
}

montarCards(listaProdutos)

//Calcular Valor Total 

function calcularTotal(produtos){
    const selecionarPreco = document.querySelector('.value-price')     

    const soma = produtos.reduce((acumulador,valorAtual)=>{
        return acumulador + Number(valorAtual.preco)
    },0)

    return selecionarPreco.innerText = soma
}
