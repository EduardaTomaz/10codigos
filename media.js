let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    console.log("Por favor, digite apenas números válidos.");
} else {
    let media = (nota1 + nota2 + nota3) / 3;

    console.log("Média: " + media.toFixed(2));

    if (media >= 7) {
        console.log("Situação: Aprovado ✅");
    } else if (media >= 5) {
        console.log("Situação: Recuperação ⚠️");
    } else {
        console.log("Situação: Reprovado ❌");
    }
}
