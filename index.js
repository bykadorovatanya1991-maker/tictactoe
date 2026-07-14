function gewinn (winner) {
  alert(winner + " hat gewonnen!")
}

function checkGewinn (playfield) {
if (playfield[0][0].textContent === playfield[0][1].textContent && playfield[0][1].textContent === playfield[0][2].textContent
&&
playfield[0][0].textContent.trim() !== ``) {
gewinn (playfield[0][0].textContent)
}
}

function checkGewinn (playfield) {
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
  if (button.textContent.trim() === "") {
button.textContent = player;
if(player ===  "X") {player = "O"
 } else {
  player = "X"
}
}

let playfield = [[],[],[]]

for(let j = 0; j < 3; j++) {
  for(let i = 0; i < 3; i++) {
    try {
      playfield[j][i] = document.getElementById(`meinButton${j*3+i+1}`)  
    } catch(e) {
      alert(e)
    }
  }
}

checkGewinn(playfield)



// j=0 i=0 -> button1
// j=0 i=1 -> button2




// if (playfield[0][0] === playfield[0][1]=== playfield[0][2] 
// &&
// playfield[0][0].trim() !== ``) {
// }

// if (playfield[0][0] === playfield[0][1]=== playfield[0][2] 
// &&
// playfield[0][0].trim() !== ``) {
// }

// if (button4.textContent === button5.textContent && 
// button5.textContent === button6.textContent && 
// button4.textContent.trim() !== ``) {
//   alert(button4.textContent + " hat gewonnen!")
// }

// if (button7.textContent === button8.textContent && 
// button8.textContent === button9.textContent && 
// button7.textContent.trim() !== ``) {
//   alert(button7.textContent + " hat gewonnen!")
// }


// if (button1.textContent === button4.textContent && 
// button4.textContent === button7.textContent && 
// button1.textContent.trim() !== ``) {
//   alert(button1.textContent + " hat gewonnen!")
// }


// if (button2.textContent === button5.textContent && 
// button5.textContent === button8.textContent && 
// button2.textContent.trim() !== ``) {
//   alert(button2.textContent + " hat gewonnen!")
// }


// if (button3.textContent === button6.textContent && 
// button6.textContent === button9.textContent && 
// button3.textContent.trim() !== ``) {
//   alert(button3.textContent + " hat gewonnen!")
// }


// if (button1.textContent === button5.textContent && 
// button5.textContent === button9.textContent && 
// button1.textContent.trim() !== ``) {
//   alert(button1.textContent + " hat gewonnen!")
// }


// if (button3.textContent === button5.textContent && 
// button5.textContent === button7.textContent && 
// button3.textContent.trim() !== ``) {
//   alert(button3.textContent + " hat gewonnen!")
// }

// }
// }
}

let player = "X"
