//1. importar obterPessoa a traves de aquivo service.js
const service = require('./service')
//2. cria funcao para manipular as informacoes:

async function main(){
    try{
        const results = await service.obterPessoas(`a`)
        // const names = []
        //a. Diference de forEach e Map
        // results.results.forEach(function(item) {//Diferenca e que para cada item de a lista, ele vai chammar essa funcao e vai adicionar ese item para cada lista
        //    names.push(item.name) 
        //})
        //A DIFERENCA Com o metodo map() e que nao e precisso criar variavel extrernas, mas se criar diretamente em a funcao
        //retornar o que se precissa e map vai retornar uma nova funcao.
        //const names = results.results.map(function (pessoa) {
        //    return pessoa.name
        //})
    
        console.log('names', names)

    }catch(error){
        console.error(`ERROR`, error);
    }

}
main()