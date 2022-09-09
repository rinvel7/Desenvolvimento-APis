//1. importar obterPessoa a traves de aquivo service.js
const service = require('./service')

//2.criar nossa propria array:
//a. Sustituir a funcao global de JS
Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length - 1; indice++) {
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }
    //3. objetivo e manipular o que usuario chamo e pegar a funcao q ele rodo em a funcao
   //const names = results.results.map(function (pessoa) { return pessoa.name
   // 
    return novoArrayMapeado;
}

async function main(){
    try{
        const results = await service.obterPessoas(`a`)
        //ao usar meuMap() conseguimos que results crie uma lista que sustituye ao metodo global de listas (Array.protop...)
        //adicionandolo a meu propria implementacao de lista (meuMap)
        const names = results.results.meuMap(function (pessoa, indice){
            return `[${indice}]${pessoa.name}`
        })
        console.log('names', names)

    }catch(error){
        console.error(`ERROR`, error);
    }

}
main()