//reduce o objetivo e reduzir o valot final
const { 
    obterPessoas 
} = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this [0]
    for(let index = 0; index <= this.length -1; index++) {
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
}

async function main() {
    try{
        const{
            results
        } = await obterPessoas('a')
        const pesos = results.map(item => parseInt(item.height))
        console.log('pesos', pesos)
        //const total = pesos.reduce((anterior, proximo) => {
        //    return anterior + proximo
        //}, 0)
        
        //Objetivo retornar so texto
        const minhaLista = [
            ['Rina', 'Velasquez'],
            ['Node', 'Js']
        ]
        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo)
        }, [])
        .join(', ')//join() retorna um array como uma string. Separado por uma vírgula (,).
        console.log('total', total)
        
        }catch (error) {
        console.log('ERROR', error)
    }
}
main()