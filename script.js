// alert("Bem-Vindo!")

// DECLARAÇÂO DE VARIÁVEIS
// EXISTEM 3 TIPOS DE DELCARAR VARIÁVEL: VAR // LET // CONST

/* var x = 10;

for(var i = 0; i < x; i++){
    //alert("Oi");
    //console.log("Oi")
    document.writeln("Oi" + i)
} */

/* var n1 = parseFloat(prompt("Digite N1: "));
var n2 = parseFloat(prompt("Digite N2: "));
var n3 = parseInt(prompt("Digite N3: "));

var res = n1 + n2 + n3;

console.log("RESULTADO = "+ res); */

/* function hello(){
    var nome = document.getElementById("nome").value;
    alert("Hello " + nome);
} */

function func1(){
    let minhadiv = document.getElementById("header");
    console.log(minhadiv);
    minhadiv.style.backgroundColor = 'blue'
}

function func2(){
    let minhadiv = document.getElementById("header");
    console.log(minhadiv);
    minhadiv.style.backgroundColor = 'red'
}

function func3(){
    let my_span = document.getElementById("texto");
    let input_nome = document.getElementById("nome").value;

    my_span.innerText = input_nome;
}

function receba(x){
    alert(x);
}

function valida(event){

    event.preventDefault(); // Segura o form, não submete o form

    const form = document.getElementById("formulario");

    let login = form.email.value
    let senha = form.senha.value
    let conf_senha = form.confsenha.value

    if(login.length < 5){
        alert("Digite um Email válido!")
        return false
    }
    if(senha.length < 8){
        alert("A senha deve conter no mínimo 8 caracteres")
    }
    if(senha != conf_senha){
        alert("As senhas não batem seu animal de oreia")
        return false
    } else{
        alert("Animal logado com sucesso!")
    }
}

// Função para ativar o efeito de piscar ao passar o mouse
function ativarPiscar() {
    let minhadiv = document.getElementById("header");
    minhadiv.classList.add('piscando');
}

// Função para desativar o efeito de piscar quando o mouse sai
function desativarPiscar() {
    let minhadiv = document.getElementById("header");
    minhadiv.classList.remove('piscando');
}

let minhadiv = document.getElementById("header");
minhadiv.addEventListener("mouseenter", ativarPiscar);
minhadiv.addEventListener("mouseleave", desativarPiscar);