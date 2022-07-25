var isActive = true
var msg = ''

if (isActive) {
    msg = 'está ativo'
} else {
   msg = 'não está ativo'
}

console.log(msg)

var dispositivo = 'mobile'
var logado = true
var names = 'Gabriel'
var userMail = 'Gabriel@gmail.com'

var desk = {
    dispositivo: dispositivo,
    logado: logado,
    name: names,
    userMail: userMail

}

if (desk.logado) { 
    console.log('acesso permitido')
} else {
    console.log('acesso negado')
}


console.log(desk)

var sinal = 'verde'

var statusSin = ''

switch (sinal) {

    case 'verde':
        statusSin = 'pode passar, sinal verde'
        break;

    case 'vermelho':
        statusSin = 'pare, sinal vermelho'
        break;
        
    default:
        statusSin = 'valor inválido'
}
console.log(statusSin)