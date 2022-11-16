import {getRandomPositiveInteger, checkStringLength} from './utils.js';

//Функция, возвращая случайный элемент массива (описание к фотографии)
const DESCRIPTIONS = [
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
    description: getRandomArrayItem(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(0, 200)
  };
}

const arrayPhotos = Array.from({length: 25}, createPhoto);

checkStringLength('', 140);
export {arrayPhotos};
