var ask = require("readline-sync");
console.log("                          QUIZ DO NEYMA                               ");
console.log("                                                                      ");
// Pergunta 1
var pergunta1 = ask.question("Quantos anos tem o Neymar em 2024? : ");
if (pergunta1 === "32") {
    console.log("Você acertou!!!");
    // Pergunta 2
    var pergunta2 = ask.question("Quantas Champions o Neymar tem? : ");
    if (pergunta2 === "1") {
        console.log("Você acertou novamente!!!");
    }
    else {
        console.log("Resposta errada! O Neymar tem 1 Champions League.");
    }
}
else {
    console.log("Se você não sabe nem isso, merece se retirar por favor!!!");
}
