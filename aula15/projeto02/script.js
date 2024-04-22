function  verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || (fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente...')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homen'
            if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'fotos/foto-homenbb.jpg')
        }  else if (idade < 25){
            //jovem
            img.setAttribute('src', 'fotos/foto-homenjovem.jpg')
        }  else if (idade < 50){
             //adulto
             img.setAttribute('src', 'fotos/foto-adultohomen.jpg')
        }else {
            //idoso 
            img.setAttribute('src', 'fotos/foto-homenvelho.jpg')}
          
        res.innerHTML = `Detectamos ${gênero} com ${idade} Anos.`
        res.appendChild(img) }
     
        else if (fsex[1].checked){
        gênero = 'Mulher'
        if (idade >=0 && idade < 10)
        //criança
          img.setAttribute('src', 'fotos/foto-mulherbb.jpg')
     
     else if (idade < 25){
        //jovem
         img.setAttribute('src', 'fotos/foto-mulherjovem.jpg')
     } 
     else if (idade < 50){
        //adulto m 
         img.setAttribute('src', 'fotos/foto-adultomulher.jpg')
     }
     else {
        //idoso M
         img.setAttribute('src', 'fotos/foto-mulhervelha.jpg')
     }


     /*res.style.textAlign = 'center' para centralizar sem precisar do css
     porem esse projeto ja esta centralizado no css*/
     res.innerHTML = `Detectamos ${gênero} com ${idade} Anos.`
     res.appendChild(img)
    
}
    }

}
