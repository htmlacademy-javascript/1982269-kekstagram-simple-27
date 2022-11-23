/** @type {HTMLImageElement}*/
export const imagePreview = document.querySelector('.img-upload__preview img');

export const resetImage = () => {
  imagePreview.removeAttribute('style');
  imagePreview.removeAttribute('class');
};
