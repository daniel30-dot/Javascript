function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem progressiva
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p)
                res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }

}

/*if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
      res.innerHTML = "Impossível contar!";
  } else {
      res.innerHTML = "Contando: ";
      if (inicio < fim) {
          for (var i = inicio; i <= fim; i += passo) {
              res.innerHTML += i + " ";
          }
      } else {
          for (var i = inicio; i >= fim; i -= passo) {
              res.innerHTML += i + " ";
          }
      }
  }*/
