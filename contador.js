function contar(){ //documento de chamada no HTML
   //variaveis globais
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo document.getElementById('txtp')
  let res = document.getElementById('res')
  
  //estrutura de repetição
  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Não é possível contar!'
    //window.alert('[ERRO] Cade os dados?')
  } else {
    res.innerHTML = 'contando:' <br>
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0){
      window.alert('Passo inválido! Considere o PASSO 1')
      p = 1
      }
      //Contagem crescente
      if (i < f){ 
      for(let c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F47E} `
        }
      }else {
        // contatem regressiva
        for(let c i; c >= f; c-=p){
          res.innerHTML += `${c} \u{1F449}`
        }
      }
    }
    res.innterHTML += `\u{1F3C1}`
    }
  }
