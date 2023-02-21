const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup-profile");
const popupBtnCloseProfile = document.querySelector(".popup__close-icon_profile");
const formElementUserInfo  = document.querySelector(".popup__form-user-info");
const nameInput  = document.querySelector(".popup__form-input_user_name");
const jobInput  = document.querySelector(".popup__form-input_user_info");
const profileName = document.querySelector(".profile__user-name");
const profileInfo = document.querySelector(".profile__user-info");
const popupNewItem = document.querySelector(".popup-new-item");
const addButton = document.querySelector(".profile__add-button");
const popupBtnCloseNewItem = document.querySelector(".popup__close-icon_new-item");
const formCard = document.querySelector(".popup__form_new-item");
const conteinerElements = document.querySelector(".elements");
const templateElement = document.querySelector("#element").content;
const imageElement = document.querySelector(".element__image");
const headingElement = document.querySelector(".element__text");
const cardImage = document.querySelector(".popup__image");
const cardTitle = document.querySelector(".popup__imgs-title");
const popupImage = document.querySelector(".popup-imgs");
const popupBtnCloseImage = document.querySelector(".popup__close_imgs");
const btnSaveProfile = document.querySelector(".popup__submit-button-save");
const btnCreateProfile = document.querySelector(".popup__submit-button-create");

function createCard(item) {
  const card = templateElement.querySelector(".element").cloneNode(true);
  card.querySelector('.element__text').textContent = item.name;
  const newCardImage = card.querySelector(".element__image");
  newCardImage.src = item.link;
  newCardImage.alt = item.name;

  const btnLike = card.querySelector(".element__btn-like");
  const btnTrash = card.querySelector(".element__btn-trash");

  btnLike.addEventListener('click', function(evt){
    btnLike.classList.toggle("element__btn-like_active");
  });

  btnTrash.addEventListener('click', function(evt){
    card.remove();
  });

  card.querySelector(".element__button-image").addEventListener('click', (e) =>{
    openPopup(popupImage);
    console.log(e.target);
    cardImage.src = e.target.src
    cardImage.alt = e.target.alt
    cardTitle.textContent = e.target.closest('.element').querySelector('.element__text').textContent;
  });

  return card
}

function renderElement() {
  const cards = initialCards.map((item) => {
    return  createCard(item)
  });
  conteinerElements.append(...cards);
}

renderElement();

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
  removeValidError(popupProfile, validationConfig);
  enableSubmitButton(btnSaveProfile, validationConfig);
});

formElementUserInfo.addEventListener('submit',(evt) =>{
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopup(popupProfile);
});

addButton.addEventListener("click", () =>{
  openPopup(popupNewItem);
  removeValidError(popupNewItem, validationConfig);
  formCard.reset();
  disableSubmitButton(btnCreateProfile, validationConfig);
});

popupBtnCloseProfile.addEventListener("click", () =>{
  closePopup(popupProfile) 
});

popupBtnCloseNewItem.addEventListener("click", () =>{
  closePopup(popupNewItem) 
});

popupBtnCloseImage.addEventListener("click",  () =>{
  closePopup(popupImage) 
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", keyHandlerEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", keyHandlerEsc);
}

formCard.addEventListener('submit', (evt) =>{
  evt.preventDefault();
  const name = elementInput.value;
  const link = linkInput.value;
  const card = createCard({name:name, link:link})
  conteinerElements.prepend(card);
  closePopup(popupNewItem)
  formCard.reset();
});

popupProfile.addEventListener("click", (e) =>{
  if(e.target===popupProfile || e.target===popupBtnCloseProfile ){
    closePopup(popupProfile);
  }
});

popupNewItem.addEventListener("click", (e) =>{
  if(e.target===popupNewItem || e.target===popupBtnCloseNewItem ){
    closePopup(popupNewItem);
  }
});

popupImage.addEventListener("click", (e) =>{
  if(e.target===popupImage || e.target===popupBtnCloseImage){
    closePopup(popupImage);
  }
});
