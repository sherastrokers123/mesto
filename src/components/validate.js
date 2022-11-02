//  функция показа ошибки поля ввода  showError передаёт событию input класс form__input_type_error
export const showError = (formElement, inputElement, errorMessage) => {  // функия принимает поле ввода и добавляет ей класс ошибки поля ввода
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_error_active');
    errorElement.classList.add('popup__input_error_active');
    errorElement.textContent = errorMessage;
};

//  функция скрытия ошибки поля ввода hideError передаёт событию input удалить класс form__input_type_error
export const hideError = (formElement, inputElement) => { // функия принимает поле ввода и удаляет ей класс ошибки поля ввода
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_error_active');
    errorElement.classList.remove('popup__input_error_active');
    errorElement.textContent = '';
};

// todo проверяет form на корректность введённых данных в поле url и вызывает hideError и showError.
export const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity('');
    }
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideError(formElement, inputElement);
    }
};


//   функция, которая отвечает за блокировку кнопки «Отправить».
export const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__save-button_disabled');
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove('popup__save-button_disabled');
        buttonElement.disabled = false;
    }
};

export const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};



export const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__save-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};
export const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll('.popup__fieldset'));
        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset);
        });
    });
};








