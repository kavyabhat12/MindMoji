let currentAnswer = "";

function loadNewEmoji() {
  const level = document.getElementById('level').value;
  fetch(`/get_emoji/${level}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('emoji-display').innerText = data.emoji;
      currentAnswer = data.answer.toLowerCase();
      document.getElementById('result').innerText = "";
      document.getElementById('user-guess').value = "";
    });
}

function checkAnswer() {
  const userGuess = document.getElementById('user-guess').value.trim().toLowerCase();
  const result = document.getElementById('result');
  if (userGuess === currentAnswer) {
    result.innerText = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.innerText = `❌ Wrong! It was: ${currentAnswer}`;
    result.style.color = "red";
  }
}

// ✅ ADD THIS to detect level change and load new emoji
document.getElementById("level").addEventListener("change", function () {
  loadNewEmoji(); // load emoji immediately when level is changed
});

window.onload = loadNewEmoji;
