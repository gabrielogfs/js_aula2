// Introdução
function introduction() {
  let name = prompt("Digite seu nome: ");
  alert(`Olá, ${name}!
Seja bem vindo ao nosso mostruário!`);
}
introduction();

// Classe construtora

class createCar {
  constructor(id, marca, modelo, cor, ano, valor) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.ano = ano;
    this.valor = valor;
  }
}

// Mercedes

const carM1 = new createCar(
  0,
  "Mercedes-Benz",
  "GLB 200 Progressive",
  "Branco",
  2024,
  389950
);
const carM2 = new createCar(
  1,
  "Mercedes-Benz",
  "EQC 400",
  "Preto Obsidian",
  2024,
  708900
);
const carM3 = new createCar(
  2,
  "Mercedes-Benz",
  "GLA 200 AMG Line",
  "Branco",
  2024,
  369950
);

// BMW

const carB1 = new createCar(3, "BMW", "i4", "Azul", 2024, 432950);
const carB2 = new createCar(4, "BMW", "iX1", "Branco", 2024, 421950);
const carB3 = new createCar(5, "BMW", "iX3", "Preto Obsidian", 2024, 500950);

let glb200 = document.getElementById("glb200");
let eqc400 = document.getElementById("eqc400");
let gla200 = document.getElementById("gla200");
let i4 = document.getElementById("i4");
let ix1 = document.getElementById("ix1");
let ix3 = document.getElementById("i3");


glb200.onclick = () => {
    alert("Este é o " + carM1.modelo + " da " + carM1.marca + ". Modelo ano " + carM1.ano + " na cor " + carM1.cor + " no valor de R$ " + carM1.valor.toFixed(2))
};
eqc400.onclick = () => {
    alert("Este é o " + carM2.modelo + " da " + carM2.marca + ". Modelo ano " + carM2.ano + " na cor " + carM2.cor + " no valor de R$ " + carM2.valor.toFixed(2))
};
gla200.onclick = () => {
    alert("Este é o " + carM3.modelo + " da " + carM3.marca + ". Modelo ano " + carM3.ano + " na cor " + carM3.cor + " no valor de R$ " + carM3.valor.toFixed(2))
};
i4.onclick = () => {
    alert("Este é o " + carB1.modelo + " da " + carB1.marca + ". Modelo ano " + carB1.ano + " na cor " + carB1.cor + " no valor de R$ " + carB1.valor.toFixed(2))
};
ix1.onclick = () => {
    alert("Este é o " + carB2.modelo + " da " + carB2.marca + ". Modelo ano " + carB2.ano + " na cor " + carB2.cor + " no valor de R$ " + carB2.valor.toFixed(2))
};
ix3.onclick = () => {
    alert("Este é o " + carB3.modelo + " da " + carB3.marca + ". Modelo ano " + carB3.ano + " na cor " + carB3.cor + " no valor de R$ " + carB3.valor.toFixed(2))
};
