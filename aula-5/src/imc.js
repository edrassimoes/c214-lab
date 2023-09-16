function calcularIMC (peso, altura) {
    // Validação.
    if (altura === 0) {
        return 'NaN'
    }

    const alturaMetros = altura/100

    return (peso / (alturaMetros * alturaMetros)).toFixed(2)

}

function calcularPesoIdeal (peso, altura) {

    const imc = calcularIMC(peso, altura)

    let classificacao = ''

    if (imc === 'NaN') {
        return 'NaN'
    }

    if (imc < 18.5) {
        classificacao = 'abaixo do peso'
    } else if (18.5 <= imc <= 24.9) {
        classificacao = 'peso normal'
    } else if (25 <= imc <= 29.9) {
        classificacao = 'sobrepeso'
    } else if (30 <= imc <= 34.9) {
        classificacao = 'obesidade grau I'
    } else if (35 <= imc <= 39.9) {
        classificacao = 'obesidade grau II (severa)'
    } else if (imc >= 40) {
        classificacao = 'obesidade grau III (mórbida)'
    }

    return classificacao

}


// Módulo responsável pela exportação da função para coleta no teste.
module.exports = {
    calcularIMC,
    calcularPesoIdeal
}
