var simbol = "X";
var turno = 1;
var buttonArray = document.getElementsByClassName("cell");

function cliccked(position) {
  if (turno % 2) simbol = "X";
  else simbol = "O";
  buttonArray[position - 1].innerHTML = simbol;
  buttonArray[position - 1].disabled = true;
  isVictory();
  turno++;
}

function resetGame() {
  simbol = "X";
  turno = 1;
  for (let index = 0; index < buttonArray.length; index++) {
    buttonArray[index].innerHTML = "";
    buttonArray[index].disabled = false;
  }
}

function isVictory() {
  if (
    buttonArray[0].innerHTML == "X" &&
    buttonArray[1].innerHTML == "X" &&
    buttonArray[2].innerHTML == "X"
  )
    alert("Vittoria Giocatore X");
  else if (
    buttonArray[0].innerHTML == "X" &&
    buttonArray[4].innerHTML == "X" &&
    buttonArray[8].innerHTML == "X"
  )
    alert("Vittoria Giocatore X");
  else if (
    buttonArray[0].innerHTML == "X" &&
    buttonArray[3].innerHTML == "X" &&
    buttonArray[6].innerHTML == "X"
  )
    alert("Vittoria Giocatore X");
  else if (
    buttonArray[1].innerHTML == "X" &&
    buttonArray[4].innerHTML == "X" &&
    buttonArray[7].innerHTML == "X"
  )
    alert("Vittoria Giocatore X");
  else if (
    buttonArray[2].innerHTML == "X" &&
    buttonArray[5].innerHTML == "X" &&
    buttonArray[8].innerHTML == "X"
  )
    alert("Vittoria Giocatore X");
  else if (
    buttonArray[2].innerHTML == "X" &&
    buttonArray[4].innerHTML == "X" &&
    buttonArray[6].innerHTML == "X"
  )
    alert("Vittoria Giocatore X");
  /*---------------------------------------*/ else if (
    buttonArray[0].innerHTML == "O" &&
    buttonArray[1].innerHTML == "O" &&
    buttonArray[2].innerHTML == "O"
  )
    alert("Vittoria Giocatore O");
  else if (
    buttonArray[0].innerHTML == "O" &&
    buttonArray[4].innerHTML == "O" &&
    buttonArray[8].innerHTML == "O"
  )
    alert("Vittoria Giocatore O");
  else if (
    buttonArray[0].innerHTML == "O" &&
    buttonArray[3].innerHTML == "O" &&
    buttonArray[6].innerHTML == "O"
  )
    alert("Vittoria Giocatore O");
  else if (
    buttonArray[1].innerHTML == "O" &&
    buttonArray[4].innerHTML == "O" &&
    buttonArray[7].innerHTML == "O"
  )
    alert("Vittoria Giocatore O");
  else if (
    buttonArray[2].innerHTML == "O" &&
    buttonArray[5].innerHTML == "O" &&
    buttonArray[8].innerHTML == "O"
  )
    alert("Vittoria Giocatore O");
  else if (
    buttonArray[2].innerHTML == "O" &&
    buttonArray[4].innerHTML == "O" &&
    buttonArray[6].innerHTML == "O"
  )
    alert("Vittoria Giocatore O");
  else if (turno == 9)
    alert("Pareggio");
}
