const slider = document.getElementById('slider')
const sliderDisplayNumber = document.querySelector('.slider-value')
const buttonGenerate = document.getElementById('generate-button')

const passwordContainer = document.getElementById('password-container')
const inputPassword = document.getElementById('password-value')
const buttonCopy = document.getElementById('copy-clipboard')
const buttonReset = document.getElementById('reset')

const showSliderValue = setInterval(() => {
  sliderDisplayNumber.innerHTML = slider.value
}, 10)

const newPasswordGenerated = () => {
  const charset =
    'abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$$%'
  const charsetArray = charset.split('')
  newPassword = charsetArray.sort(() => Math.random() - 0.5)
  newPassword.length = slider.value

  inputPassword.setAttribute('value', newPassword.join(''))
}

// function copyPassword() {
//   navigator.clipboard.writeText(newPassword)
// }

function showPassword() {
  inputPassword.removeAttribute('type')
}

// setPass()
