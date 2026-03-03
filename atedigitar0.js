let soma = 0;
let numero;

do {
    numero = Number(prompt("Digite um número (0 para parar):"));

    if (isNaN(numero)) {
        console.log("Digite um número válido.");
    } else {
        soma += numero;
    }

} while (numero !== 0);

console.log("Soma total: " + soma);
