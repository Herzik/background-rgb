const colorCodeElement = document.querySelector('.color-code'),
  colorChangerButton = document.querySelector('.color-changer'),
  container = document.querySelector('.container')

function changeColor() {
  const backgroundColor = `rgb(${Math.ceil(Math.random(9) * 100)}, ${Math.ceil(
    Math.random(9) * 100
  )}, ${Math.ceil(Math.random(9) * 100)})`
  colorCodeElement.style.color = backgroundColor
  container.style.backgroundColor = backgroundColor
  colorCodeElement.textContent = backgroundColor
}

colorChangerButton.addEventListener('click', changeColor)
