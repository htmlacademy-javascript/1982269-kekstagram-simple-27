import {isEscapeKey} from './utils.js';
import {changeScalePicture} from './img-scale.js';
import {effectsList, changeEffect} from './img-effects.js';
import {resetImage} from './for-img.js';
import {sendData} from './api.js';
import {showNotificationSuccess, showNotificationError} from './notifications.js';

const {body} = document;
const form = body.querySelector('.img-upload__form');
const selectPhoto = form.querySelector('#upload-file');
const imageEditor = form.querySelector('.img-upload__overlay');
const buttonUploadSubmit = form.querySelector('.img-upload__submit');

const isErrorAlertShow = () => body.querySelector('.error');

const isFormInFocus = () => document.activeElement === form;

/**
 * Закрытие попапа по клавише ESC
 * @param {keydown} evt
 */
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !isErrorAlertShow() && !isFormInFocus()) {
    evt.preventDefault();
    form.reset();
  }
};

// Открытие модального окна для редактирования фото
const openImageEditor = () => {
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  effectsList.addEventListener('change', changeEffect);
  form.addEventListener('submit', toUploadPhoto);
  changeScalePicture();
};

// Закрытие модального окна для редактирования фото
const onResetForm = () => {
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  effectsList.removeEventListener('change', changeEffect);
  form.removeEventListener('submit', toUploadPhoto);
  resetImage();
  form.reset();
};

const blockSubmitButton = () => {
  buttonUploadSubmit.disabled = true;
  buttonUploadSubmit.textContent = 'Загружается...';
};

const unblockSubmitButton = () => {
  buttonUploadSubmit.disabled = false;
  buttonUploadSubmit.textContent = 'Опубликовать';
};

// Функция для отправки фото на сервер
function toUploadPhoto (evt) {
  evt.preventDefault();
  blockSubmitButton();
  sendData(() => {
    unblockSubmitButton();
    showNotificationSuccess();
    onResetForm();
  },
  () => {
    showNotificationError();
    unblockSubmitButton();
  }, new FormData(form));
}

selectPhoto.addEventListener('change', (evt) => {
  evt.preventDefault();
  openImageEditor();
});

form.addEventListener('reset', onResetForm);

