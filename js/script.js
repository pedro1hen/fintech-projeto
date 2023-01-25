const nome = document.getElementById('name')
const email = document.getElementById('email')
const senha = document.getElementById('password')
const confirmacaoSenha = document.getElementById('passwordConfirmation')
const criarConta = document.getElementById('criarConta')

function verificarSenha(ev) {
    ev.preventDefault()
    if (senha.value !== confirmacaoSenha.value) {
        alert('Senhas não conferem!')
    }
}

function verificarBranco(ev) {
    ev.preventDefault()
    if (nome.value === '') {
        nome.classList.add('emBranco')
    }
    else {
        nome.classList.remove('emBranco')
    }

    if (email.value === '') {
        email.classList.add('emBranco')
    }
    else {
        email.classList.remove('emBranco')
    }

    if (senha.value === '') {
        senha.classList.add('emBranco')
    }
    else {
        senha.classList.remove('emBranco')
    }

    if (confirmacaoSenha.value === '') {
        confirmacaoSenha.classList.add('emBranco')
    }
    else {
        confirmacaoSenha.classList.remove('emBranco')
    }
}

criarConta.addEventListener('click', verificarSenha)
criarConta.addEventListener('click', verificarBranco)