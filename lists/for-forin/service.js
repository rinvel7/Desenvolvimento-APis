const axios = require('axios')//importamos axios a nosso projeto
const URL =  `https://swapi.dev/api/people`

async function obterPessoas (nome) { 
    //concatenamos a variavel (url) com o que estamos solicitando (nome people) ao api e que passe a informacao em formato json
    const url = `${URL}/?search=${nome}&format=json` 
    //axios e uma promise que retorna informacao, e para que passe a informacao na misma linea colocamos await
    const response = await axios.get(url)
    // y por utimo, retorna um objeto 
    return response.data
}
//1.Objetivo = testar que funcoe correctamente -> Ele retorno un objeto, con todas as caracteristicas 
/* obterPessoas('r2')
    .then(function (resultado) {
        console.log('resultado', resultado)
    })
    .catch(function (error) {
        console.error('DEU RUIM', error)
    })
 */

    //2.Objetivo = convertir arquivo que retorno o teste en modulo
    //e que os outros arquivos consegan visualizar esse modulo.

    //1. exportar o modulo node.js
    module.exports = {
        obterPessoas //2. Vamos reutilizar ese modulo en outro aquivo chamado:1.for-forin-forof.js (copiar codigo) 
    }
    

