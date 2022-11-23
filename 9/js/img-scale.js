import { imagePreview } from './for-img.js';

const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP = 25;

const imageEditor = document.querySelector('.img-upload__overlay');
const scaleValue = imageEditor.querySelector('.scale__control--value');
const buttonScaleSmaller = imageEditor.querySelector('.scale__control--smaller');
const buttonScaleBigger = imageEditor.querySelector('.scale__control--bigger');

/**
  * Изменение масштаба фотографии при редактировании
  */
export function changeScalePicture() {
  let newScaleValue = parseInt(scaleValue.value, 10);

  buttonScaleSmaller.addEventListener('click', () => {
    if (newScaleValue > MIN_SCALE && newScaleValue <= MAX_SCALE) {
      newScaleValue -= STEP;
      scaleValue.value = `${newScaleValue}%`;
      imagePreview.style.transform = `scale(${newScaleValue / 100})`;
    }
  });

  buttonScaleBigger.addEventListener('click', () => {
    if (newScaleValue >= MIN_SCALE && newScaleValue < MAX_SCALE) {
      newScaleValue += STEP;
      scaleValue.value = `${newScaleValue}%`;
      imagePreview.style.transform = `scale(${newScaleValue / 100})`;
    }
  });
}

