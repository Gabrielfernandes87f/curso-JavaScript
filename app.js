// AND, OR, NOT

// AND = &&, OR = ||, NOT = !

var sexo = 'f'

if (!sexo === 'M') {
    console.log('sexo Masculino')

} else if (sexo === 'F' || 'f'){
    console.log('sexo feminino')

} else {
    console.log('valor inválido')
}

// a sinal ! exclamação inverte o valor false vira true e vice versa

var isActive = true
isActive = !isActive

console.log(isActive)