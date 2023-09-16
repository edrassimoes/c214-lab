const { expect } = require('chai');
const { calcularIMC } = require('../src/imc.js');
const { calcularPesoIdeal } = require('../src/imc.js');

describe('Calculadora de IMC', () => {

    it('Calculadora deve rodar tranquilo', () => {
        const peso = 80; // 80 kg
        const altura = 180; // 180 cm

        const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal(IMEsperado);
    });

    it('altura = 0, entrada inadequada', () => {
        const peso = 70; // 70 kg
        const altura = 0; // 0 cm

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('NaN');
    });

    it('Classificacao', () => {
        const peso = 90; // 80 kg
        const altura = 175; // 180 cm

        const classificacaoCalculada = calcularPesoIdeal(peso, altura)

        expect(classificacaoCalculada).to.equal('peso normal')
    });

    it('Classificacao com altura = 0', () => {
        const peso = 90; // 80 kg
        const altura = 0; // 180 cm

        const classificacaoCalculada = calcularPesoIdeal(peso, altura)

        expect(classificacaoCalculada).to.equal('NaN')
    });

});