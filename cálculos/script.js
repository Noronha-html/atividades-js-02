
const btnSoma = document.getElementById('soma');

btnSoma.addEventListener('click', () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let soma = parseFloat(num1) + parseFloat(num2);

    document.getElementById('resultado').innerHTML = 'Resultado: ' + soma;
});

const btnSub = document.getElementById('subtracao');

btnSub.addEventListener('click', () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let subtracao = parseFloat(num1) - parseFloat(num2);

    document.getElementById('resultado').innerHTML = 'Resultado: ' + subtracao;
});

const btnMul = document.getElementById('multiplicacao');

btnMul.addEventListener('click', () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let multiplicacao = parseFloat(num1) * parseFloat(num2);

    document.getElementById('resultado').innerHTML = 'Resultado: ' + multiplicacao;
});

const btnDiv = document.getElementById('divisao');

btnDiv.addEventListener('click', () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let divisao = parseFloat(num1) / parseFloat(num2);

    document.getElementById('resultado').innerHTML = 'Resultado: ' + divisao;
});