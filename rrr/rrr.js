const boxes = document.querySelectorAll('.box');
let currentIndex = 0;

boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % boxes.length; // Cycle through jokes
    const tooltip = box.querySelector('.tooltip');
    tooltip.style.opacity = 0;
    setTimeout(() => {
      tooltip.textContent = `Joke ${currentIndex + 1}`; // Display next joke number
      tooltip.style.opacity = 1;
    }, 300); // Delay before showing new joke
  });
});
