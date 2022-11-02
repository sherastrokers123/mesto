import { cardTemplate, popupPicture, popupPictureCaption, popupOpenImage, cardContainer, initCards } from "../components/constants.js";
import { openPopup } from "../components/modal.js";

// открытие картинки на весь экран
export function openImagePopup(element) {
    popupPicture.src = element.src;
    popupPicture.alt = element.alt;
    popupPictureCaption.textContent = element.alt;
    openPopup(popupOpenImage);
}

// шаблон карточек
export function createCard(name, link) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage = cardElement.querySelector('.element__image');
    cardImage.src = link;
    cardImage.alt = name;
    cardElement.querySelector('.element__caption').textContent = name;

    cardImage.addEventListener('click', function (event) {
        openImagePopup(event.target);
    });
    cardElement.querySelector('.element__like-button').addEventListener('click', function (event) {
        event.target.classList.toggle('element__like-button_active');
    });
    cardElement.querySelector('.element__remove-button').addEventListener('click', function (event) {
        deleteCard(cardElement);
    });
    return cardElement;
}

// отрисовка карточек
initCards.forEach(function (cardInfo) {
    console.log(cardInfo.link);
    const newCard = createCard(cardInfo.name, cardInfo.link);
    cardContainer.prepend(newCard);
});
// удаление карточек
export function deleteCard(cardElement) {
    cardElement.remove();
}
