import axios from 'axios';

const $alert = document.querySelector('.alert');
const $alertContainer = document.querySelector('.alert__container');
const $formButton = document.querySelector('.form__button');
const $alertBtn = document.querySelector('.alert__btn');
const messageElementId = ['error-message-name', 'error-message-url', 'error-message-text'];
// Form id
const NAME = document.getElementById('name');
const URL = document.getElementById('url');
const TEXT = document.getElementById('text');
const FORM = document.getElementById('form');

// Array id inputs
const arrayIdFormInputs = [NAME, URL, TEXT];
// Message elements
const messageElements = messageElementId.map((id) => document.getElementById(id));
messageElements.forEach((errorMessage) => {
     errorMessage.classList.add('none');
});

const alertShow = () => {
     $alert.classList.add('show');
     $alertContainer.classList.add('show');
};

// Post data
const TOKEN = '?';
const CHAT_ID = '?';
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
          .then(() => {
               console.log('Сообщение отправлено:');
               arrayIdFormInputs.forEach((input) => {
                    input.value = '';
               });
               alertShow();
          })
          .catch((error) => {
               console.error('Ошибка при отправке сообщения:', error);
          });
}

// Function validation of key
function validateInput(key) {
     switch (key) {
          case 'name':
               return validationInputName();
          case 'url':
               return validationInputUrl();
          case 'text':
               return validationInputText();
          default:
               return false;
     }
}

// Validation form
FORM.addEventListener('submit', function (event) {
     event.preventDefault();

     const isNameValid = validateInput('name');
     const isUrlValid = validateInput('url');
     const isTextValid = validateInput('text');

     if (isNameValid && isUrlValid && isTextValid) {
          sendMessage();
     }
});
function validationInputName() {
     const isText = /^[a-zA-Za-яА-ЯёЁ\s]+$/;
     if (NAME.value === '') {
          messageElements[0].classList.remove('none');
          messageElements[0].textContent = 'Enter your name';
          NAME.classList.add('border-red');
          setTimeout(() => {
               NAME.classList.remove('shake-animation');
          }, 100);
          return false;
     } else if (!isText.test(NAME.value)) {
          messageElements[0].classList.remove('none');
          messageElements[0].textContent = 'Only letters are available';
          NAME.classList.add('shake-animation');
          return false;
     } else {
          messageElements[0].classList.add('none');
          NAME.classList.remove('border-red');
          setTimeout(() => {
               NAME.classList.remove('shake-animation');
          }, 100);
          return true;
     }
}

function validationInputUrl() {
     const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i;
     if (URL.value === '') {
          messageElements[1].classList.remove('none');
          messageElements[1].textContent = 'Enter the URL';
          URL.classList.add('border-red');
          setTimeout(() => {
               URL.classList.remove('shake-animation');
          }, 100);
          return false;
     } else if (!urlPattern.test(URL.value)) {
          messageElements[1].classList.remove('none');
          messageElements[1].textContent = 'Please enter a valid URL';
          URL.classList.add('shake-animation');
          return false;
     } else {
          messageElements[1].classList.add('none');
          URL.classList.remove('border-red');
          setTimeout(() => {
               URL.classList.remove('shake-animation');
          }, 100);
          return true;
     }
}

function validationInputText() {
     if (TEXT.value.trim() === '') {
          messageElements[2].classList.remove('none');
          messageElements[2].textContent = 'Enter text';
          TEXT.classList.add('border-red');
          return false;
     } else {
          messageElements[2].classList.add('none');
          TEXT.classList.remove('border-red');
          return true;
     }
}

NAME.addEventListener('input', validationInputName);
URL.addEventListener('input', validationInputUrl);
TEXT.addEventListener('input', validationInputText);

function removeClassShow() {
     $alert.classList.remove('show');
     $alertContainer.classList.remove('show');
}

$alertBtn.onclick = () => removeClassShow();
