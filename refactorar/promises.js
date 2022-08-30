//Refactorar callback para promises

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
                nome: 'Aladin',
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
const usuarioPromise = obterUsuario()
// para manipular o sucesso usamos a funcao .then
// para manipular erros usamos o .catch

usuarioPromise
    .then(function(usuario) { //pego y retorno a funcao de usuario -> chamo a funcao de telefone -> ultima funcao e telefone
        return obterTelefone(usuario.id)
            .then(function resolveTelefone(result) { //PASAR RESULTADO USUARIO PARA FRENTE: 1.Se resolveTelefone, 2.Criar um novo objeto pra que o resultado consiga pegar o usuario tambem.
                return {  // PORQUE UM .THEN DENTRO DE OUTRO .THEN: O primeiro .then e uma funcao que retorna una promise direita, soamente obterTelefone. para oter na proxima funcao o resultado anteior (os dados de usuario), 
                    usuario:{ // presicamos resolverTelefone (promese) pegar o resultado dela, e retornar so modificando o resultado
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone : result
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEdereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(resultado){
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
            `)
    })

    .catch(function(error) {
        console.error('DEU RUIM', error)
    })
