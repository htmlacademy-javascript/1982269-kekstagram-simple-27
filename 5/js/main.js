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

//Функция, возвращая случайный элемент массива (описание к фотографии)
const DESCRIPTION = [
  'Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон.',
  'Улыбка — единственный тренд в моде, который актуален всегда.',
  'Никогда не ищите свое счастье там, где вы его однажды потеряли.',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.',
  'Моя жизнь меняется, потому что меняю ее я.',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Ни о чем не беспокойтесь. Потому что все лучшие умы на работе.',
  'Жизнь — это всего лишь серия крошечных чудес, поэтому обратите внимание на них.',
  'Живите во всех тех моментах, которые вы не можете выразить словами.'
];

/**
 * @template Type
 * @param {Type[]} elements
 * @returns {Type} Возвращает случайный элемент из массива
 */
function getRandomArrayItem(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

/**
 * Вспомогательная функция-колбэк для `Array.from`
 * @param {undefined} _ не используется
 * @param {number} index Начинается с нуля
 */
function createPhoto (_, index) {
  const id = index + 1;

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayItem(DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(0, 200)
  };
}

const arrayPhotos = Array.from({length: 25}, createPhoto);

console.log(arrayPhotos);
checkStringLength ('', 140);
