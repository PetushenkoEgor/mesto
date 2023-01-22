let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupBtnClose = document.querySelector(".popup__close");
let formElement  = document.querySelector(".popup__form");
let nameInput  = document.querySelector(".popup__form-input_user-name");
let jobInput  = document.querySelector(".popup__form-input_user-info");
let profileName = document.querySelector(".profile__user-name");
let profileInfo = document.querySelector(".profile__user-info");

function openPopup(){
  popup.classList.add("popup_opened");
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
}

function closePopup(){
  popup.classList.remove("popup_opened");
}

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", openPopup);
popupBtnClose.addEventListener("click", closePopup);
formElement.addEventListener('submit', handleFormSubmit); 