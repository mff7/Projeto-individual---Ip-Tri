const desmatamento = document.querySelector(".desmatamento")
const desmatamentoTexto = document.querySelector(".desmatamento__doacao")
const preservacao = document.querySelector(".preservacao")
const preservacaoTexto = document.querySelector(".preservacao__doacao")
const concientizacao = document.querySelector(".concientizacao")
const concientizacaoTexto = document.querySelector(".concientizacao__doacao")
const causas = document.querySelector(".causas-ambientais")

desmatamento.addEventListener('click', () => {

    preservacao.classList.toggle("displaynone")
    concientizacao.classList.toggle("displaynone")
    causas.classList.toggle("alinhaDireita")
    desmatamentoTexto.classList.toggle("displayflex")
})
preservacao.addEventListener('click', () => {

    desmatamento.classList.toggle("displaynone")
    concientizacao.classList.toggle("displaynone")
    causas.classList.toggle("alinhaDireita")
    preservacaoTexto.classList.toggle("displayflex")
})
concientizacao.addEventListener('click', () => {

    desmatamento.classList.toggle("displaynone")
    preservacao.classList.toggle("displaynone")
    causas.classList.toggle("alinhaDireita")
    concientizacaoTexto.classList.toggle("displayflex")
})

