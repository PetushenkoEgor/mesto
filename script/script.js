const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup__profile");
const popupBtnClose = document.querySelector(".popup__close");
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
const popupImageCloseBtn = document.querySelector(".popup__close_imgs");



function openPopup(popup) {
  popup.classList.add('popup_opened');
}


function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function createCard(item) {
  const card = templateElement.querySelector(".element").cloneNode(true);
  card.querySelector('.element__text').textContent = item.name;
  card.querySelector(".element__image").src = item.link;
  card.querySelector(".element__image").alt = item.name;

  conteinerElements.prepend(card);

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
  initialCards.forEach((item) => {
    return createCard(item)
  });
}

renderElement();

editButton.addEventListener("click", () =>{
  openPopup(popupProfile);
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
});

popupBtnClose.addEventListener("click", () =>{
  closePopup(popupProfile) 
});


formElementUserInfo.addEventListener('submit',(evt) =>{
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopup(popupProfile);
});

addButton.addEventListener("click", () =>{
  openPopup(popupNewItem);
});

popupBtnCloseNewItem.addEventListener("click", () =>{
  closePopup(popupNewItem) 
});

popupImageCloseBtn.addEventListener("click",  () =>{
  closePopup(popupImage) 
});

formCard.addEventListener('submit', (evt) =>{
  evt.preventDefault();
  const name = elementInput.value;
  const link = linkInput.value;
  const card = createCard({name:name, link:link})
  closePopup(popupNewItem)
  formCard.reset();
});

