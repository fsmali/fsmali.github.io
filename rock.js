//DOM MANIPULATION
const gridWrapper = document.querySelector(".grid-wrapper");
const grid = document.querySelector(".grid");
let squares = Array.from(document.querySelectorAll(".grid div"));
const displayScore = document.querySelector("#score");
const button = document.querySelector(".start-button");
const line = document.querySelector(".line");
const overgame = document.querySelector(".gameover");
const reset = document.querySelector(".reset");
const level1Btn = document.querySelector(".levelup1");
const level2Btn = document.querySelector(".levelup2");
const level3Btn = document.querySelector(".levelup3");
const playBtn = document.querySelector(".play");
let timerId;
let score = 0;
let lineScore = 0;

//CREATING TETROMINOS AND COLOR 
const colors = ["red", "blue", "green", "yellow"];

const l = [
  [2, 12, 21, 22],
  [10, 20, 21, 22],
  [10, 11, 12, 22],
  [1, 11, 21, 2],
];
const z = [
  [0, 10, 11, 21],
  [11, 12, 20, 21],
  [0, 10, 11, 21],
  [11, 12, 20, 21],
];
const t = [
  [1, 10, 11, 12],
  [1, 11, 12, 21],
  [10, 11, 12, 21],
  [1, 10, 11, 21],
];
const o = [
  [0, 1, 10, 11],
  [0, 1, 10, 11],
  [0, 1, 10, 11],
  [0, 1, 10, 11],
];

const i = [
  [10, 11, 12, 13],
  [1, 11, 21, 31],
  [10, 11, 12, 13],
  [1, 11, 21, 31],
];
//USING MATH METHOD TO RANDOMIZED COLOR AND TETROMINOES
const tetrominos = [l, z, t, o, i];

let currentPosition = 4;
let currentRotation = [0];

let randomTetrominos = Math.floor(Math.random() * tetrominos.length);
let randomRotation = Math.floor(Math.random() * currentRotation.length);
currentRotation = randomRotation;
let currentTetromino = tetrominos[randomTetrominos][currentRotation];

function draw() {
  currentTetromino.forEach((element) => {
    squares[currentPosition + element].classList.add("tetromino");
    squares[currentPosition + element].style.backgroundColor =
      colors[randomTetrominos];
  });
}


function unDraw() {
  currentTetromino.forEach((element) => {
    squares[currentPosition + element].classList.remove("tetromino");
    squares[currentPosition + element].style.backgroundColor = "";
  });
}

function moveDown() {
  unDraw();
  currentPosition += 10;
  draw();
  stop();
  removeBottom();
  gameOver();
}
//CREATING BOTTOM LINE TO STOP TETROMIOES AT THE BOTTOM 
function stop() {
  if (
    currentTetromino.some((element) =>
      squares[currentPosition + element + 10].classList.contains("bottom")
    )
  ) {
    currentTetromino.forEach((element) =>
      squares[currentPosition + element].classList.add("bottom")
    );
    randomTetrominos = Math.floor(Math.random() * tetrominos.length);
    currentTetromino = tetrominos[randomTetrominos][currentRotation];
    currentPosition = 4;
    const audio = document.createElement("audio");
    audio.src = "./sound/mixkit-select-click-1109.wav";
    audio.play();
    draw();
  }
}


