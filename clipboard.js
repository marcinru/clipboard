const pasteTextButton = document.getElementById('paste-text-button');
const resetTextButton = document.getElementById('reset-text-button');
const textField = document.getElementById('text');

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
