import { imagePreview } from './img-scale.js';

const effectsList = document.querySelector('.effects__list');

const effects = [
  { class: 'effects__preview--none', id: 'effect-none'},
  { class: 'effects__preview--chrome', id: 'effect-chrome'},
  { class: 'effects__preview--sepia', id: 'effect-sepia'},
  { class: 'effects__preview--marvin', id: 'effect-marvin'},
  { class: 'effects__preview--phobos', id: 'effect-phobos'},
  { class: 'effects__preview--heat', id: 'effect-heat'}
];

function toChangeEffects(evt) {
  effects.forEach((effect) => {
    if (evt.target.checked && evt.target.id === effect.id) {
      imagePreview.classList.add(effect.class);
    }
    else {
      imagePreview.classList.remove(effect.class);
    }
  });
}

export {effectsList, toChangeEffects}