//ARROW KEYS
function arrowKeys(event) {
  unDraw();
  if (event.key === "ArrowLeft") {
    const audio = document.createElement("audio");
    audio.src = "./sound/mixkit-game-click-1114.wav";
    audio.play();
    const left = currentTetromino.some(
      (element) => (currentPosition + element) % 10 === 0
    );
    if (!left) {
      currentPosition--;
    }
    if (
      currentTetromino.some((element) =>
        squares[currentPosition + element].classList.contains("bottom")
      )
    ) {
      currentPosition++;
    }
  } else if (event.key === "ArrowRight") {
    const audio = document.createElement("audio");
    audio.src = "./sound/mixkit-game-click-1114.wav";
    audio.play();
    const right = currentTetromino.some(
      (element) => (currentPosition + element) % 10 === 9
    );
    if (!right) {
      currentPosition++;
    }
    if (
      currentTetromino.some((element) =>
        squares[currentPosition + element].classList.contains("bottom")
      )
    ) {
      currentPosition--;
    }
  } else if (event.key === "ArrowDown") {
    const audio = document.createElement("audio");
    audio.src = "./sound/mixkit-hard-typewriter-click-1119.wav";
    audio.play();
    moveDown();
  } else if (event.key === "ArrowUp") {
    const audio = document.createElement("audio");
    audio.src = "./sound/mixkit-video-game-mystery-alert-234.wav";
    audio.play();
    rotate();
  }
  draw();
}
document.addEventListener("keydown", arrowKeys);
// CLEARING LINE AND KEEPING SCRORE
function removeBottom() {
  for (let i = 0; i < 199; i += 10) {
    const row = [
      i,
      i + 1,
      i + 2,
      i + 3,
      i + 4,
      i + 5,
      i + 6,
      i + 7,
      i + 8,
      i + 9,
    ];
    if (row.every((index) => squares[index].classList.contains("bottom"))) {
      score += 10;
      lineScore += 1;
      displayScore.innerHTML = score;
      line.innerHTML = lineScore;
      const audio = document.createElement("audio");
      audio.src =
        "./sound/mixkit-quick-positive-video-game-notification-interface-265.wav";
      audio.play();

      row.forEach((index) => {
        squares[index].classList.remove("bottom");
        squares[index].classList.remove("tetromino");
        squares[index].style.backgroundColor = "";
      });
      const squaresRemoved = squares.splice(i, 10);
      squares = squaresRemoved.concat(squares);
      squares.forEach((element) => grid.appendChild(element));
    }
  }
}
//ROTATE TETROMINO AND FIXING EDGES
const rightEdge = () =>currentTetromino.some((element) => (currentPosition + element + 1) % 10 === 0);
const leftEdge = () =>currentTetromino.some((element) => (currentPosition + element) % 10 === 0);
function checkRotatedPosition(element) {


  if ((currentPosition + 1) % 10 < 4) {
    if (rightEdge()) {
      currentPosition += 1;
      checkRotatedPosition(element);
    }
  } else if (currentPosition % 10 > 5) {
    if (leftEdge()) {
      currentPosition -= 1;
      checkRotatedPosition(element);
    }
  }
}

const rotate = () => {
  unDraw();
  currentRotation++;
  if (currentRotation === currentTetromino.length) {
    currentRotation = 0;
  }
  currentTetromino = tetrominos[randomTetrominos][currentRotation];
  checkRotatedPosition();
  draw();
};
rotate();
//CREATE BUTTONS--LEVELS


const play=()=>{
  document
    .querySelectorAll(".tetromino")
    .forEach((tetromino) => (tetromino.style.display = "block"));
       overgame.innerHTML = "";

       if(timerId){
        clearInterval(timerId)
  timerId = null
       }else{
         timerId = setInterval(moveDown, 1000);
       }
       
}
playBtn.addEventListener("click", play);


function levelUp1() {
document
  .querySelectorAll(".tetromino")
  .forEach((tetromino) => (tetromino.style.display = "block"));
  overgame.innerHTML = "";
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  } else {
    timerId = setInterval(moveDown, 700);
    
  }
};
level1Btn.addEventListener("click", levelUp1);

function levelUp2() {
  document
    .querySelectorAll(".tetromino")
    .forEach((tetromino) => (tetromino.style.display = "block"));
    overgame.innerHTML = "";
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  } else {
    timerId = setInterval(moveDown, 400);
   
  }
}
level2Btn.addEventListener("click", levelUp2);

function levelUp3() {
  document
    .querySelectorAll(".tetromino")
    .forEach((tetromino) => (tetromino.style.display = "block"));
    overgame.innerHTML = "";
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  } else {
    timerId = setInterval(moveDown, 100);
    
  }
}
level3Btn.addEventListener("click", levelUp3);
const gameOver = () => {
  if (
    currentTetromino.some((element) =>
      squares[currentPosition + element].classList.contains("bottom")
    )
  ) {
    clearInterval(timerId);
    const audio = document.createElement("audio");
    audio.src = "./sound/mixkit-arcade-fast-game-over-233.wav";
    audio.play();

    overgame.classList.remove("gameover");
    overgame.innerHTML = "Game Over!!";
    // overgame.currentPosition = "absolute";
  }
};

//RESET AND CLEAR BOARD
function resetGame() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;

    squares.forEach((index) => {
      index.classList.remove("tetromino");
     
      index.style.backgroundColor = "";
      index.classList.add("bottom");

       overgame.innerHTML = "";
       overgame.innerHTML = "Play Again!!";
    });
    moveDown();
    score = 0;
    lineScore = 0;
    displayScore.innerHTML = score;
    line.innerHTML = lineScore;
   

  }
}
reset.addEventListener("click", resetGame);
document.querySelectorAll(".tetromino").forEach(tetromino=>tetromino.style.display = "none");
