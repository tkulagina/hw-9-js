function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

//отримуємо доступ до кнопок
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

//отримуємо id таймеру
let timerId = null;

//додаємо слухача на кнопку Старт
startBtn.addEventListener('click', onStartChangeColor);

//функція змін коліру
function onStartChangeColor() {
    onBtnDisabled ()
    timerId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor =`${color}`;
    }, 1000)
};

//додаемо слухача на кнопку Стоп
stopBtn.addEventListener ('click', onStopChangeColor);

//функція зупинки
function onStopChangeColor () {
    clearInterval(idInterval);
    onBtnDisabled ()
};
//функція перемикання активної кнопки
function onBtnDisabled () {
    if (!startBtn.disabled) {
      startBtn.disabled = true;
      stopBtn.disabled = false
    } else {
      startBtn.disabled = false;
      stopBtn.disabled = true
    }
  };