let entrada = prompt("Digite um número:");

let numero = Number(entrada);

if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
} else {
    
    if (numero % 2 === 0) {
        alert("O número " + numero + " é Par.");
    } else {
        alert("O número " + numero + " é Ímpar.");
    }
}
