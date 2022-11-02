import '../src/pages/index.css';
import * as modal from '../src/components/modal.js';
import * as card from '../src/components/cards.js';
import { enableValidation, } from '../src/components/validate.js';
import {
    addButton,
    editProfileButton,
    popupEditProfile,
    popupAddCard,
    popupEditProfileForm,
    profileName,
    profileDescription,
    cardContainer,
    popups,
    form,
    buttonSave,
    titleImg,
    linkImg
} from '../src/components/constants.js';



// сохранение данных в профиль пользователя
function editProfile(event) { // функц принимает событие 
    event.preventDefault(); // сброс страндартного повидения 
    profileName.textContent = popupEditProfileForm.name.value; // поле ввода имени принимает значение которое ввел пользователь с клавиатуры
    profileDescription.textContent = popupEditProfileForm.description.value; // поле ввода "о себе" принимает значение которое ввел пользователь с клавиатуры
    modal.closePopup(popupEditProfile);  // после всего закрываем открытое окно
}

// слушатель на скнопку добавь место (вызывает функцию открытия)
addButton.addEventListener('click', function (event) {
    modal.openPopup(popupAddCard);
});

// слушатель на кнопку профиля (вызывает функцию открытия)
editProfileButton.addEventListener('click', function (event) {
    popupEditProfileForm.name.value = profileName.textContent;
    popupEditProfileForm.description.value = profileDescription.textContent;
    modal.openPopup(popupEditProfile);

});


// все кнопки закрыть на модальных окнах
popups.forEach(function (popup) {
    popup.addEventListener('click', function (event) {
        if (event.target.classList.contains('popup__close-button')) {
            modal.closePopup(popup)
        } else {
            return false;
        }
    });
});


// вызываем функцию редактирования профиля по кнопке сохранить при изменении данных
popupEditProfileForm.addEventListener('submit', editProfile);

//  форма добавления созданной карточки места и закрытие окна после ввода  
form.addEventListener('submit', function (evt) {
    const popupActive = document.querySelector('.popup_opened'); // переменая открытого окна  находим его в дом
    const newCard = card.createCard(titleImg.value, linkImg.value);   // переменная новой карточки + присвоили ей функцию создания карточки и передали как агрументы то что написали в инпутах 
    cardContainer.prepend(newCard);  // добавление новой карточки на первое место
    form.reset(); // сброс инпутов (делает их пустыми)
    evt.preventDefault(); // отмена стандартных событий чтоб после ввода страница не переагружалась
    modal.closePopup(popupActive);  // после всего закрываем открытое окно
});

enableValidation();

// стили полей ввода при ошибки и поведение кнопки сохранить после добавления карточки 
form.addEventListener('submit', function (evt) {   // слушаем событие отправить и передаем обработчику событий evt
    buttonSave.disabled = true; // 
    buttonSave.classList.add('popup__save-button_disabled');
    evt.preventDefault(); // отмена стандартного повидения при отправке (отмена перезагрузки страницы)
});
