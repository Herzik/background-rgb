const colorCodeElement = document.querySelector('.color-code'),
  colorChangerButton = document.querySelector('.color-changer'),
  container = document.querySelector('.container')

function getRandomNumber() {
  return Math.ceil(Math.random() * 255)
}

function generateRgb() {
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
}

function changeColor() {
  const backgroundColor = generateRgb()
  colorCodeElement.style.color = backgroundColor
  container.style.backgroundColor = backgroundColor
  colorCodeElement.textContent = backgroundColor
}

colorChangerButton.addEventListener('click', changeColor)
