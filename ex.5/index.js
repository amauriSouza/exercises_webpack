const produto = {
    nome: 'Caneeta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    return {...objeto}
}


const nProduto = clone(produto)
nProduto.nome = 'Lapis'
console.log(produto, nProduto)
