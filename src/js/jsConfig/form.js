// Axios
import axios from 'axios';

const $alert = document.querySelector('.alert');
const $alertContainer = document.querySelector('.alert__container');
const $formButton = document.querySelector('.form__button');
const $alertBtn = document.querySelector('.alert__btn');
const $body = document.querySelector('.body');

// Form id
const FORM = document.getElementById('form');
const NAME = document.getElementById('name');
const URL = document.getElementById('url');
const TEXT = document.getElementById('text');

// Array id inputs
const arrayIdFormInputs = [NAME, URL, TEXT];

const TOKEN = '8004900723:AAF357Hf41r_UWSMNuswTiG37we1ejov8Hc';
const CHAT_ID = '-1002350522727';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

function sendMessage() {
     let message = `<b>Сообщение с сайта Personal</b>\n\n`;
     message += `<b>Отправитель: ${NAME.value}</b>\n`;
     message += `<b>Сайт: ${URL.value}</b>\n`;
     message += `<b>Комментарий: ${TEXT.value}</b>\n`;

     axios.post(URI_API, {
          chat_id: CHAT_ID,
          parse_mode: 'HTML',
          text: message,
     })
          .then((res) => {
               NAME.value = '';
               URL.value = '';
               TEXT.value = '';
          })
          .catch((err) => {
               console.log(err);
          })
          .finally(() => {
               console.log('Data sent successfully');
          });
}

$formButton.onclick = (event) => {
     event.preventDefault();

     // Function alert show
     const alertShow = () => {
          $alert.classList.add('show');
          $alertContainer.classList.add('show');
     };

     // Function add shake animation
     let allFilled = true;

     arrayIdFormInputs.forEach((input) => {
          if (input.value.trim()) {
               input.classList.remove('shake-animation');
          } else {
               input.classList.add('shake-animation');
               setTimeout(() => {
                    input.classList.remove('shake-animation');
               }, 300);
               allFilled = false;
          }
     });

     if (allFilled) {
          sendMessage();
          arrayIdFormInputs.forEach((input) => {
               input.value = '';
          });
          alertShow();
     }
};

function removeClassShow() {
     $alert.classList.remove('show');
     $alertContainer.classList.remove('show');
}

$alertBtn.onclick = () => removeClassShow();
