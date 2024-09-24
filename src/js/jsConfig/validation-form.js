const NAME = document.getElementById('name');
const URL = document.getElementById('url');
const TEXT = document.getElementById('text');
const messageElementId = ['error-message-name', 'error-message-url', 'error-message-text'];

const messageElements = messageElementId.map((id) => document.getElementById(id));

messageElements.forEach((errorMessage) => {
     errorMessage.classList.add('none');
});

function validationInputName() {
     const isText = /^[a-zA-Za-яА-ЯёЁ\s]+$/;
     if (NAME.value === '') {
          messageElements[0].classList.remove('none');
          messageElements[0].textContent = 'Enter your name';
     } else if (!isText.test(NAME.value)) {
          messageElements[0].classList.remove('none');
          messageElements[0].textContent = 'Only letters are available';
     } else {
          messageElements[0].classList.add('none');
     }
}

function validationInputUrl() {
     const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i;
     if (URL.value === '') {
          messageElements[1].classList.remove('none');
          messageElements[1].textContent = 'Enter the URL.';
     } else if (!urlPattern.test(URL.value)) {
          messageElements[1].classList.remove('none');
          messageElements[1].textContent = 'Please enter a valid URL';
     } else {
          messageElements[1].classList.add('none');
     }
}

function validationInputText() {
     if (TEXT.value.trim() === '') {
          messageElements[2].classList.remove('none');
          messageElements[2].textContent = 'Enter text';
     }
}

NAME.addEventListener('input', validationInputName);
URL.addEventListener('input', validationInputUrl);
TEXT.addEventListener('input', validationInputText);
