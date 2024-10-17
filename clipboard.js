const pasteTextButton = document.getElementById('paste-text-button');
const textField = document.getElementById('text');
const resetTextButton = document.getElementById('reset-text-button');

const pasteHTMLButton = document.getElementById('paste-html-button');
const htmlField = document.getElementById('html');
const resetHTMLButton = document.getElementById('reset-html-button');
const htmlOutput = document.getElementById('html-output');

const pasteImageButton = document.getElementById('paste-image-button');
const resetImageButton = document.getElementById('reset-image-button');
const imageWrapper = document.querySelector('.image-wrapper');

pasteTextButton.addEventListener('click', () => {
  // wkleić tekst ze schowka
});

pasteHTMLButton.addEventListener('click', () => {
  // wkleić HTML ze schowka + wyrenderować HTML preview
});

pasteImageButton.addEventListener('click', () => {
  // wkleić obrazek ze schowka
});

resetTextButton.addEventListener('click', () => {
  textField.value = '';
});

resetHTMLButton.addEventListener('click', () => {
  htmlField.value = '';
  htmlOutput.innerHTML = '';
  const placeholder = document.createElement('span');
  placeholder.innerText = 'HTML preview';
  placeholder.classList.add('placeholder');
  htmlOutput.append(placeholder);
});

resetImageButton.addEventListener('click', () => {
  const images = imageWrapper.querySelectorAll('img');
  [...images].forEach((img) => {
    img.remove();
  });
});
