function calculoIngresso(idade, estudante) {
  const precoInteiro = 20;

  if (idade <= 12 || idade >= 60) {
    return precoInteiro / 2; 
  } else if (estudante === true) {
    return precoInteiro * 0.75; 
  } else {
    return precoInteiro; 
  }
}

console.log("Pessoa 1: R$", calculoIngresso(10, false)); // Criança //
console.log("Pessoa 2: R$", calculoIngresso(25, true));  // Estudante //
console.log("Pessoa 3: R$", calculoIngresso(30, false)); // Valor cheio //
