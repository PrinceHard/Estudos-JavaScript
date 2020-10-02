function verificar() {
    var data = new Date ()
    var year = data.getFullYear()
    var ano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var sex = document.getElementsByName('radsex')
    var genero = ''
    var idade = year - Number(ano.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (ano.value.length == 0 || ano.value > year){
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    }else{
        if (sex[0].checked) {
            genero = 'Masculino'

            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Menino.png')  
            }else if (idade <24){
                //Jovem
                img.setAttribute('src', 'Garoto.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'Homem.png')
            }else{
                //Idoso
                img.setAttribute('src', 'Idoso.png')
            }            
            
        }else if (sex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Menina.png')
            }else if (idade <24){
                //Jovem
                img.setAttribute('src', 'Garota.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'Mulher.png')
            }else{
                //Idoso
                img.setAttribute('src', 'Idosa.png')
            }            
        }
        res.innerHTML = `Dectamos uma pessoa do sexo ${genero}, com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}