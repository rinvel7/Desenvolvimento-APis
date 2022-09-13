//PRINCIPIO: ao consumir API de uma fuente externa, se deve definir:
// - garantizar que sempre vai me retornar as informacoes e o trabalho a partir do resultado dele

const assert = require('assert') //modulo de assercao de node 
const {
    obterPessoas
} = require('./service')

//instalamos o pacote nock , para simular requisiones,
//nock vai interceptar esses pedidos e jogar de volta o que você quer!

const nock = require('nock')//nock intercepta uma requisição GET para uma determinada URL
                            
// OBJ: ir ate STAR WAR e trazer um mapeamento diferente a que ele trae por default

describe('Star Wars Test', function () {
    this.beforeAll(() => {
            const response = {//simulador: operacao vem desde console.log de service.js
                "count":1,"next":null,"previous":null,"results":[{"name":"R2-D2","height":"96","mass":"32","hair_color":"n/a","skin_color":"white, blue","eye_color":"red","birth_year":"33BBY","gender":"n/a","homeworld":"https://swapi.dev/api/planets/8/","films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/","https://swapi.dev/api/films/6/"],"species":["https://swapi.dev/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:11:50.376000Z","edited":"2014-12-20T21:17:50.311000Z","url":"https://swapi.dev/api/people/3/"}]                
            }

        //cada vez que o usuario intenta chamar ao url 
        //pasando esso parametro, ele vai devolver essse response,
            nock('https://swapi.dev/api/people')
            .get('/?search=r2-d2&format=json')
            .reply(200,response)
        })

    it('deve buscar o r2d2 com o formato correto', async () => {
        const expected = [{
            nome: 'R2-D2', 
            peso: '96'
        }]
        const nomeBase = 'r2-d2'
        const resultado = await obterPessoas(nomeBase)  //verifica si o valor que veo de esse resultado e o que se espera (expected)
        assert.deepEqual(resultado, expected) //verifica a igualdade entre dois objetos
      

    })
})