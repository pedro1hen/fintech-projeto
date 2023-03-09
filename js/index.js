function validateName(name) {
    if (!name.match(/[a-zA-Z]/)) {
        const error = new Error()
        error.input = 'name'
        throw error
    }
}

function validateEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const error = new Error()
        error.input = 'email'
        throw error
    }
}

function validatePassword(password) {
    if (
        password.length < 8 ||  
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/\d/) ||
        !password.match(/[^a-zA-Z\s0-9]/)
    ) {
        const error =  new Error()
        error.input = 'password'
        throw error
    }
}

function validatePass(pass, confirm) {
    if (pass !== confirm) {
        const error = new Error()
        error.input = 'passwordConfirmation'
        throw error
    }
}

const formInputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password'),
    passwordConfirmation: document.querySelector('#passwordConfirmation')
}

const button = document.querySelector('#criarConta')

button.addEventListener('click', (ev) => {
    ev.preventDefault()

    try {
        validateName(formInputs.name.value)
        formInputs.name.classList.add('success')
        formInputs.name.classList.remove('error')

        validateEmail(formInputs.email.value)
        formInputs.email.classList.add('success')
        formInputs.email.classList.remove('error')

        validatePassword(formInputs.password.value)
        formInputs.password.classList.add('success')
        formInputs.password.classList.remove('error')

        validatePass(formInputs.password.value, formInputs.passwordConfirmation.value)
        formInputs.passwordConfirmation.classList.add('success')
        formInputs.passwordConfirmation.classList.remove('error')
    }
    catch (error) {
        formInputs[error.input].classList.remove('success')
        formInputs[error.input].classList.add('error')
    }
})