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

pasteTextButton.addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    textField.value += text;
  } catch (error) {
    console.error(error);
  }
});

pasteHTMLButton.addEventListener('click', async () => {
  const items = await navigator.clipboard.read();

  for (const item of items) {
    if (item.types.includes('text/html')) {
      const blob = await item.getType('text/html');
      const html = await blob.text();
      htmlField.value = html;
      htmlOutput.innerHTML = html;
    }
  }
});

pasteImageButton.addEventListener('click', async () => {
  const items = await navigator.clipboard.read();

  for (const item of items) {
    if (item.types.includes('image/png')) {
      const blob = await item.getType('image/png');
      appendImage(blob);
    }
  }
});

const appendImage = (blob) => {
  const img = document.createElement('img');
  img.src = URL.createObjectURL(blob);
  imageWrapper.append(img);
};
