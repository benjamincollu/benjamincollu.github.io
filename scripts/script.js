document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('benjamincollu@gmail.com');
    copyStatus.textContent = 'Email copied.';
  } catch {
    copyStatus.textContent = 'Please copy the email address above.';
  }
});
