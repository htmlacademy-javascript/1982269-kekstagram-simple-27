import {isEscapeKey} from './utils.js';

const body = document.querySelector('body');
const uploadPhoto = body.querySelector('#upload-file');
const imageEditor = body.querySelector('.img-upload__overlay');
const buttonUploadCancel = imageEditor.querySelector('#upload-cancel');

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImageEditor();
  }
}

// Открытие и закрытие модального окна редактирования фото
function openImageEditor() {
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeImageEditor() {
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadPhoto.value = '';
}

uploadPhoto.addEventListener('change', (evt) => {
  evt.preventDefault();
  openImageEditor();
});

buttonUploadCancel.addEventListener('click', () => {
  closeImageEditor();
});

