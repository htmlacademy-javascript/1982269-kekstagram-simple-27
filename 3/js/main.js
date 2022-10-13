//Функция, возвращающая случайное целое число из переданного диапазона включительно
/**
 * @param {number} min Нижняя граница диапазона
 * @param {number} max Верхняя граница диапазона
 * @returns {number} Случайное в заданном промежутке
 */
function getRandomInteger (min, max) {
  if (min < 0 || max < 0 || min >= max) {
    return('Число должно быть положительным или равно нулю. Минимальное значенние не может быть больше максимального.')
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Функция для проверки максимальной длины строки
/**
 * @param {string} text Входная строка
 * @param {number} maxLength Максимальная длина
 * @returns {boolean} Подходит ли по длине
 */
function getStringLength (text, maxLength) {
  if (text.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
