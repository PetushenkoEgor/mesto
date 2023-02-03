let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupBtnClose = document.querySelector(".popup__close");
let formElement  = document.querySelector(".popup__form");
let nameInput  = document.querySelector(".popup__form-input_user_name");
let jobInput  = document.querySelector(".popup__form-input_user_info");
let profileName = document.querySelector(".profile__user-name");
let profileInfo = document.querySelector(".profile__user-info");
let popupNewItem = document.querySelector(".popup-new-item");
let addButton = document.querySelector(".profile__add-button");
let popupBtnCloseNewItem = document.querySelector(".popup__close-icon_new-item");
let formCard = document.querySelector(".popup__form_new-item");
const conteinerElements = document.querySelector(".elements");
const templateElement = document.querySelector("#element").content;
const imageElement = document.querySelector(".element__image");
const headingElement = document.querySelector(".element__text");
const cardImage = document.querySelector(".popup__image");
const cardTitle = document.querySelector(".popup__imgs-title");
const popupImage = document.querySelector(".popup-imgs");
const popupImageCloseBtn = document.querySelector(".popup__close_imgs");

function openPopup(){ // открывает попап
  popup.classList.add("popup_opened");
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;0
}

function closePopup(){ // закрывает попап
  popup.classList.remove("popup_opened");
}

function handleFormSubmit (evt) { // обрабатывает форму попап
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopup();
}

function openPopupNewItem(){  // открывает попап создания новой карточки
  popupNewItem.classList.add("popup_opened");
}

function closePopupNewItem(){  // закрывает попап создания новой карточки
  popupNewItem.classList.remove("popup_opened");
}

function openPopupImage(){// открывает попап изображения
  popupImage.classList.add("popup_opened");
}

function closePopupImage(){// закрывает попап изображения
  popupImage.classList.remove("popup_opened");
}

function renderElement() {
  initialCards.forEach((el) => {
    const card = templateElement.querySelector(".element").cloneNode(true);
    card.querySelector(".element__text").textContent = el.name;
    card.querySelector(".element__image").src = el.link;
    card.querySelector(".element__image").alt = el.name;

    const btnLike = card.querySelector(".element__btn-like");
    const btnTrash = card.querySelector(".element__btn-trash");

    btnLike.addEventListener('click', function(evt){
      btnLike.classList.toggle("element__btn-like_active");
    });

    btnTrash.addEventListener('click', function(evt){
      card.remove();
    });

    card.querySelector(".element__button-image").addEventListener('click', (e) =>{
      openPopupImage()
      console.log(e.target);
      cardImage.src = e.target.src
      cardImage.alt = e.target.alt
      cardTitle.textContent = e.target.closest('.element').querySelector('.element__text').textContent;
    });

    conteinerElements.append(card);
 
  });
}

renderElement();

function createElement(evt){
  evt.preventDefault();
  const title = elementInput.value;
  const image = linkInput.value;
  const card = templateElement.querySelector(".element").cloneNode(true);
  card.querySelector('.element__text').textContent = title;
  card.querySelector(".element__image").src = image;
  card.querySelector(".element__image").alt = title;

  const btnLike = card.querySelector(".element__btn-like");
  const btnTrash = card.querySelector(".element__btn-trash");

  closePopupNewItem();
  conteinerElements.prepend(card);
  formCard.reset();

  btnLike.addEventListener('click', function(evt){
    btnLike.classList.toggle("element__btn-like_active");
  });

  btnTrash.addEventListener('click', function(evt){
    card.remove();
  });

  card.querySelector(".element__button-image").addEventListener('click', (e) =>{
    openPopupImage()
    console.log(e.target);
    cardImage.src = e.target.src
    cardImage.alt = e.target.alt
    cardTitle.textContent = e.target.closest('.element').querySelector('.element__text').textContent;
  });
};

editButton.addEventListener("click", openPopup);
popupBtnClose.addEventListener("click", closePopup);
formElement.addEventListener('submit', handleFormSubmit); 
addButton.addEventListener("click", openPopupNewItem);
popupBtnCloseNewItem.addEventListener("click", closePopupNewItem);
formCard.addEventListener('submit', createElement);
popupImageCloseBtn.addEventListener("click", closePopupImage);


