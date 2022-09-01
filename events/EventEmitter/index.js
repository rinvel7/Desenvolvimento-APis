const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function (click) {
    console.log('um usuario clicou', click)
})


 /* meuEmissor.emit(nomeEvento, 'na barra de rolagem')
 meuEmissor.emit(nomeEvento, 'no ok')

 let count = 0
 setInterval(function () {
     meuEmissor.emit(nomeEvento, 'no ok' + (count++))

 }, 1000) */

 const stdin =  process.openStdin() //stdin: ouvir a entrada do usuário
 stdin.addListener('data', function(value) {//add.Listener: adiciona um ouvinte que executará uma função de retorno de chamada personalizada em resposta à alteração do estado da consulta
    console.log(`Voce digitou: ${value.toString().trim()}`)//value.toString: use para converter um objeto string em uma string.trim: remove espaços em branco de ambos os lados de uma string.
 })