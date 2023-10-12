
var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const formInput = document.querySelector('input[name="email"]');
const formText = document.querySelector('textarea[name="message"]');
const Storage = 'feedback-form-state';
let userDataObject = {};

form.addEventListener('input', throttle(inputHandler, 500));
form.addEventListener('submit', submitHandler);

function inputHandler(e) {
  userDataObject[e.target.name] = e.target.value;

  localStorage.setItem(Storage, JSON.stringify(userDataObject));
}

function submitHandler(e) {
  e.preventDefault();
  const userDataSaved = localStorage.getItem(Storage);

  const userDataParsed = JSON.parse(userDataSaved);
  console.log(userDataParsed);
  localStorage.removeItem(Storage);
  formInput.value = '';
  formText.value = '';
}

function getUserData() {
  const userDataSaved = localStorage.getItem(Storage);

  const userDataParsed = JSON.parse(userDataSaved);

  if (userDataParsed) {
    formInput.value = userDataParsed.email;
    formText.value = userDataParsed.message;
  }
}

getUserData();
