import { renderThumbnails} from './thumbnails.js';
import { showNotificationError } from './notifications.js';

const SERVER = 'https://27.javascript.pages.academy/kekstagram-simple';

/**
 * Функция для получения данных с сервера
 */
export function getData() {
  fetch(`${SERVER}/data`)
    .then((response) => response.json())
    .then((posts) => renderThumbnails(posts))
    .catch(() => showNotificationError('Ошибка соединения'));
}

/**
 * Функция для отправки фото на сервер
 */
export function sendData(onSuccess, onError, body) {
  fetch(
    SERVER,
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
