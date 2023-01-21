console.log('hello');
let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupContainer = document.querySelector(".popup__container");
let popupBtnClose = document.querySelector(".popup__close");
let popupBtnSave = document.querySelector(".popup__submit-button");
let formElement  = document.querySelector(".popup__form");
let nameInput  = document.querySelector(".popup__user-name");
let jobInput  = document.querySelector(".popup__user-info");
let profileName = document.querySelector(".profile__user-name");
let profileInfo = document.querySelector(".profile__user-info");

editButton.addEventListener("click", openPopup);

function openPopup(){
  popup.classList.add("popup_opened");
}

popupBtnClose.addEventListener("click", closePopup);

function closePopup(){
  popup.classList.remove("popup_opened");
}

popupBtnSave.addEventListener("click", closePopup);


function handleFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit); 