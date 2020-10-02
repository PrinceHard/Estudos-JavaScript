function carregar() {
    var foto = window.document.getElementById('foto')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var msg1 = window.document.getElementById('msg1')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora == 1){
        msg.innerHTML = `Agora são ${hora} hora.`
    }
    if (hora > 0 && hora <=12){
        //BOM DIA!
        img.src='manha.png'
        document.body.style.background = '#e8e596'
        msg1.innerHTML = 'Bom Dia'

    }else if (hora >=13 && hora <18){
        //BOA TARDE!
        img.src='tarde.png'
        document.body.style.background = '#ff8542'
        msg1.innerHTML = 'Boa Tarde'
    }else {
        //BOA NOITE!
       img.src='noite.png'
       document.body.style.background = '#4e4b4a'
       msg1.innerHTML = 'Boa Noite'
       
    }
}