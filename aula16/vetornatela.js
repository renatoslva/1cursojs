//let valores = [2, 5, 9, 7, 8, 3, 1, 4, 6]
//num.push(1)
//valores.sort() /*para organizar os valores*/
/*for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
 /*for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
 }*/
 let num = [5, 6, 7, 2, 4]
 num.push(1)
 num.sort()
 console.log(num)
 console.log(`O vetor tem ${num.length} posição`)
 console.log(`O primeiro valor do vetor é ${num[0]}`)
 let pos = num.indexOf(6)
 if (pos == -1){
    console.log('O valor não foi encontrado....')
 } else {
    console.log(`O valor está na posição ${pos}`)
 }

