function fetchSecretMessage(task) {
  fetch('https://secret-messages-7i4e.onrender.com/api/task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ task }),
  })
    .then((response) => response.json())
    .then((data) => {
      const messageContainer = document.getElementById('messageContainer');
      messageContainer.textContent = data.message;
    })
    .catch((error) => console.error('Error:', error));
}
