var agora = new Date()
var DiaSem = agora.getDay()
var agora = new Date()
var hora = agora.getHours()
  console.log(`Hoje é o ${DiaSem}ª da semana Bora Falta pouco!!`)

console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 5 && hora <= 12){
console.log('Boa Dia !')
} 
else if (hora >= 13 && hora <= 18) {
    console.log('Boa tarde !')
}
else if (hora > 19 ){
    console.log('Boa noite')
}
 else if  (hora >= 0 && hora <= 5 ) {
    console.log('Boa Madrugada')
}

switch(DiaSem){
    case 0:
        console.log('Hoje é domingo')
        break
    case 1:
        console.log('Hoje é Segunda')
        break
    case 2: 
        console.log(' Hoje é Terça')
        break
    case 3:
        console.log('Hoje é Quarta')
        break
    case 4:
        console.log(' Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta Sextollllll')
        break
    case 6:
        console.log('Hoje é Sabado')
        break
    default:
        console.log('[ERRO] Dia Inválido!')
        break
}