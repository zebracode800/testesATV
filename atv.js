
const prompt = require("prompt-sync")();
const calculadora = require('./atv'); 

let fim = 0;

console.log("+-**--+ Bem-vinda(o) +--**-+\n+---+ Calculadora +---+\n\n");

while (!fim) {
    let a, b, c;
    let resposta;
    let continuar;

    a = Number(prompt('Número -> '));

    console.log("\n[1]Somar / [2]Subtrair / [3]Multiplicar / [4]Dividir \n[5]Potencia / [6]Media / [7]Porcentagem");
    resposta = Number(prompt('-> '));

    b = Number(prompt('\n2° número -> '));

    switch (resposta) {
        case 1:
            c = calculadora.somar(a, b);
            console.log(`\n${a} + ${b} = ${c}`);
            break;
        case 2:
            c = calculadora.subtrair(a, b);
            console.log(`\n${a} - ${b} = ${c}`);
            break;
        case 3:
            c = calculadora.multiplicar(a, b);
            console.log(`\n${a} * ${b} = ${c}`);
            break;
        case 4:
            if (b === 0) {
                 console.log("\nErro: Divisão por zero não é permitida.");
                 break;
            }
            c = calculadora.dividir(a, b);
            console.log(`\n${a} / ${b} = ${c}`);
            break;
        case 5:
            c = calculadora.potencia(a, b);
            console.log(`\n${a} ^${b} = ${c}`);
            break;
        case 6:
            c = calculadora.media(a, b);
            console.log(`\n${a} + ${b} / 2 = ${c}`);
            break;
        case 7:
            c = calculadora.porcentagem(a, b);
            console.log(`\n${a}% de ${b} = ${c}`);
            break;
        default:
            console.log("\nOpção de operação inválida. Tente novamente.");
    }

    console.log("\nContinuar? [sim(s) / nao(n)]");
    continuar = prompt("-> ").toLowerCase();
    
    if (continuar == "nao" || continuar == "n" || continuar == "nn") {
        fim = 1;
        console.log("\nObrigada(o) por usar a calculadora! 👋");
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function potencia(a, b) {
    return a ** b;
}

function media(a, b) {
    return (a + b) / 2;
}

function porcentagem(a, b) {
    return (a * b) / 100;
}

module.exports = { somar, subtrair, multiplicar, dividir, potencia, media, porcentagem };