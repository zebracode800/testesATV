const calculadora = require('./atv'); 

describe('Testes de Unidade para a Calculadora!!!', () => {

    test('Somar 5 + 15 deve ser 20', () => {
        expect(calculadora.somar(5, 15)).toBe(20);
    });

    test('Subtrair 15 - 5 deve ser 10', () => {
        expect(calculadora.subtrair(15, 5)).toBe(10);
    });

    test('Multiplicar 5 * 3 deve ser 15', () => {
        expect(calculadora.multiplicar(5, 3)).toBe(15);
    });

    test('Dividir 15 / 5 deve ser 3', () => {
        expect(calculadora.dividir(15, 5)).toBe(3);
    });
    
    test('Potência: 5^3 deve ser 125', () => {
        expect(calculadora.elevarAPotencia(5, 3)).toBe(125); 
    });

    test('Média: (5 e 15) deve ser 10', () => {
        expect(calculadora.calcularMedia(5, 15)).toBe(10);
    });

    test('Porcentagem: 5% de 15 deve ser 0.75', () => {
        expect(calculadora.calcularPorcentagem(5, 15)).toBe(0.75);
    });

    test('Deve retornar Infinity ao dividir por zero', () => {
        expect(calculadora.dividir(10, 0)).toBe(Infinity);
    });
});