let numero = Number(prompt("Digite um número inteiro positivo:"));

if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    console.log("Por favor, digite um número inteiro positivo válido.");
} else {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log("Fatorial de " + numero + " é: " + fatorial);
}
