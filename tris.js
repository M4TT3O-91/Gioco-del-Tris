var simbol = "X";
var turno = 1;
var buttonArray = document.getElementsByClassName("cell");

function cliccked(position) {
  if (turno % 2) simbol = "X";
  else simbol = "O";
  console.log(turno);
  //   if (reset === true) {
  let column = position % 3 == 0 ? 3 : position % 3;
  // console.log(`Bottone pos ${position} e colonna ${column}`);
  console.log(`Bottone: ${buttonArray[position - 1].value}`);
  buttonArray[position - 1].innerHTML = simbol;
  turno++;
  //   }
}

function resetGame() {
  simbol = "X";
  for (let index = 0; index < buttonArray.length; index++) {
    buttonArray[index].innerHTML = "";
  }
}
