const value1 = true;
const value2 = false;

console.log(value1 == value2);

// Thrusty / Falsy -> Variáveis vazias ou com valor 0, se submeter
// a um teste lógico, se tornarão um tipo boolean (thrusty/falsy)

// Teste lógico 1
if (value1) {
    console.log('verdadeiro')
}else{
    console.log('falso')
}

// Teste lógico 2
if (value1) console.log('verdadeiro');

// Teste lógico 3
const resultado = value1 ? 'verdadeiro' : 'falso';

console.log(resultado);