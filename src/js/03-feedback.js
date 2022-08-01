import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener(
'input', throttle((e)=> {
    const input = {email: form.elements.email.value,
    message: form.elements.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(input));
    console.log(input);
  }, 500)
);

form.addEventListener('submit', e => {
e.preventDefault(); const {
    elements: { email, message },
  } = e.currentTarget;
  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.clear();
});

const storage = localStorage.getItem('feedback-form-state');
const parseStorageData = JSON.parse(storage);
const reset = () => {
  if (parseStorageData !== null) {
    email.value = parseStorageData.email;
    message.value = parseStorageData.message;
  }
};

reset();