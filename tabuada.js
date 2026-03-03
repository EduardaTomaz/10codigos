let numero = prompt("Digite um número para ver a tabuada:");

numero = Number(numero);

if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    console.log("Tabuada do " + numero + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
