const {
    deepEqual, ////deepEqual verifica a igualdade entre dois objeto actual vs expected
    ok //ok valida que os result sejan true ou false.
} = require('assert') 

const db = require('./db')
const DEFAULT_ITEM_CADASTRAR = {
    nome: 'FLash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulacao de Herois', () => {

    it('Deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await db.listar(expected.id)
        //ok(resultado, expected)
        deepEqual(resultado, expected)
    })

   /*  it('deve cadastrar um heroi, usando arquivos', async() => {
        const expected = DEFAULT_ITEM_CADASTRAR

        ok(null,expected) 
    })*/
})