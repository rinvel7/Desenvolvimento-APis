//Filter: filtra uma cantidad determinada de informacoe en base a uma condicoe
//Retorna um novo arreglo o qual armazena soamente os elementos que cumplan com a condicoe
//Manipula a base de dados

//1. importamos so o que queremos do arquino service.js, es decir, nao precissamos importar todo arquivo service.js
//mais so uma funcao especifica
const { obterPessoas } = require('./service')

/*
ex.

const item = {
    name: 'Erick',
    idade;12,
}

const {nome} = item
console.log(name)
*/
//Criar nosso propria funcao filter
Array.prototype.meuFilter = function (callback){
    const lista = []
    for (index in this) {//this entra a manipular a lista item
        const item = this[index]
        const result = callback(item, index, this)//o resultado de callback e dar true o false
        //0, "". null undefine === false
        if (!result) continue;
        lista.push(item)
    }
    return lista;
}

async function main () {
    try {
        const {
            results
        } = await obterPessoas('a') 
        
        //const familiaLars= results.filter(function(item) {
            //por padrao precisa retornar um booleano
            //para informar se deve manter ou remopver da lista
            //false > remove da lista
            //true > mantem
            //nao encontro = -1
            // encontrou = posicaoNoArray
            // const result = item.name.toLowerCase().indexOf(`lars`) !== -1 //indexOf é utilizado para encontrar um valor 
            //return result                                                           //dentro de uma string ou array, caso o valor
            // })
        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })
                                                                   // não seja encontrado, ele retorna -1.
        const names = familiaLars.map((pessoa) => pessoa.name)          
        console.log(names)

    } catch(error) {
        console.error('ERROR', error)
    }
}

main()





