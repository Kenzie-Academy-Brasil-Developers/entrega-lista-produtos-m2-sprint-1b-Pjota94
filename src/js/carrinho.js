let arrayCarrinho = []

function adicionarCarrinho(produto,CriarButtonAddCart){
    
    CriarButtonAddCart.addEventListener('click', (event)=>{
        const selectDivSemProduto = document.querySelector('.div-containter-semProduto')
        selectDivSemProduto.style.display = 'none'
        const selectDivComProduto = document.querySelector('.div-container-comProduto')
        selectDivComProduto.style.display = 'block'
        const selectAside = document.querySelector('.aside-SemProdutos')
        selectAside.style.background = 'white'
        const selectUl = document.querySelector('.body-carrinho')
        const criandoLi = document.createElement('li')
        criandoLi.classList.add('container-body-carrinho')
        
        const img = document.createElement('img')
        const divTextos = document.createElement('div')
        const pNome = document.createElement('p')
        const pSecao = document.createElement('p')
        const pPreco = document.createElement('p')
        const button = document.createElement('button')
    
        img.src = produto.img
        pNome.innerText = produto.nome
        pSecao.innerText = produto.secao
        pPreco.innerHTML = `R$ ${Number(produto.preco).toFixed()}`
        button.innerHTML = `<i class="fa-solid fa-trash"></i>`
    
        img.classList.add('img-body-carrinho')
        divTextos.classList.add('textos-body-carrinho')
        pNome.classList.add('fruit-body-carrinho')
        pSecao.classList.add('secao-body-carrinho')
        pPreco.classList.add('preco-body-carrinho')
        button.classList.add('button-body-carrinho')
        button.id = produto.id
        
        divTextos.append(pNome,pSecao,pPreco)
        criandoLi.append(img,divTextos,button)
        selectUl.appendChild(criandoLi)
        
        removerCarrinho(button)
        quantidadeCarrinho()
        arrayCarrinho.push(produto)
        somaCarrinho(arrayCarrinho)
    })
}

function removerCarrinho(button){
    button.addEventListener('click',(e)=>{
        const selectUl = document.querySelector('.body-carrinho')
        const element = e.currentTarget
        const parentProduct = element.closest(".body-carrinho")
        const liToRemove = button.parentNode
        selectUl.removeChild(liToRemove)
        quantidadeCarrinho()

        const itemIndex = arrayCarrinho.findIndex(
            (elem) => elem === parentProduct
            
          );
          arrayCarrinho.splice(itemIndex,1)
          somaCarrinho(arrayCarrinho)
          if(arrayCarrinho.length === 0){
            const selectDivSemProduto = document.querySelector('.div-containter-semProduto')
            selectDivSemProduto.style.display = 'flex'
            const selectDivComProduto = document.querySelector('.div-container-comProduto')
            selectDivComProduto.style.display = 'none'
            const selectAside = document.querySelector('.aside-SemProdutos')
            selectAside.style.background = '#F8F9FA'
          }
    })
}

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
