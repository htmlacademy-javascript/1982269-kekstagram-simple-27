import {isEscapeKey} from './utils.js';
import {changeScalePicture} from './img-scale.js';
import {effectsList, toChangeEffects} from './img-effects.js';
import {resetImage} from './for-img.js';
import {sendData} from './api.js';
import {showNotificationSuccess, showNotificationError} from './notifications.js';

const {body} = document;
const form = body.querySelector('.img-upload__form');
const selectPhoto = form.querySelector('#upload-file');
const imageEditor = form.querySelector('.img-upload__overlay');
const buttonUploadSubmit = form.querySelector('.img-upload__submit');

/**
 * Закрытие попапа по клавише ESC
 * @param {keydown} evt
 */
function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    form.reset();
  }
}

// Открытие модального окна для редактирования фото
function openImageEditor() {
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  effectsList.addEventListener('change', toChangeEffects);
  form.addEventListener('submit', toUploadPhoto);
  changeScalePicture();
}

// Закрытие модального окна для редактирования фото
function onResetForm() {
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  effectsList.removeEventListener('change', toChangeEffects);
  form.removeEventListener('submit', toUploadPhoto);
  resetImage();
  form.reset();
}

selectPhoto.addEventListener('change', (evt) => {
  evt.preventDefault();
  openImageEditor();
});

form.addEventListener('reset', onResetForm);

function blockSubmitButton() {
  buttonUploadSubmit.disabled = true;
  buttonUploadSubmit.textContent = 'Загружается...';
}

function unblockSubmitButton() {
  buttonUploadSubmit.disabled = false;
  buttonUploadSubmit.textContent = 'Опубликовать';
}

// Функция для отправки фото на сервер
function toUploadPhoto(evt) {
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


