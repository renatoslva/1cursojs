function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora São ${hora} horas.`
    if (hora >= 5 && hora <= 12 ){
        //Bom Dia...
        img.src = 'fotos/manha.jpg'
        document.body.style.background = '#fcd441'
    } else if (hora >= 13 && hora <= 18){
        //Boa tarde... 
        img.src = 'fotos/tarde.jpg'
        document.body.style.background = '#fe9a4e'
    }
        else {
            //Boa Noite
            img.src = 'fotos/noite.jpg'
            document.body.style.background = '#060d13'
            
        }

}
