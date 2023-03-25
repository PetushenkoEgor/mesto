'use strict'

class Card {
  constructor(data, templateElement, openPopup){
    this._templateElement = templateElement;
    this._data = data.name;
    this._link = data.link;
    this._openPopup = openPopup;
  }
  // Возврашаем шаблон карточки
  _getTemplate(){
    const cardElement = document
    .querySelector(this._templateElement)
    .content
    .querySelector(".element")
    .cloneNode(true);
    return cardElement
  }

// лайк для карточки
  _handleLikeBtn(){
    this._like.classList.toggle("element__btn-like_active");
  }
// Удаление карточки
  _handlDelete(){
    this._elementCard.remove();
  }
//  слушатель событий открытия попапа, закрытия, лайка, удаления
  _setEventLisinter(){

    this._like.addEventListener('click', () => {
      this._handleLikeBtn()
    });
  
    this._elementCard.querySelector('.element__btn-trash').addEventListener('click', () => {
      this._handlDelete()
    });

    this._elementCard.querySelector(".element__button-image").addEventListener('click', () => {
      this._openPopup(this._data, this._link);
    });
  }
  // генерируем карточку. метод публичный
  generateCard(){
    this._elementCard = this._getTemplate();
    this._elementCardImg = this._elementCard.querySelector(".element__image");;
    this._elementCardImg.alt = this._data;
    this._elementCardImg.src = this._link;
    this._elementCard.querySelector(".element__text").textContent = this._data;
    this._like = this._elementCard.querySelector(".element__btn-like");
    
    this._setEventLisinter(); // обработчик
    
    return this._elementCard;
  }
}
export default Card
