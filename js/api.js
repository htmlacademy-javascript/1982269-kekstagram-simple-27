import {renderThumbnails} from './thumbnails.js';
import { showAlert } from './utils.js';

/**
 * Функция для получения данных с сервера
 */
export function getData() {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((posts) => renderThumbnails(posts))
    .catch(() => showAlert('Что-то пошло не так. Попробуйте обновить страницу'));
}

/**
 * Функция для отправки фото на сервер
 */
export function sendData(onSuccess, onError, body) {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
}
