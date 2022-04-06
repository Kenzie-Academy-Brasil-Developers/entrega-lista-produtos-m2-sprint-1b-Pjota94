const container = document.querySelector('.containerListaProdutos');

const ul = document.querySelector('ul');

function montarListaDeProdutos(listaProdutos){
    
    ul.innerHTML = ''
    
    
    listaProdutos.forEach((produto) => {

        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');

        

        img.src = produto.img;
        img.atl = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;

        

        li.appendChild(img);
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)

        

        ul.appendChild(li)
        
    });
    somarValores(listaProdutos)
}

montarListaDeProdutos(listaProdutos)


function filtrarHortifruti(){
    
    const listaHortifruti = listaProdutos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaDeProdutos(listaHortifruti)
}

const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');

    botaoMostrarHortifruti.addEventListener('click',filtrarHortifruti);

//Filtro para mostrar todos os itens
function mostrarTodos(){

    montarListaDeProdutos(listaProdutos)

}

const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');

    botaoMostrarTodos.addEventListener('click',mostrarTodos)


//Criando evento no botão buscar para filtrar por pesquisa
const buscarPorPesquisa = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')
const input = document.querySelector('.campoBuscaPorNome')
console.log(input)

buscarPorPesquisa.addEventListener('click',buscarPorNome)


function buscarPorNome(){
    
    const pesquisarProduto = listaProdutos.filter((produto) => {
    
        const input = document.querySelector('.campoBuscaPorNome').value
        let inputGrande = input.toUpperCase()
        let produtoGrande = produto.nome.toUpperCase()

            return (produtoGrande === inputGrande)      
        });

        montarListaDeProdutos(pesquisarProduto)
}


function somarValores(listaProdutos){
    
    const span = document.querySelector('#precoTotal')
    let precoTotal = 0
        for(let i = 0; i < listaProdutos.length; i++){
            precoTotal += listaProdutos[i].preco
        }

    return span.innerText = precoTotal
}