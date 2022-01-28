var form = document.querySelector(".formulario")
var botaoEnviar = document.querySelector(".botao-enviar")

botaoEnviar.addEventListener("click", (evento) => {

  evento.preventDefault()

  var nome = document.querySelector("#nome").value
  var cpf = document.querySelector("#cpf").value
  var email = document.querySelector("#email").value
  var senha = document.querySelector("#senha").value
  
  const dado = JSON.parse(localStorage.getItem("dado")) || []

  const dados = {
    nome,
    cpf,
    email,
    senha,
    

  }

  const dadosAtualizados = [...dado, dados]

  localStorage.setItem('dado', JSON.stringify(dadosAtualizados))

  console.log(dado)
  alert("cadastro realizado com sucesso!")
  
})
