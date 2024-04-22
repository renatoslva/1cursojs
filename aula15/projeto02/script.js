function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Por favor, digite um número...')
    }else{
        let n = Number(num.value)
        let c =1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.value = `tab${c}`/*isso é para mostar tab 1 tab 2 e assim sucessivamente para o javascript não faz tanto sentido mas para outras linguagem tem muita precisão*/
            tab.appendChild(item)
            c++
        }
            

    }
}