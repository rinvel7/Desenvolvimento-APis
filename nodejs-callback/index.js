/*Callback: uma funcao passada como parametro a otra funcao.
0 Obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu Id
2 Obter o endereco do usuario pelo Id
*/

function obterUsuario(callback) {
    setTimeout(function(){
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()                
            })               
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback (null,{
            telefone: '999073841',
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout (() => {
        return callback(null,{
            rua: 'Dr Astrolabio',
            numero: 49
        })
    }, 2000);
}

function resolverUsuario(error, Usuario) {
    console.log('usuario',usuario)
}


obterUsuario(function resolverUsuario(error,usuario) {
   //null || "" || O === false
    if (error) {
        console.error('DEU RUIM en USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if (error1) {
            console.error('DEU RUIM en TELEFONE', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if (error2) {
                console.error('DEU RUIM en ENDERECO', error)
                return;
    }

            console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua},${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })    
    })
})
//const telefone = obterTelefone(usuario.id)
//console.log('telefone',telefone)