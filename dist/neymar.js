"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
console.log("                          QUIZ DO NEYMA                               ");
console.log("                                                                      ");
// Pergunta 1
const pergunta1 = readline_sync_1.default.question("Quantos anos tem o Neymar em 2024? : ");
if (pergunta1 === "32") {
    console.log("Você acertou!!!");
    // Pergunta 2
    const pergunta2 = readline_sync_1.default.question("Quantas Champions o Neymar tem? : ");
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
