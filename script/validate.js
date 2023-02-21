function enableSubmitButton(button, validationConfig){
  button.classList.remove(validationConfig.disableButtonClass);
  button.disabled = false;
}

function disableSubmitButton(button, validationConfig){
  button.classList.add(validationConfig.disableButtonClass);
  button.disabled = true;
}

function removeValidError(popup,validationConfig) {
  const inputErrors = popup.querySelectorAll(".popup__input-error");
  inputErrors.forEach((error) =>{
    error.textContent = " "
  });
  const inputValids = popup.querySelectorAll(".popup__form-input");
  inputValids.forEach((input) =>{
    input.classList.remove(validationConfig.invalidInputClass);
  });
}

const showInputError = (input, errorElement, invalidInputClass) =>{
  input.classList.add(invalidInputClass);
  errorElement.textContent = input.validationMessage;
}

const hideInputError = (input, errorElement, invalidInputClass) =>{
  input.classList.remove(invalidInputClass);
  errorElement.textContent = " ";
} 

const disableButton = (formSubmitButton, disableButtonClass) =>{
  formSubmitButton.classList.add(disableButtonClass);
  formSubmitButton.disabled = true;
}

const enableButton = (formSubmitButton, disableButtonClass) =>{
  formSubmitButton.classList.remove(disableButtonClass);
  formSubmitButton.disabled = false;
} 

const toggleButtonState = (formSubmitButton, disableButtonClass, buttonState) =>{
  if (buttonState){
    disableButton(formSubmitButton, disableButtonClass);
  }else{
    enableButton(formSubmitButton, disableButtonClass);
  }
}

const checkInputValidation = (input, errorElement, invalidInputClass) =>{
  if(input.validity.valid){
    hideInputError(input, errorElement, invalidInputClass);
  }else{
    showInputError(input, errorElement, invalidInputClass);
  }
}

const hasInvalidInput = (inputs) =>{
  return inputs.some((input) => !input.validity.valid)
}

const handleFormInput = (evt, form, invalidInputClass, formSubmitButton, disableButtonClass, inputs) =>{
  const input = evt.target;
  console.log(input.validity.valid);
  const errorElement = form.querySelector(`.popup__input-error_${input.name}`);
  checkInputValidation(input, errorElement, invalidInputClass);
  const buttonState = hasInvalidInput(inputs);
  toggleButtonState(formSubmitButton, disableButtonClass, buttonState);
}

const enableValidation = ({
  formSelector,
  inputSelector,
  invalidInputClass,
  submitButtonSelector,
  disableButtonClass
}) => {
  const forms = document.querySelectorAll(formSelector);
  forms.forEach((form) =>{
    const inputs = Array.from(form.querySelectorAll(inputSelector));
    const formSubmitButton = form.querySelector(submitButtonSelector);
    inputs.forEach((input) => {
      input.addEventListener('input', (evt) => handleFormInput(evt, form, invalidInputClass, formSubmitButton, disableButtonClass, inputs
      ));
    });
  });
}

const validationConfig = {
  formSelector: 'form',
  inputSelector: '.popup__form-input',
  invalidInputClass: 'popup__form-input_valid',
  submitButtonSelector: '.popup__submit-button',
  disableButtonClass: 'popup__submit-button_disabled'
};

enableValidation(validationConfig);