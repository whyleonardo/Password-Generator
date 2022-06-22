const slider = document.getElementById('slider')
const sliderDisplayNumber = document.querySelector('.slider-value')
const buttonGenerate = document.getElementById('generate-button')

const passwordContainer = document.getElementById('password-container')
const inputPassword = document.getElementById('password-value')
const buttonCopy = document.getElementById('copy-clipboard')
const buttonReset = document.getElementById('reset')

let newPassword = ''
let passwordIsGenerated = false

// Atualização constante no valor do slider
const showSliderValue = setInterval(() => {
  sliderDisplayNumber.innerHTML = slider.value
}, 10)

// Gerar password
const newPasswordGenerated = () => {
  const charset =
    'abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$$%'
  const charsetArray = charset.split('')
  newPassword = charsetArray.sort(() => Math.random() - 0.5)
  newPassword.length = slider.value
  newPassword = newPassword.join('')

  buttonGenerate.setAttribute('disabled', 'true')

  // esconder a div do menu enquanto o password não foi gerado ainda
  passwordIsGenerated = true
  if (passwordIsGenerated === true) {
    passwordContainer.classList.remove('hidden')
  }

  inputPassword.setAttribute('value', newPassword)

  return newPassword
}

// Copiar o password
function copyPassword() {
  navigator.clipboard.writeText(newPassword)
  alert('Copiado com sucesso')
}

// Mostrar o password
function showPassword() {
  inputPassword.removeAttribute('type')
}

// Resetar o password gerado
function resetPassword() {
  passwordIsGenerated = false
  buttonGenerate.removeAttribute('disabled')
  passwordContainer.classList.add('hidden')
  inputPassword.setAttribute('value', '')
  inputPassword.setAttribute('type', 'password')

  slider.value = 5
}
