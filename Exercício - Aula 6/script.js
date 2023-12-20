let simular = document.getElementById("simular");

simular.onclick = () => {
  let valor = parseInt(
    prompt("Digite o valor de empréstimo que deseja solicitar:")
  );
  let parcelas = parseInt(
    prompt("Digite a quantidade de parcelas que deseja dividir o valor:")
  );
  let taxa = valor * 0.08;
  let valorParcela = valor / parcelas + taxa;
  let valorFinal = valorParcela * parcelas;

  for (let i = 1; i < parcelas + 1; i++) {
    console.log(valorParcela * i);
  }
  alert(
    "O valor final do empréstimo de R$ " +
      valor +
      " em " +
      parcelas +
      " parcelas será: R$ " +
      valorFinal
  );
};
