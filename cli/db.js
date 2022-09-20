// trabajhar con class



const {
    readFile, // 2.  readFile() maneira mais simples de ler um arquivo no Node.js:
    writeFile //writeFile() La forma más fácil de escribir en archivos en Node . js
} = require('fs')//fs e um módulo nativo de Node. js que permite interactuar com os arquiivos do sistema.

//3. convertir readFile e uma promise:
// . promisyfy

const {
    promisify //util.promise transfotma uma funcao que trabalha com callback (readFile) para o promise => 4
} = require('util') 

//4.... ate que consigue async/await para poder manipular
//convertir metodos a promese
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

// Criar metodos auxiliares para ajudar no proceso de obter arquivos:
// . Listar : para chamar 
// . obterDadosArquivo
// . escreverArquivo
class db {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json' // 1. tem que leer o arquivo => 2.
    }
    
    //LISTAR DADOS
    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())//json.parde convierte um objeto JSON em formato de texto em um objeto Ja

    }
    //ESCREVER DADOS: receve e vai salvar informacoes
    async excreverArquivo(dados) {
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))//Manipalacao de dados (writeFile) serao guaradaos en this.NOME_ARQUIVO e deve ser em formato de texto (JSON.stringify)
        return true 
    }

    async cadastrar(heroi) {
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now();//generar um id 
        /**OBJETIVO: concatenar/juntar os objetos nome e poder com o id
         * {
         * nome: Flash,
         * poder: Velocidade
         * }
         * 
         * {
         * id: 12345678
         * }
         * {OBJETIVO
         * nome: Flash,
         * poder: Velocidade,
         * id: 1
         * }
         */
        
        //TECNICA JS PARA JUNTAR/CONCATENAR 
        //Sirve para objetos e arrays
        //OBJETOS
        const heroiComId = { 
            id,
            ...heroi
        }
        //ARRAYS
         const dadosFinal = [
            ...dados,
            heroiComId
         ] 
         /**
          * [
          * {
          * nome: Flash
          * }
          * ]
          * 
          * {
          * nome: Batman
          * }
          * OBJETIVO: MAS POSICOES
          * [
          * {
          * nome: Flash
          * },
          * {
          * nome: Batman
          * }
          * ]
          *  
          */

         const resultado = await this.excreverArquivo(dadosFinal)
         return resultado;
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