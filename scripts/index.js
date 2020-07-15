const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.menu__open-popup')
const popupCloseButton = popup.querySelector('.popup__close')
const header = document.querySelector('.header')

const popupToggle = function () {
  console.log('button clicked')
  event.stopPropagation()
  popup.classList.toggle('popup__opened')
}

const closePopupByClickingOverlay = function () {
  if (event.target !== event.currentTarget) { return }
  popupToggle()
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)
popup.addEventListener('click', closePopupByClickingOverlay)

header.addEventListener('click', function () {
  console.log('header clicked')
})


// console.log({
//   popup,
//   popupOpenButton,
//   popupCloseButton
// })
