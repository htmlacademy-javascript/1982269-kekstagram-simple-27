/**
 * Функция для проверки нажата ли клавиша ESС
 */
function isEscapeKey(evt) {
  return (evt.key === 'Escape');
}

/**
 * Функция для отрисовки блока уведомления с ошибкой
 * @param {string} message Текст ошибки
 */
function showAlert(message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 4000);
}

export {isEscapeKey, showAlert};
