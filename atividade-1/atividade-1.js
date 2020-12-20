// funcao que recebe um booleano soma: caso seja verdadeiro irá somar os dois valores e caso seja falso irá subtrair
function somaOuSubtrai(soma, x, y) {
    if (soma) {
        return x + y;
    } else {
        return x - y;
    }
}

// comportamento esperado
console.log('Comportamento esperado: ', somaOuSubtrai(false, 3, 1));

// comportamento inesperado gerado por conta da tipagem fraca:
// uma string (nao vazia) é um valor truthy, ou seja, irá retornar verdadeiro quando convertido para booleano
console.log('Comportamento inesperado: ', somaOuSubtrai('false', 3, 1));