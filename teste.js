/* var x = 20
var y = 10

var res = x > 50 ? "Verdade" : "<h1 class='danger'> FALSO ERRRRROU </h1>"

var n1 = parseFloat(prompt("Digite um número: "))
var n2 = parseFloat(prompt("Digite outro número: "))

var z = n1 > n2 ? alert("n1 é maior que n2") : console.log(" Caiu no else da condição ternária ")
console.log(res) */

// Códigos teste //

/* var lista = [33,44,55,67,68,90,111]

console.log( lista.length ) 

if(lista.length < 10){
    alert("lista de compras pequena não compensa")
} else {
    alert("Partiu Goiás")
}

for(var i = 0; i < lista.length; i++){
    console.log(lista[i]);
} */

// Códigos teste //

/* 
console.log(pessoa.nome, pessoa.idade)
console.log(pessoa.fone)

pessoa.fone = "67 3333-3333"
console.log(pessoa.fone)

var pes2 = {}

pes2.nome = "FRED"
pes2.idade = 28
pes2.email = "fred@gmail.com"

console.log(pes2.nome, pes2.idade + " Porque andou de pneu mucho " + pes2.email) */

// Códigos teste //

var pessoa = {
    "nome" : "Thiago",
    "sobrenome" : "Almeida",
    "idade" : 32,
    "email" : "thiagoalmeida@live.com",
    "fone" : null,
    "addFone" : function(v){
        this.fone = v
        console.log("Telefone adicionado com sucesso!! " + this.fone)
    },
    "getDados" : function(){
        return this.nome + this.sobrenome + " tem " + this.idade + " contato: " + this.email
    }
}

var res = pessoa.getDados()

console.log(res)

pessoa.addFone("67 999999-888")

/* pes3 = {
    "nome" : "Thiago Almeida",
    "hobbie" : function(v) {
        return this.nome + " curte " + v
    }
}

var res = pes3.hobbie(" Heineken ")

console.log(res) */