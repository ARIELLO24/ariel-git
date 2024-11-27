import ask from "readline-sync";

console.log("Bem vindo a bancada de trabalho do Minecraft!!!");
console.log("Você precisa de 2 diamantes e 1 graveto para criar uma espada de diamante.");
console.log("Quantos diamantes você tem? ");

const diamantes = ask.questionInt();

console.log("Quantos gravetos você tem?")

const gravetos = ask.questionInt();

if (diamantes > 2 && gravetos > 0) {
    console.log("Você não tem os itens necessários para criar uma espada de diamante.")
} else {
    console.log("Você tem os itens necessários para criar uma espada de diamante.")
}
