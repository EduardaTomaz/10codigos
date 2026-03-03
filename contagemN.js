let numero = Number(prompt("Digite um número inteiro positivo:"));

if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
    console.log("Por favor, digite um número inteiro positivo válido.");
} else {
    console.log("Contagem de 1 até " + numero + ":");
    
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}
