// trabajhar con class


// 2.  readFile() maneira mais simples de ler um arquivo no Node.js:
const {
    readFile
} = require('fs')//fs e um módulo nativo de Node. js que permite interactuar com os arquiivos do sistema.

//3. convertir readFile e uma promise:
// . promisyfy

const {
    promisify //util.promise transfotma uma funcao que trabalha com callback (readFile) para o promise => 4
} = require('util') 

//4.... ate que consigue async/await para poder manipular
const readFileAsync = promisify(readFile)

// Criar metodos auxiliares para ajudar no proceso de obter arquivos:
// . Listar : para chamar 
// . obterDadosArquivo
// . escreverArquivo
class db {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json' // 1. tem que leer o arquivo => 2.
    }
    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())//json.parde convierte um objeto JSON em formato de texto em um objeto Ja

    }
    excreverArquivo() {

    }
    async listar(id) {
        const dados = await this.obterDadosArquivo()
        // se nao passar o id, traz tudo
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados

    }
}
//
module.exports = new db()