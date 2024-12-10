// Timer functionality
const timerElement = document.getElementById('timerDisplay');
let seconds = 0;

function updateTimer() {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  timerElement.textContent = `${mins}:${secs}`;
  seconds++;
}
setInterval(updateTimer, 1000); // Update timer every second

// Draggable cards functionality
const cards = Array.from(document.querySelectorAll('.draggable-card'));

let isDragging = false;
let startY;

document.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const offsetY = e.clientY - startY;

  if (offsetY > 100) {
    rollCardsDown();
    startY = e.clientY;
  } else if (offsetY < -100) {
    rollCardsUp();
    startY = e.clientY;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

function rollCardsUp() {
  const firstCard = cards.shift();
  cards.push(firstCard);
  updateCardPositions();
}

function rollCardsDown() {
  const lastCard = cards.pop();
  cards.unshift(lastCard);
  updateCardPositions();
}

function updateCardPositions() {
  // Clear all visibility classes first
  cards.forEach((card) => {
    card.classList.remove('visible-top', 'visible-center', 'visible-bottom');
  });

  // Add visibility classes to the top, center, and bottom cards
  const len = cards.length;
  cards[len - 1].classList.add('visible-top'); // Top card (last in array)
  cards[0].classList.add('visible-center'); // Center card (current front)
  cards[1].classList.add('visible-bottom'); // Bottom card (next in array)
}

// Initialize positions
updateCardPositions();



