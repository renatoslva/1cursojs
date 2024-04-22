function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       res.innerHTML = 'Impossível contar.... \u{1f613}'
       window.alert('[ERRO] Faltam Dados...\u{1f44a}')
      
    }else {
        res.innerHTML = ('Contando: <br>')
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Inválido.... \u{1f44a} Considerando passo 1...')
            p = 1
        }
        if (i < f){
            //contagem crecente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c}º  \u{1f596} `
            }
             
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p ){
                res.innerHTML += `${c}º \u{1f596}`
            }
            
        }    
                    res.innerHTML += `\u{00AE}`
     

        } 

        
    
}