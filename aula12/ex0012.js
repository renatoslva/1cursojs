var hora = 5
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




var agora = new Date()
var hora = agora.getHours()
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