import {initialCards, validationConfig} from "./initalCards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup-profile");
const popupBtnCloseProfile = document.querySelector(".popup__close-icon_profile");
const formElementUserInfo  = document.querySelector(".popup__form-user-info");
const nameInput  = document.querySelector(".popup__form-input_user_name");
const jobInput  = document.querySelector(".popup__form-input_user_info");

const imgInputTitle  = document.querySelector(".popup__form-input_element_name");
const imgInputLink  = document.querySelector(".popup__form-input_element_link");

const profileName = document.querySelector(".profile__user-name");
const profileInfo = document.querySelector(".profile__user-info");
const popupNewItem = document.querySelector(".popup-new-item");
const addButton = document.querySelector(".profile__add-button");
const popupBtnCloseNewItem = document.querySelector(".popup__close-icon_new-item");
const formCard = document.querySelector(".popup__form_new-item");
const conteinerElements = document.querySelector(".elements");

const popupBtnCloseImage = document.querySelector(".popup__close_imgs");
const btnSaveProfile = document.querySelector(".popup__submit-button-save");
const btnCreateProfile = document.querySelector(".popup__submit-button-create");

const popupFullImgs = document.querySelector(".popup-imgs");
const popupImage = document.querySelector(".popup__image");
const popupImageTitle = document.querySelector(".popup__imgs-title");

const validationProfile = new FormValidator(validationConfig, '.popup-profile')
const validationNewItem = new FormValidator(validationConfig, '.popup-new-item')

validationNewItem.enableValidation();
validationProfile.enableValidation();

function openPoupImgs(name, link){ 
  popupImage.alt = name;
  popupImage.src = link;
  popupImageTitle.textContent = name;
  openPopup(popupFullImgs);
}

function createCard(item) {
  const card = new Card( item, '#template-element', openPoupImgs);
  const cardElement = card.generateCard()
  return cardElement
 }
 
 function renderElement(card) {
	conteinerElements.prepend(createCard(card));
};

initialCards.forEach(item => {
  renderElement(item)
})

function addCardsPopup(evt) {
  evt.preventDefault();
  const newCard = createCard( {name: imgInputTitle.value, link: imgInputLink.value} );
  conteinerElements.prepend(newCard);
  closePopup(popupNewItem);
  formCard.reset();
  validationNewItem.toggleButtonState();
}

formCard.addEventListener('submit', addCardsPopup)

function keyHandlerEsc(evt){
  if(evt.key === "Escape"){
    const formOpen = document.querySelector(".popup_opened");
    closePopup(formOpen);
  }
}

editButton.addEventListener("click", () =>{
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
});

formElementUserInfo.addEventListener('submit',(evt) =>{
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopup(popupProfile);
});

addButton.addEventListener("click", () =>{
  openPopup(popupNewItem);
  formCard.reset();
});

popupBtnCloseProfile.addEventListener("click", () =>{
  closePopup(popupProfile) 
});

popupBtnCloseNewItem.addEventListener("click", () =>{
  closePopup(popupNewItem) 
});

popupBtnCloseImage.addEventListener("click",  () =>{
  closePopup(popupFullImgs)
});

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", keyHandlerEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", keyHandlerEsc);
}

popupProfile.addEventListener("click", (e) =>{
  if(e.target===popupProfile || e.target===popupBtnCloseProfile ){
    closePopup(popupProfile);
    validationProfile.resetValidation();
  }
});

popupNewItem.addEventListener("click", (e) =>{
  if(e.target===popupNewItem || e.target===popupBtnCloseNewItem ){
    closePopup(popupNewItem);
    validationNewItem.resetValidation();
  }
});

popupFullImgs.addEventListener("click", (e) =>{
  if(e.target===popupFullImgs || e.target===popupBtnCloseImage){
    closePopup(popupFullImgs);
  }
});
