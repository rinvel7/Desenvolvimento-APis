//1. importamos o arquivo service.js obterPessoa
const service = require('./service')
//2. cria funcao para manipular as informacoes
async function main() {
    try{
        //3.Objetivo tentar iterar os items de objeto retornado de SWAPI 
        //retornar os so nome que estan dentro de results.
        const result = await service.obterPessoas('a')//'a' certeca que vai trazer uma lista como resultado
        const names =[] //variavel onde sera adicionado a lista de SWAPI
        
//-------------------------FOR--------------------------------------------       
        console.time('for')//so para verificar tempo de ejecucao
        //ENTAO:
        //iniciamos un bucle,
        //result = const result = await...
        //results = objeto retornado de SWAPI en test
        //.length = verifica as cantidades de esse arreglo        
        for (let i = 0; i <= result.results.length -1; i++) {
            const pessoa = result.results[i] //pegar pessoas em a posicao i, oseja desde 0, e que seja adicionada essa lista en uma vaiavel chamada: name
            names.push(pessoa.name)
        }
        
        console.timeEnd('for') 
//------------------------------FORIN------------------------------------
    console.time('forin') //so para verificar tempo de ejecucao
    for (let i in result.results) {
        const pessoa = result.results[i]
        names.push(pessoa.name)
    }
        console.timeEnd('forin')
    //--------------------------FOROF-----------------------
    console.time('forof')
    for (pessoa of result.results) {
        names.push(pessoa.name)
    }
    console.timeEnd('forof')

        console.log(`name`, names)

    }catch (error){
        console.error(`error interno`, error)

    }
}
   main()

   //FORIN ES MAIS RAPIDO...