import {arrayPhotos} from './mock-data.js';

const template = document.querySelector('#picture').content;
const templatePicture = template.querySelector('.picture');

const containerPictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const createThumbnails = function(photo) {
  const picture = templatePicture.cloneNode(true);

  const img = picture.querySelector('.picture__img');
  const likes = picture.querySelector('.picture__comments');
  const comments = picture.querySelector('.picture__likes');
  img.src = photo.url;
  likes.textContent = photo.likes;
  comments.textContent = photo.comments;

  return picture;
};

arrayPhotos.forEach((item) => {
  const element = createThumbnails(item);
  fragment.appendChild(element);
});

containerPictures.appendChild(fragment);

