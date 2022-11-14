import {arrayPhotos} from './mock-data.js';

const template = document.querySelector('#picture').content;
const templatePicture = template.querySelector('.picture');

const containerPictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

function markupThumbnail(photo) {
  const picture = templatePicture.cloneNode(true);

  const img = picture.querySelector('.picture__img');
  const likes = picture.querySelector('.picture__comments');
  const comments = picture.querySelector('.picture__likes');
  img.src = photo.url;
  img.alt = photo.description;
  likes.textContent = photo.likes;
  comments.textContent = photo.comments;

  return picture;
}

function renderThumbnails(photos) {
  for (const photo of photos) {
    fragment.appendChild(markupThumbnail(photo));
  }
  containerPictures.appendChild(fragment);
}

renderThumbnails(arrayPhotos);
