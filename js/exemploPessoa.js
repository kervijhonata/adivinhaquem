// Object literals
var abraao = {
  nome: "Paulo Abraão",
  idade: 34,
  estudante: true
}

console.log(abraao)

var kervi = {
  nome: "Kervi Jhonata",
  idade: 23,
  estudante: false
}


// Constructor
function Pessoa(nome, idade, estudante){
  return {
    nome: nome,
    idade: idade,
    estudante: estudante
  }
}

abraao = new Pessoa("Paulo Abraão",17,true)
kervi = new Pessoa("Kervi Jhonata",23,false)