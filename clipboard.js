const pasteTextButton = document.getElementById('paste-text-button');
const textField = document.getElementById('text');
const resetTextButton = document.getElementById('reset-text-button');

const pasteHTMLButton = document.getElementById('paste-html-button');
const htmlField = document.getElementById('html');
const resetHTMLButton = document.getElementById('reset-html-button');
const htmlOutput = document.getElementById('html-output');

resetHTMLButton.addEventListener('click', () => {
  htmlField.value = '';
  htmlOutput.innerHTML = '';
});

resetTextButton.addEventListener('click', () => {
  textField.value = '';
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
