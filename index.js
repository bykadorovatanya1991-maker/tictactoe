function myFunc(button) {
  if (button.textContent.trim() === "") {
button.textContent = player;
if(player ===  "X") {player = "O"
 } else {
  player = "X"
 }

 const button1 = document.getElementById ("meinButton1");
const button2 = document.getElementById ("meinButton2");
const button3 = document.getElementById ("meinButton3");
if (button1.textContent === button2.textContent && 
button2.textContent === button3.textContent && 
button1.textContent.trim() !== ``) {
  alert(button1.textContent + " hat gewonnen!")
}

const button4 = document.getElementById ("meinButton4");
const button5 = document.getElementById ("meinButton5");
const button6 = document.getElementById ("meinButton6");
if (button4.textContent === button5.textContent && 
button5.textContent === button6.textContent && 
button4.textContent.trim() !== ``) {
  alert(button4.textContent + " hat gewonnen!")
}

const button7 = document.getElementById ("meinButton7");
const button8 = document.getElementById ("meinButton8");
const button9 = document.getElementById ("meinButton9");
if (button7.textContent === button8.textContent && 
button8.textContent === button9.textContent && 
button7.textContent.trim() !== ``) {
  alert(button7.textContent + " hat gewonnen!")
}


if (button1.textContent === button4.textContent && 
button4.textContent === button7.textContent && 
button1.textContent.trim() !== ``) {
  alert(button1.textContent + " hat gewonnen!")
}


if (button2.textContent === button5.textContent && 
button5.textContent === button8.textContent && 
button2.textContent.trim() !== ``) {
  alert(button2.textContent + " hat gewonnen!")
}


if (button3.textContent === button6.textContent && 
button6.textContent === button9.textContent && 
button3.textContent.trim() !== ``) {
  alert(button3.textContent + " hat gewonnen!")
}


if (button1.textContent === button5.textContent && 
button5.textContent === button9.textContent && 
button1.textContent.trim() !== ``) {
  alert(button1.textContent + " hat gewonnen!")
}


if (button3.textContent === button5.textContent && 
button5.textContent === button7.textContent && 
button3.textContent.trim() !== ``) {
  alert(button3.textContent + " hat gewonnen!")
}

}
}

let player = "X"
