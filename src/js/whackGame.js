let totalPoint = 0;
let imagesShowed = [];
let isPause = false;

const addPoint = (event) => {
  event = event || window.event;
  const target = event.target || event.srcElement;
  const fileNameImage = target.src.toString();

  if (!fileNameImage.endsWith("hole.png")) {
    totalPoint++;
    document.getElementById("scores").innerText = totalPoint;
  }
}

const startGame = async () => {
  const result = await runGame();
}

const runGame = async () => {
  setTimeout(() => {
    setInterval(() => {
      if (!isPause) {
        randomMole();
      }
    }, timeoutMole);
  }, timeoutGame)
}

const randomMole = async () => {
  const isClean = await cleanMoles(imagesShowed);
  if (isClean) {
    addMoles();
  }
}

const addMoles = async () => {
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
}

const finishGame = () => {
  alert(messages.finalGame);
}

const resetGame = () => {
  totalPoint = 0;
  document.getElementById("scores").innerText = totalPoint;
  for (let index = 9; index > 0; index--) {
    document.getElementById(`img${index}`).src = `../images/hole.png`;;
  }
}
