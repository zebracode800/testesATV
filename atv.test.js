const calculadora = require('./atv');

describe('Testes Simples para a Calculadora', function(){
    
    test('1. Somar 5 + 15 deve ser 20', function(){
        expect(calculadora.somar(5, 15)).toBe(20);
    });

    test('2. Subtrair 15 - 5 deve ser 10', function(){
        expect(calculadora.subtrair(15, 5)).toBe(10);
    });

    test('3. Multiplicar 5 * 3 deve ser 15', function(){
        expect(calculadora.multiplicar(5, 3)).toBe(15);
    });

    test('4. Dividir 15 / 5 deve ser 3', function(){
        expect(calculadora.dividir(15, 5)).toBe(3);
    });

    test('5. Potência de 5^3 deve ser 125', function(){
        expect(calculadora.potencia(5, 3)).toBe(125);
    });

    test('6. Média de 5 e 15 deve ser 10', function(){
        expect(calculadora.media(5, 15)).toBe(10);
    });

    test('7. Porcentagem (5% de 15) deve ser 0.75', function(){
        expect(calculadora.porcentagem(5, 15)).toBe(0.75);
    });
});