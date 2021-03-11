let totalPoint = 0;
let imagesShowed = [];
let isPause = false;
let cronometerTimer, runGameTimer = undefined;
let timeoutGameInSec = timeoutGame / 1000;

const addPoint = (event) => {

  event = event || window.event;
  const target = event.target || event.srcElement;
  const fileNameImage = target.src.toString();

  if (!fileNameImage.endsWith("hole.png")) {
    document.getElementById("scores").innerText = totalPoint++;
  }
}

const startGame = async () => {
  addMoles();
  handleTimeoutGame();
  finishGame();
}

// Handle the timeout for the game
const handleTimeoutGame = () => {
  document.getElementById("timeout").innerText = timeoutGame / 1000;
  cronometerTimer = setInterval(() => {
    if (!isPause) {
      timeoutGameInSec--;
      document.getElementById("timeout").innerText = timeoutGameInSec;
    }
  }, 1000);
}

const addMoles = () => {
  runGameTimer = setInterval(async () => {
    if (!isPause) {
      const isClean = await cleanMoles(imagesShowed);
      if (isClean) {
        addRandomMoles();
      }
    }
  }, timeoutMole);
}

const addRandomMoles = () => {
  let amountMoleWithal = Math.floor(Math.random() * maxSimultaneousMole) + 1;
  while (amountMoleWithal > 0) {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const randomImagem = document.getElementById(`img${randomNumber}`);
    imagesShowed.push(randomImagem);
    const randomMole = Math.floor(Math.random() * 3) + 1;
    randomImagem.src = `../images/mole${randomMole}.png`;
    amountMoleWithal--;
  }
}

const cleanMoles = async () => {
  return new Promise((resolve, reject) => {
    try {
      if (imagesShowed.length > 0) {
        imagesShowed.forEach(image => image.src = `../images/hole.png`);
      }
      resolve(true);
    } catch (error) {
      reject("[error]: a error happen when the change clean moles images.")
    }
  })
}

const stopGame = () => {
  isPause = !isPause;
  clearInterval(cronometer);
}

const resetGame = () => {
  totalPoint = 0;
  document.getElementById("scores").innerText = 0;
  timeoutGameInSec = timeoutGame / 1000;
  for (let index = 9; index > 0; index--) {
    document.getElementById(`img${index}`).src = `../images/hole.png`;;
  }
}

const finishGame = () => {
  setTimeout(() => {
    clearInterval(runGameTimer);
    clearInterval(cronometerTimer);
    alert(`Total Point:${totalPoint} \n${messages.finalGame}`)
  }, timeoutGame);
}
