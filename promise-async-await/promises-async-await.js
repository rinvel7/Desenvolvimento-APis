//Refactorar promises para async/await

// importamos um modelo interno do node.js (util)
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco) //obterEnderezo fica com a funcao original, mais usando a funcao util.promisify se consegui convertir en promise automaticamente

function obterUsuario() {
    // quando der algum problema-> REJECT(ERRO)
    // quando de sucess -> RESOLVE
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function(){
            //return reject(new Error('DEU RUIM de verdade!'))

            return resolve({
                id: 1,
                nome: 'Rina Velasquez',
                dataNascimento: new Date()                
            })               
        }, 1000);
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone: '999073841',
                ddd: 11
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) { //esta funcao e um callback e pasara a ser uma promise sim fazer alguma alteracao ->obterEnderecoAsync
    setTimeout (() => {
        return callback(null,{
            rua: 'Dr Astrolabio',
            numero: 49
        })
    }, 2000);
}

//1. Passo: adicionar a palavra async-> automaticamente ela retornara uma promise
main()
async function main() {
    try{ //promise com sucesso
        console.time('medida-promise') //mide o tempo de execucao de uma funcao
        const usuario = await obterUsuario() //2. Passo: adicionar a palabra await o que face e, resolver ou rejeitar a funcao 
        //const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all ([ //Podemos passar um array de promessas como argumento para Promise.all(), e ele retornará uma única promessa.
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
        Nome: ${usuario.nome},
        Telefone: (${telefone.ddd}) ${telefone.telefone},       
        Endereco: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medida-promise')

    } catch (error) {
        console.error('DEU RUIM', error)
    }

}