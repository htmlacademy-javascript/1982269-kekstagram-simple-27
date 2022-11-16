import {isEscapeKey} from './utils.js';
import {changeScalePicture, imagePreview} from './img-scale.js';
import {effectsList, toChangeEffects} from './img-effects.js';

const {body} = document;
const form = body.querySelector('.img-upload__form')
const uploadPhoto = form.querySelector('#upload-file');
const imageEditor = form.querySelector('.img-upload__overlay');

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    form.reset();
  }
}

// Открытие и закрытие модального окна редактирования фото
function openImageEditor() {
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  changeScalePicture();
  effectsList.addEventListener('change', toChangeEffects);
}

function onResetForm() {
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  effectsList.removeEventListener('change', toChangeEffects);
  imagePreview.style.transform = 'scale(1)';
  imagePreview.classList.remove(imagePreview.className);
}

uploadPhoto.addEventListener('change', (evt) => {
  evt.preventDefault();
  openImageEditor();
});

form.addEventListener('reset', onResetForm);


