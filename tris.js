var simbol = "X";
var turno = 1;
var btn = document.getElementsByClassName("cell");
var playerTurn = document.getElementById("playerTurn");
var isFinisched = false;

function cliccked(position) {
  if (!isFinisched) {
    if (turno % 2) simbol = "X";
    else simbol = "O";
    playerTurn.innerHTML = "Turno Giocatore " + simbol;
    btn[position - 1].innerHTML = simbol;
    btn[position - 1].disabled = true;
    isVictory("X");
    isVictory("O");
    turno++;
  }
}

function resetGame() {
  simbol = "X";
  turno = 1;
  isFinisched = false;
  playerTurn.innerHTML = "Turno giocaotre X";
  for (let index = 0; index < btn.length; index++) {
    btn[index].innerHTML = "";
    btn[index].disabled = false;
  }
}

function isVictory(simbol) {
  if (
    btn[0].innerHTML == simbol &&
    btn[1].innerHTML == simbol &&
    btn[2].innerHTML == simbol
  ) {
    alert("Vittoria Giocatore " + simbol);
    playerTurn.innerHTML = "Vittoria Giocatore " + simbol;
    isFinisched = true;
  } else if (
    btn[3].innerHTML == simbol &&
    btn[4].innerHTML == simbol &&
    btn[5].innerHTML == simbol
  ) {
    alert("Vittoria Giocatore " + simbol);
    playerTurn.innerHTML = "Vittoria Giocatore " + simbol;
    isFinisched = true;
  } else if (
    btn[6].innerHTML == simbol &&
    btn[7].innerHTML == simbol &&
    btn[8].innerHTML == simbol
  ) {
    alert("Vittoria Giocatore " + simbol);
    playerTurn.innerHTML = "Vittoria Giocatore " + simbol;
    isFinisched = true;
  } else if (
    btn[1].innerHTML == simbol &&
    btn[4].innerHTML == simbol &&
    btn[7].innerHTML == simbol
  ) {
    alert("Vittoria Giocatore " + simbol);
    playerTurn.innerHTML = "Vittoria Giocatore " + simbol;
    isFinisched = true;
  } else if (
    btn[2].innerHTML == simbol &&
    btn[5].innerHTML == simbol &&
    btn[8].innerHTML == simbol
  ) {
    alert("Vittoria Giocatore " + simbol);
    playerTurn.innerHTML = "Vittoria Giocatore " + simbol;
    isFinisched = true;
  } else if (
    btn[0].innerHTML == simbol &&
    btn[4].innerHTML == simbol &&
    btn[8].innerHTML == simbol
  ) {
    alert("Vittoria Giocatore " + simbol);
    playerTurn.innerHTML = "Vittoria Giocatore " + simbol;
    isFinisched = true;
  } else if (
    btn[0].innerHTML == simbol &&
    btn[3].innerHTML == simbol &&
    btn[6].innerHTML == simbol
  ) {
    alert("Vittoria Giocatore " + simbol);
    playerTurn.innerHTML = "Vittoria Giocatore " + simbol;
    isFinisched = true;
  } else if (
    btn[1].innerHTML == simbol &&
    btn[4].innerHTML == simbol &&
    btn[7].innerHTML == simbol
  ) {
    alert("Vittoria Giocatore " + simbol);
    playerTurn.innerHTML = "Vittoria Giocatore " + simbol;
    isFinisched = true;
  } else if (
    btn[2].innerHTML == simbol &&
    btn[5].innerHTML == simbol &&
    btn[8].innerHTML == simbol
  ) {
    alert("Vittoria Giocatore " + simbol);
    playerTurn.innerHTML = "Vittoria Giocatore " + simbol;
    isFinisched = true;
  } else if (
    btn[2].innerHTML == simbol &&
    btn[4].innerHTML == simbol &&
    btn[6].innerHTML == simbol
  ) {
    alert("Vittoria Giocatore " + simbol);
    playerTurn.innerHTML = "Vittoria Giocatore " + simbol;
    isFinisched = true;
  } else {
    if (turno == 9 && !isFinisched) {
      alert("Pareggio");
      playerTurn.innerHTML = "Pareggio";
      isFinisched = true;
    }
  }
}
