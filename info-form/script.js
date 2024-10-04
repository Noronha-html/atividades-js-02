const btnCadastrar = document.getElementById('cadastrar');

btnCadastrar.addEventListener('click', () => {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('e-mail').value;
    let dataNascimento = document.getElementById('dataNascimento').value;

    document.getElementById('nomeFinal').innerHTML = 'Nome: ' + nome;
    document.getElementById('e-mailFinal').innerHTML = 'E-mail: ' + email;
    document.getElementById('dataNascimentoFinal').innerHTML = 'Data Nascimento: ' + dataNascimento;
});

const btnLimpar = document.getElementById('reset');

btnLimpar.addEventListener('click', () => {
    let nome = '';
    let email = '';
    let dataNascimento = '';

    document.getElementById('nome').value = nome;
    document.getElementById('e-mail').value = email;
    document.getElementById('dataNascimento').value = dataNascimento;

    document.getElementById('nomeFinal').innerHTML = 'Nome: ' + nome;
    document.getElementById('e-mailFinal').innerHTML = 'E-mail: ' + email;
    document.getElementById('dataNascimentoFinal').innerHTML = 'Data Nascimento: ' + dataNascimento;
});
