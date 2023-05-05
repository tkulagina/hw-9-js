//імпортуємо бібліотеку
import Notiflix from 'notiflix';;
console.log(Notiflix);
//import { Notify } from 'notiflix/build/notiflix-notify-aio';

// отримуємо доступ до інпутів
const form = document.querySelector('.form');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

//додаємо слухача на кнопку
form.addEventListener('submit', onFormSubmit);

//функція підрахунку затримки
function onFormSubmit(event) {
  event.preventDefault();
  const firstDelay = Number(`${delayEl.value}`);
  const stepDelay = Number(`${stepEl.value}`);
  const promiseCount = Number(`${amountEl.value}`);
  
  //console.log(firstDelay);
  //console.log(stepDelay);
  //console.log(promiseCount);

  let currentDelay = firstDelay;
  for (let i = 0; i < promiseCount; i += 1) {
    if (i !== 0) {
      currentDelay += stepDelay;
    }
    createPromise(i + 1, currentDelay);
  }
};

//функція створення промісів
function createPromise(position, delay) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;

        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
}