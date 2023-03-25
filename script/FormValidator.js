'use strict'

class FormValidator{
  constructor(validationConfig, formElement){
    this._formElement = document.querySelector(formElement);
    this._validationConfig = validationConfig;
    
    this._submitButtonSelector = validationConfig.submitButtonSelector
    this._disableButtonClass = validationConfig.disableButtonClass
    this._errorClass = validationConfig.errorClass

    this._inputs = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
    this._errorClass = Array.from(this._formElement.querySelectorAll(this._validationConfig.errorClass));
    this._formSubmitButton = this._formElement.querySelector(this._submitButtonSelector);
  }
// проверка на валидность
  _checkInputValidation = (inputElement) => {
    if(inputElement.validity.valid){
      this._hideInputError(inputElement);
    }else{
      this._showInputError(inputElement);
    }
  }
//добавление ошибки 1
  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.popup__input-error_${inputElement.name}`);
    inputElement.classList.add(this._validationConfig.invalidInputClass);
    errorElement.textContent = inputElement.validationMessage;
    }
// скрывает ошибку 2
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.popup__input-error_${inputElement.name}`);
    inputElement.classList.remove(this._validationConfig.invalidInputClass);
    errorElement.textContent = " ";
  } 
// блокировать кнопку
  _disableButton = () =>{
    this._formSubmitButton.classList.add(this._disableButtonClass);
    this._formSubmitButton.disabled = true;
  }
// разблокировать кнопку
  _enableButton() {
    this._formSubmitButton.classList.remove(this._disableButtonClass);
    this._formSubmitButton.disabled = false;
  } 
// переключатель кнопки
  toggleButtonState(){ 
    if (this._hasInvalidInput ()){
      this._disableButton()
    }else{
      this._enableButton()
    }
  }
// проверка: есть ли невалидное поле
  _hasInvalidInput(){
    return this._inputs.some((inputElement) =>{ 
      return  !inputElement.validity.valid
    });
  }
// Обработчик всех форм
  _setEventListener(){
    this.toggleButtonState();
    this._inputs.forEach((inputElement) =>{
      inputElement.addEventListener('input', ()=>{
        this._checkInputValidation(inputElement);
        this.toggleButtonState();
      });
    });
    }

  enableValidation(){
    this._formElement.addEventListener('submit', function (evt){
      evt.preventDefault();
    });
    this._setEventListener();
  }

  resetValidation(){
    this.toggleButtonState();
    this._inputs.forEach((inputElement) =>{
      this._hideInputError(inputElement);
    });
  }
}

export default FormValidator

