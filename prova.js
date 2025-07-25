function calcularIngresso(idade, estudante) {
  const precoInteiro = 20;

  if (idade <= 12 || idade >= 60) {
    return precoInteiro / 2; 
  } else if (estudante === true) {
    return precoInteiro * 0.75; 
  } else {
    return precoInteiro; 
  }
}

console.log("Pessoa 1: R$", calcularIngresso(10, false)); // Criança //
console.log("Pessoa 2: R$", calcularIngresso(25, true));  // Estudante //
console.log("Pessoa 3: R$", calcularIngresso(30, false)); // Valor cheio //