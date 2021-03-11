const listaDeCrush = [
    "Tom Cruise",
    "Carlos Daniel",
    "Zezinho",
    "Zezão"
]


const somaCrush =  (n1, n2) => n1 + n2

const encontraCrush = nome => {
    
     try {
            validacao(nome)
            const crushEcontrado = listaDeCrush.find(crush => crush === nome)
            return crushEcontrado ? crushEcontrado :'Crush não encontrado'
     } catch (erro){
         return erro
     }
}

const validacao = nome => {
    if(!nome) throw 'Campo nome está vazio'
    if(typeof nome !== 'string') throw 'Tipo inválido'
}

module.exports = {
    somaCrush,
    encontraCrush
}