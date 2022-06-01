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
