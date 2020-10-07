function verificar() {
    var inicio = document.getElementById('txt1')
    var pular = document.getElementById('txt2')
    var fim = document.getElementById('txt3')
    var res = document.getElementById('res')

        res.innerHTML = 'Contando: '
        var t1 = Number(inicio.value)
        var t2 = Number(pular.value)
        var t3 = Number(fim.value)

        if(t2 == 0) {
            window.alert('Impossível Calcular')
            window.alert('Iremos considerar o "Pular" valendo 1')
            t2 = 1
        }

        if (t1 < t3) {
            //Contagem Crescente
            for (var c = t1; c <= t3; c += t2) {
                res.innerHTML += `\u{1f449} ${c}`
            }
        } else {
            //Contagem Decrescente
            for (var d = t1; d >= t3; d -= t2) {
                res.innerHTML += `\u{1f449} ${d}`
            }
        }      
            res.innerHTML += '\u{270B}'
    }  


    // emoji seta \u{1f449} emoji stop \u{270B}