document.getElementById('wordCountForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const textInput = document.getElementById('textInput').value;
  const resultBox = document.getElementById('result');
  const wordCountDisplay = document.getElementById('wordCount');

  try {
    const response = await fetch('https://wordcounterapi-production.up.railway.app/count-words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: textInput })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'API xatolik javobi mavjud emas');
    }

    const data = await response.json();
    wordCountDisplay.textContent = data.wordCount;
    resultBox.classList.remove('d-none'); 
  } catch (error) {

    alert('Xatolik yuz berdi: ' + error.message);
  }
});
