let contadorPositivos = 0;

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt("Digite o " + i + "º número:"));

    if (isNaN(numero)) {
        console.log("Valor inválido. Tente novamente.");
        i--; // repete a mesma posição
    } else if (numero > 0) {
        contadorPositivos++;
    }
}

console.log("Quantidade de números positivos: " + contadorPositivos);
