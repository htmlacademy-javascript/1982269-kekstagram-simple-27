import { isEscapeKey } from './utils.js';

const templateError = document.querySelector('#error').content.querySelector('.error');
const buttonError = templateError.querySelector('.error__button');

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const buttonSuccess = templateSuccess.querySelector('.success__button');

//Открытие попапа с сообщением об успешной отправке данных
function showNotificationSuccess() {
  const notificationSuccess = document.body.appendChild(templateSuccess);

  document.addEventListener('keydown', (evt) => onPopupEscKeydown(evt, notificationSuccess));
  notificationSuccess.addEventListener('click', (evt) => {
    if (evt.target !== notificationSuccess.querySelector('.success__inner') || evt.target === buttonSuccess) {
      closeNotification(notificationSuccess);
    }
  });
}

// Закрытие модального окна с уведомлением
function closeNotification(element) {
  element.remove();
}

// Открытие попапа с сообщением об ошибке
function showNotificationError() {
  const notificationError = document.body.appendChild(templateError);

  document.addEventListener('keydown', (evt) => onPopupEscKeydown(evt, notificationError));
  notificationError.addEventListener('click', (evt) => {
    if (evt.target !== notificationError.querySelector('.error__inner') || evt.target === buttonError) {
      closeNotification(notificationError);
    }
  });
}

// Закрытие попапа по клавише ESC
function onPopupEscKeydown(evt, element) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeNotification(element);
  }
}
export {showNotificationSuccess, showNotificationError};
