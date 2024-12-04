class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  _showInputError(formEl, inputElement, errorMsg, settings) {
    const errorMsgElement = formEl.querySelector(`#${inputElement.id}-error`);
    errorMsgElement.textContent = errorMsg;
    inputElement.classList.add(settings.inputErrorClass);
  }

  _hideInputError(formEl, inputElement, config) {
    const errorMsgElement = formEl.querySelector(`#${inputElement.id}-error`);
    errorMsgElement.textContent = "";
    inputElement.classList.remove(settings.inputErrorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        this._formEl,
        inputElement,
        inputElement.validationMessage,
        this._settings
      );
    } else {
      this._hideInputError(formEl, inputElement, settings);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(buttonElement) {
    if (this._hasInvalidInput(this._inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._formEl.querySelector(
      this._submitButtonSelector
    );

    this._toggleButtonState(buttonElement);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement, settings);
      });
    });
  }

  resetValidation() {
    this._formEl.removeEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }

  _hasInvalidInput(inputList) {
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  enableValidation() {
    this._formEl = document.querySelector(this._formSelector);
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

export default FormValidator;

console.log(inputElement);
