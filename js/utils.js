/**
 * Функция, возвращающая случайное целое число из переданного диапазона включительно
 * @param {number} a Число
 * @param {number} b Число
 * @returns {number} Случайное число в заданном диапазоне включительно
 */
function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

/**
 * Функция для проверки максимальной длины строки
 * @param {string} string Входная строка
 * @param {number} length Максимальная длина
 * @returns {boolean} Подходит ли по длине
 */
function checkStringLength (string, length) {
  if (string.length <= length) {
    return true;
  }
  return false;
}

/**
 * Функция для проверки нажата ли клавиша ESС
 */
function isEscapeKey(evt) {
  return (evt.key === 'Escape');
}

/**
 * Функция, удаляющая последний знак у строки
 */
function removeLastSymbol(string) {
  return string.slice(0, -1);
}

/**
 * Функция, превращающая строку в число
 */
function toNumber(string) {
  return Number(string);
}

export {getRandomPositiveInteger, checkStringLength, isEscapeKey, removeLastSymbol, toNumber};
