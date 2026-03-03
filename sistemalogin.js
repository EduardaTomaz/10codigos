let usuarioCorreto = "admin";
let senhaCorreta = "1234";
let tentativas = 0;
let acessoLiberado = false;

while (tentativas < 3) {
    let usuario = prompt("Digite o usuário:");
    let senha = prompt("Digite a senha:");

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        console.log("Login realizado com sucesso! ✅");
        acessoLiberado = true;
        break;
    } else {
        tentativas++;
        console.log("Usuário ou senha incorretos. Tentativa " + tentativas + " de 3.");
    }
}

if (!acessoLiberado) {
    console.log("Acesso bloqueado após 3 tentativas ❌");
}
