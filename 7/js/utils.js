//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//Функция для проверки максимальной длины строки
function checkStringLength (string, length) {
  if (string.length <= length) {
    return true;
  }
  return false;
}

// Функция для проверки нажатой клавиши ESС
function isEscapeKey(evt) {
  return (evt.key === 'Escape');
}

export {getRandomPositiveInteger, checkStringLength, isEscapeKey};
