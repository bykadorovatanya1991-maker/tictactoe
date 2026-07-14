function gewinn(winner) {
  document.getElementById("winnerMessage").textContent =
    winner + " hat gewonnen!";
  isRunning = false 

  document.getElementById("restartButton").style.display = "block";
}

function checkGewinn (playfield) {
  if (playfield[0][0].textContent === playfield[0][1].textContent && playfield[0][1].textContent === playfield[0][2].textContent
    &&
    playfield[0][0].textContent.trim() !== ``) {
    gewinn (playfield[0][0].textContent)
    }

  if (playfield[1][0].textContent === playfield[1][1].textContent && playfield[1][1].textContent === playfield[1][2].textContent
    &&
    playfield[1][0].textContent.trim() !== ``) {
    gewinn (playfield[1][0].textContent)
    }

  if (playfield[2][0].textContent === playfield[2][1].textContent && playfield[2][1].textContent === playfield[2][2].textContent
    &&
    playfield[2][0].textContent.trim() !== ``) {
    gewinn (playfield[2][0].textContent)
    }

  if (playfield[0][0].textContent === playfield[1][0].textContent && playfield[1][0].textContent === playfield[2][0].textContent
    &&
    playfield[0][0].textContent.trim() !== ``) {
    gewinn (playfield[0][0].textContent)
  }

  if (playfield[0][1].textContent === playfield[1][1].textContent && playfield[1][1].textContent === playfield[2][1].textContent
    &&
    playfield[0][1].textContent.trim() !== ``) {
    gewinn (playfield[0][1].textContent)
  }

  if (playfield[0][2].textContent === playfield[1][2].textContent && playfield[1][2].textContent === playfield[2][2].textContent
    &&
    playfield[0][2].textContent.trim() !== ``) {
    gewinn (playfield[0][2].textContent)
  }

  if (playfield[0][0].textContent === playfield[1][1].textContent && playfield[1][1].textContent === playfield[2][2].textContent
    &&
    playfield[0][0].textContent.trim() !== ``) {
    gewinn (playfield[0][0].textContent)
  }

  if (playfield[2][0].textContent === playfield[1][1].textContent && playfield[1][1].textContent === playfield[0][2].textContent
    &&
    playfield[2][0].textContent.trim() !== ``) {
    gewinn (playfield[2][0].textContent)
  }
}


function myFunc(button) {
if (isRunning === false) {return}
  if (button.textContent.trim() === "") {
    button.textContent = player;
    checkGewinn(playfield);
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    document.getElementById("currentPlayer").textContent = player;
  }
}

let player = "X"
let playfield = [[],[],[]]
let isRunning = true


  for(let j = 0; j < 3; j++) {
    for(let i = 0; i < 3; i++) {
      try {
        playfield[j][i] = document.getElementById(`meinButton${j*3+i+1}`)  
      } catch(e) {
        alert(e)
      }
    }
  }

function restartGame() {
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      playfield[j][i].textContent = "";
    }
  }
  document.getElementById("winnerMessage").textContent = "";
  player = "X";
  isRunning = true;
  document.getElementById("currentPlayer").textContent = "X";
  document.getElementById("restartButton").style.display = "none";
}
