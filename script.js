let numero1 = document.getElementById("numero1")
let numero2 = document.getElementById("numero2")

let soma = document.getElementById("soma");
let subtr = document.getElementById("subtr");
let multip = document.getElementById("multip");
let divis = document.getElementById("divis");

let resultado = document.getElementById("resultado");

soma.onclick = () => {
    let opresult = parseInt(numero1.value) + parseInt(numero2.value);
    resultado.innerText = "O resultado é: " + opresult;
};

subtr.onclick = () => {
    let opresult = parseInt(numero1.value) - parseInt(numero2.value);
    resultado.innerText = "O resultado é: " + opresult ;
};

multip.onclick = () => {
    let opresult = parseInt(numero1.value) * parseInt(numero2.value);
    resultado.innerText = "O resultado é: " + opresult;
};

divis.onclick = () => {
    let opresult = parseInt(numero1.value) / parseInt(numero2.value);
    resultado.innerText = "O resultado é: " + opresult;
};

let saudacao = () => {
    let nome = prompt("Insira seu nome:");
    alert(`Olá ${nome}, seja bem vindo!
Se divirta fazendo alguns cálculos :) `)
};

saudacao()
