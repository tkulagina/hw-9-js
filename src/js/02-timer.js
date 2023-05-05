//імпортуємо бібліотекі
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

//отримуємо доступ до елементів
const dateTimeInput = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("[data-start]");
const daysValue = document.querySelector("span[data-days]");
const hoursValue = document.querySelector("span[data-hours]");
const minutesValue = document.querySelector("span[data-minutes]");
const secondsValue = document.querySelector("span[data-seconds]");

//вводимо перемінні
const CURRENT_DATE = new Date();
let SELECTED_DATE = new Date();
let delta;

//додаємо слухача на кнопку
btnStart.addEventListener('click', startTimer);
btnStart.disabled = true;

//вводимо об'єкт параметрів
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < CURRENT_DATE) {
            Notiflix.Notify.failure('Please choose a date in the future');
            // window.alert('Please choose a date in the future');
        } else {
            btnStart.disabled = false;
            SELECTED_DATE = selectedDates[0];
           console.log(dateTimeInput.value); 
      }
  },
};


//визиваємо календар
flatpickr(dateTimeInput, options);

//функція запуску таймера
function startTimer() {
    btnStart.disabled = true;
    dateTimeInput.disabled = true;
    getDeltaTime();
};

//функція обчіслювання
function getDeltaTime() {
    timerId = setInterval(() => {
        delta = SELECTED_DATE - Date.now();
        const dateOffset = convertMs(delta);
        
        if (delta <= 0) {
             clearInterval(timerId);
             btnStart.disabled = false;                          
        } else {
            clockView(dateOffset);
        }
    }, 1000);
};

//функція відображення
function clockView(dateOffset) {
    daysValue.textContent = dateOffset.days;
    hoursValue.textContent = dateOffset.hours;
    minutesValue.textContent = dateOffset.minutes;
    secondsValue.textContent = dateOffset.seconds;
};

//функція підрахунку таймера
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  };
  
  //функція додавання другої ціфри
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  };