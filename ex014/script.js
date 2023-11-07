function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'Imagens/manhã.png'
        document.body.style.background = '#fbe9b1'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'Imagens/tarde.png'
        document.body.style.background = '#e0955b'
    } else {
        //Boa noite!
        img.src = 'Imagens/noite.png'
        document.body.style.background = '#342b46'
    }
}