import getDots from "./getDots.js";
import gameMaker from "./gameMaker.js";
function animateRoll(dotsElement, randomNumber) {
  let currentIndex = 0;
  const animationInterval = setInterval(() => {
    const currentNumber = (currentIndex % 6) + 1; // 0 to 5 + 1
    dotsElement.innerHTML = getDots(currentNumber);
    currentIndex++;

    if (currentIndex === 30) {
      clearInterval(animationInterval);
      dotsElement.innerHTML = getDots(randomNumber);
      gameMaker(randomNumber)
    }
  }, 100);
}
export default animateRoll;
