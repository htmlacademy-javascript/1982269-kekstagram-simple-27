import {removeLastSymbol, toNumber} from './utils.js';

const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP = 25;

const imageEditor = document.querySelector('.img-upload__overlay');
const scaleValue = imageEditor.querySelector('.scale__control--value');
const buttonScaleSmaller = imageEditor.querySelector('.scale__control--smaller');
const buttonScaleBigger = imageEditor.querySelector('.scale__control--bigger');
const imagePreview = imageEditor.querySelector('.img-upload__preview img');

 /**
  * Изменение масштаба фотографии при редактировании
  */
function changeScalePicture() {
  let newScaleValue = toNumber(removeLastSymbol(scaleValue.value));

  buttonScaleSmaller.addEventListener('click', () => {
    if (newScaleValue > MIN_SCALE && newScaleValue <= MAX_SCALE) {
      newScaleValue -= STEP;
      scaleValue.value = `${newScaleValue}%`;
      imagePreview.style.transform = `scale(${newScaleValue/100})`;
    }
  })

  buttonScaleBigger.addEventListener('click', () => {
    if (newScaleValue >= MIN_SCALE && newScaleValue < MAX_SCALE) {
      newScaleValue += STEP;
      scaleValue.value = `${newScaleValue}%`;
      imagePreview.style.transform = `scale(${newScaleValue/100})`;
    }
  });
}
// buttonScaleSmaller.addEventListener('click', () => {
//   let newScaleValue = toNumber(removeLastSymbol(scaleValue.value));

//   if (newScaleValue > MIN_SCALE && newScaleValue <= MAX_SCALE) {
//     newScaleValue -= STEP;
//     scaleValue.value = `${newScaleValue}%`;
//     imagePreview.style.transform = `scale(${newScaleValue/100})`;
//   }
// })

// buttonScaleBigger.addEventListener('click', () => {
//   let newScaleValue = toNumber(removeLastSymbol(scaleValue.value));

//   if (newScaleValue >= MIN_SCALE && newScaleValue < MAX_SCALE) {
//     newScaleValue += STEP;
//     scaleValue.value = `${newScaleValue}%`;
//     imagePreview.style.transform = `scale(${newScaleValue/100})`;
//   }
// })

export {changeScalePicture, imagePreview};
