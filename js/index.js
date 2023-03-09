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

function removeClassError() {
    formInputs.name.classList.remove('error')
    formInputs.email.classList.remove('error')
    formInputs.password.classList.remove('error')
    formInputs.passwordConfirmation.classList.remove('error')
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    try {
        validateName(formInputs.name.value)
        validateEmail(formInputs.email.value)
        validatePassword(formInputs.password.value)
        validatePass(formInputs.password.value, formInputs.passwordConfirmation.value)

        removeClassError()
        form.reset()
    }
    catch (error) {
        formInputs[error.input].classList.add('error')
    }
})

const closeModal = document.querySelector('#closeModalPrimeiro')
closeModal.addEventListener('click', () => {
    removeClassError()
    form.reset()
})