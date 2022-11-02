//  открытие попапа
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupKey);
    document.addEventListener('click', closePopupOverlay);
}
// закрытие попапа
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
}
// закрытие модального окна кнопкой escape
export function closePopupKey(evt) {
    const popupActive = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(popupActive);
    }
}
// закрытие кликом по оверлей
export function closePopupOverlay(evt) {
    const popupActive = document.querySelector('.popup_opened');
    if (evt.target === popupActive) {
        closePopup(popupActive);
    }
}



