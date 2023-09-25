function idade() {
  const idadeUsuario = prompt("Digite sua idade");
  const novaIdate = parseInt(idadeUsuario) + 10;

  printIdade(novaIdate);
}

function printIdade(idade) {
  const texto = `Agora eu sei qual é a sua verdadeira idade, você tem ${idade}`;

  console.log(texto);
}

idade();
