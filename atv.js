const prompt = require("prompt-sync")();
const calculadora = require('./calculadora'); // Importa o módulo de cálculo

let encerrar = 0; // 0 = false (falso) / 1 = true (verdadeiro)!!!!

console.log("+-**--+ Bem-vinda(o) +--**-+\n+---+ Calculadora Concisa +---+\n\n");

while (!encerrar){
    let num1, num2, res;
    let opc;
    let continuar;  

    num1 = Number(prompt('Primeiro Número -> '));

    console.log("\n[1]Somar / [2]Subtrair / [3]Multiplicar / [4]Dividir \n[5]Potencia / [6]Media / [7]Porcentagem");
    opc = Number(prompt('Selecione a operação (1-7) -> '));

    num2 = Number(prompt('\nSegundo número -> '))
    
    switch(opc){
        case 1:
            res = calculadora.somar(num1, num2);
            console.log(`\n${num1} + ${num2} = ${res}`);
        break;
        case 2:
            res = calculadora.subtrair(num1, num2);
            console.log(`\n${num1} - ${num2} = ${res}`);
        break;
        case 3:
            res = calculadora.multiplicar(num1, num2);
            console.log(`\n${num1} * ${num2} = ${res}`);
        break;
        case 4:
            if (num2 === 0) {
                console.log("\nErro: Divisão por zero não é permitida.");
                break;
            }
            res = calculadora.dividir(num1, num2);
            console.log(`\n${num1} / ${num2} = ${res}`);
        break;
        case 5:
            res = calculadora.elevarAPotencia(num1, num2);
            console.log(`\n${num1} ^${num2} = ${res}`);
        break;
        case 6:
            res = calculadora.calcularMedia(num1, num2);
            console.log(`\n(${num1} + ${num2}) / 2 = ${res}`);
        break;
        case 7:
            res = calculadora.calcularPorcentagem(num1, num2);
            console.log(`\n${num1}% de ${num2} = ${res}`);
        break;
        default:
            console.log("\nOpção de operação inválida. Tente novamente.");
    }

    console.log("\nContinuar? [sim(s) / nao(n)]");
    continuar = prompt("-> ").toLowerCase();
    
    if (continuar == "nao" || continuar == "n" || continuar == "nn") {
        encerrar = 1;
        console.log("\nObrigada(o) por usar a calculadora! 👋");
    }
}

function somar(n1, n2){
    return n1 + n2
}

function subtrair(n1, n2){
    return n1 - n2
}

function multiplicar(n1, n2){
    return n1 * n2
}

function dividir(n1, n2){
    return n1 / n2
}

function elevarAPotencia(base, expoente){
    return base ** expoente
}

function calcularMedia(v1, v2){
    return (v1 + v2) / 2
}

function calcularPorcentagem(percentual, total){
    return (percentual * total) / 100
}

module.exports = {somar, subtrair, multiplicar, dividir, elevarAPotencia, calcularMedia, calcularPorcentagem};