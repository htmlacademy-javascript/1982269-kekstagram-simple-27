import { isEscapeKey } from './utils.js';

const templateError = document.querySelector('#error').content.querySelector('.error');
const templateSuccess = document.querySelector('#success').content.querySelector('.success');

//Открытие попапа с сообщением об успешной отправке данных или об ошибке
const showAlert = (template, message) => {
  const alertPopup = template.cloneNode(true);
  const button = alertPopup.querySelector('button');
  const messageError = alertPopup.querySelector('.error__title');

  if (message) {
    messageError.textContent = message;
  }

  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onAlertClick);

  // Закрытие модального окна с уведомлением
  const closeAlert = () => {
    alertPopup.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onAlertClick);

  };

  // Закрытие попапа по клавише ESC
  function onPopupEscKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeAlert();
    }
  }
  // Закрытие попапа по клику на произвольную область экрана за пределами блока с сообщением
  function onAlertClick(evt) {
    if (evt.target === alertPopup || evt.target === button) {
      closeAlert();
    }
  }

  document.body.appendChild(alertPopup);
};

//Открытие попапа с сообщением об успешной отправке данных
const showNotificationSuccess = () => showAlert(templateSuccess);

// Открытие попапа с сообщением об ошибке
const showNotificationError = (message) => showAlert(templateError, message);

export {showNotificationSuccess, showNotificationError};
