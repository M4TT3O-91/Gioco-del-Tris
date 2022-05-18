var simbol = "X";
var turno = 1;
var numOfCell, matrix;

const btn = document.getElementsByClassName("cell");
const playerTurn = document.getElementById("playerTurn");
const input = document.getElementById("cellInput");
const tableContainer = document.getElementById("trisContainer");
const footerDiv = document.getElementById("footerDiv");
footerDiv.style.display = "none";

var isFinisched = false;

function generateBoard() {
  tableContainer.innerHTML = "";
  numOfCell = input.value;
  numOfCell == "" ? (numOfCell = 3) : numOfCell;

  matrix = [numOfCell];
  for (let t = 0; t < numOfCell; t++) {
    matrix[t] = new Array(numOfCell);
  }

  let table = document.createElement("table");
  table.classList.add("trisTable");

  for (var i = 0; i < numOfCell; i++) {
    let trow = document.createElement("tr");
    for (var j = 0; j < numOfCell; j++) {
      let tcell = document.createElement("td");
      let button = document.createElement("button");
      button.setAttribute("id", `${i}-${j}`);
      button.addEventListener("click", (ev) => cliccked(ev));
      button.classList.add("cell");
      tcell.appendChild(button);
      trow.appendChild(tcell);
      matrix[i][j] = button;
    }
    table.appendChild(trow);
  }
  tableContainer.appendChild(table);
  footerDiv.style.display = "block";
}

function cliccked(ev) {
  // console.log(ev.target.id);
  if (!isFinisched) {
    let splitted = ev.target.id.split("-");
    let row = splitted[0] % numOfCell;
    let column = splitted[1] % numOfCell;
    matrix[row][column].innerHTML = simbol;
    matrix[row][column].disabled = true;
    isVictory("X");
    isVictory("O");
    turno++;
    if (turno % 2) simbol = "X";
    else simbol = "O";
    playerTurn.innerHTML = "Turno Giocatore " + simbol;
  }
}

function resetGame() {
  simbol = "X";
  turno = 1;
  isFinisched = false;
  playerTurn.innerHTML = "Turno Giocatore X";
  for (let index = 0; index < btn.length; index++) {
    btn[index].innerHTML = "";
    btn[index].disabled = false;
  }
}

function isVictory(simbol) {

  for (let r = 0; r < numOfCell; r++) {
    for (let c = 0; c < numOfCell; c++) {

      if(matrix[r][c].innerHTML === simbol && matrix[(numOfCell-r-1)][(numOfCell-c-1)].innerHTML=== simbol && r===c)
        console.log("diagonale");

      // if (r == c && matrix[r][c].innerHTML == simbol) {
      //   console.log(matrix[r][c].innerHTML+" - "+matrix[c][r].innerHTML);
      //   alert("Vittoria Giocatore " + simbol);
      //   playerTurn.innerHTML = "Vittoria Giocatore " + simbol;
      //   // isFinisched = true;
      // }else {
      //   if (turno == numOfCell * numOfCell && !isFinisched) {
      //     alert("Pareggio");
      //     playerTurn.innerHTML = "Pareggio";
      //     // isFinisched = true;
      //   }
      // }
    }
  }

  
}
