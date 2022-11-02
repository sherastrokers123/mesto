
export const editProfileButton = document.querySelector('.profile__edit-button');  // переменная кнопки профиля
export const addButton = document.querySelector('.profile__add-button');  // переменная кнопки добавить место 
export const popups = document.querySelectorAll('.popup');  // переменная всех всплывающих окон
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');  // переменная окна профиля пользователя
export const popupAddCard = document.querySelector('.popup_type_add-card'); // переменная кнопка добавить новое место
export const popupEditProfileForm = popupEditProfile.querySelector('.popup__form'); // переменная формы окна пользователя 
export const popupAddCardForm = popupAddCard.querySelector('.popup__form'); // переменная формы нового места  
export const popupOpenImage = document.querySelector('.popup_type_open-image'); // переменная с классом открытой картинки 
export const popupPicture = document.querySelector('.popup__image'); // переменная картинки в окне просмотра 
export const popupPictureCaption = document.querySelector('.popup__caption'); // переменная подпись к картинке 
export const profile = document.querySelector('.profile'); // переменная блока профиля и кнопки добавить 
export const profileName = document.querySelector('.profile__name'); // переменная элемента имени на странице 
export const profileDescription = document.querySelector('.profile__description'); // переменная элемента о себе  на странице 
export const cardTemplate = document.querySelector('#cardTemplate').content; // переменная шаблон карточки места 
export const cardContainer = document.querySelector('.elements__list'); // переменная место добавления карточки (контейнер где они лежат)
export const buttonSave = document.querySelector('.popup__save-button'); // переменная кнопка сохранить 

// in validate
export const form = document.querySelector('.popup__form');
export const titleImg = form.elements.title; // переменая поля названия
export const linkImg = form.elements.link; // переменая ссылки на картинку

import kolka from '../images/kolka.jpg';
import dombai from '../images/dombai.jpg';
import karachaevsk from '../images/karachaevsk.jpg';
import pripyat from '../images/pripyat.jpg';
import samarkand from '../images/samarkand.jpg';
import elbrus from '../images/elbrus.jpg';

export const initCards = [{
    name: 'Карачаевск',
    link: karachaevsk,
}, {
    name: 'Гора Эльбрус',
    link: elbrus,
}, {
    name: 'Домбай',
    link: dombai,
}, {
    name: 'Самарканд',
    link: samarkand,
}, {
    name: 'Припять',
    link: pripyat
}, {
    name: 'Колка',
    link: kolka,

}];