//https://stackoverflow.com/questions/11741070/how-to-get-the-element-clicked-on
let cells = document.querySelectorAll(".cell");
let spaceXWins = document.querySelector(".x-wins");
let spaceOWins = document.querySelector(".o-wins");
let gameOver = false;
let turnX = true;
let moveCounter = 0;
let xWins = parseInt(localStorage.getItem("xWins"));
let oWins = parseInt(localStorage.getItem("oWins"));

if (localStorage.getItem("xWins") === 0) {
  spaceXWins.innerText = 0;
} else {
  spaceXWins.innerText = localStorage.getItem("xWins");
}
if (localStorage.getItem("oWins") === 0) {
  spaceOWins.innerText = 0;
} else {
  spaceOWins.innerText = localStorage.getItem("oWins");
}

let board = [
  document.getElementById("tl"),
  document.getElementById("tm"),
  document.getElementById("tr"),
  document.getElementById("ml"),
  document.getElementById("mm"),
  document.getElementById("mr"),
  document.getElementById("br"),
  document.getElementById("bm"),
  document.getElementById("bl")
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerText === "") {
      if (turnX) {
        cell.innerText = "X";
        document.getElementById("player-turn").innerHTML = "Current player: O";
        cell.classList.add("cell");
        cell.classList.remove("cellBlue");
        turnX = false;
      } else {
        cell.innerText = "O";
        cell.classList.add("cellBlue");
        cell.classList.remove("cell");
        turnX = true;
        document.getElementById("player-turn").innerHTML = "Current player: X";
      }
      checkWinner();

      // const apiURL = "http://placekitten.com/200/300";
      // const output = document.getElementById("cat-image");

      // fetch(apiURL)
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw new Error("Network response was not ok");
      //     }
      //     return response.blob();
      //   })
      //   .then((imageBlob) => {
      //     const imageURL = URL.createObjectURL(imageBlock);
      //     const imgElement = document.createELement('img');
      //     imgElement.src = imageURL;
      //     output.appendChild(imgElement);
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //   });
    }
  });
});

function checkWinner() {
  if (
    board[0].innerText.localeCompare(board[1].innerText) === 0 &&
    board[1].innerText.localeCompare(board[2].innerText) === 0 &&
    board[0].innerText !== ""
  ) {
    alert("Winner is: " + board[0].innerText + "!");
    setWins(board[0].innerText);
    resetBoard();
  } else if (
    board[3].innerText.localeCompare(board[4].innerText) === 0 &&
    board[4].innerText.localeCompare(board[5].innerText) === 0 &&
    board[3].innerText !== ""
  ) {
    console.log(board[3].innerText);
    alert("Winner is: " + board[3].innerText + "!");
    setWins(board[3].innerText);
    resetBoard();
  } else if (
    board[6].innerText.localeCompare(board[7].innerText) === 0 &&
    board[7].innerText.localeCompare(board[8].innerText) === 0 &&
    board[6].innerText !== ""
  ) {
    alert("Winner is: " + board[6].innerText + "!");
    setWins(board[6].innerText);
    resetBoard();
  } else if (
    board[0].innerText.localeCompare(board[3].innerText) === 0 &&
    board[3].innerText.localeCompare(board[6].innerText) === 0 &&
    board[0].innerText !== ""
  ) {
    alert("Winner is: " + board[0].innerText + "!");
    setWins(board[0].innerText);
    resetBoard();
  } else if (
    board[1].innerText.localeCompare(board[4].innerText) === 0 &&
    board[4].innerText.localeCompare(board[7].innerText) === 0 &&
    board[1].innerText !== ""
  ) {
    alert("Winner is: " + board[1].innerText + "!");
    setWins(board[1].innerText);
    resetBoard();
  } else if (
    board[2].innerText.localeCompare(board[5].innerText) === 0 &&
    board[5].innerText.localeCompare(board[8].innerText) === 0 &&
    board[2].innerText !== ""
  ) {
    alert("Winner is: " + board[2].innerText + "!");
    setWins(board[2].innerText);
    resetBoard();
  } else if (
    board[0].innerText.localeCompare(board[4].innerText) === 0 &&
    board[4].innerText.localeCompare(board[8].innerText) === 0 &&
    board[0].innerText !== ""
  ) {
    alert("Winner is: " + board[0].innerText + "!");
    setWins(board[0].innerText);
    resetBoard();
  } else if (
    board[2].innerText.localeCompare(board[4].innerText) === 0 &&
    board[4].innerText.localeCompare(board[6].innerText) === 0 &&
    board[2].innerText !== ""
  ) {
    alert("Winner is: " + board[2].innerText + "!");
    setWins(board[2].innerText);
    resetBoard();
  } else if (checkTie()) {
    alert("Tie!");
    resetBoard();
  }
}

function resetBoard() {
  for (let i = 0; i < board.length; i++) {
    board[i].innerText = "";
  }
}

function checkTie() {
  return Array.from(cells).every((cell) => cell.innerText !== "");
}

function setWins(winner) {
  if (winner.localeCompare("X") === 0) {
    xWins++;
    localStorage.setItem("xWins", xWins);
    console.log(localStorage.getItem("xWins"));
    spaceXWins.innerText = xWins;
  } else {
    oWins++;
    localStorage.setItem("oWins", oWins);
    spaceOWins.innerText = oWins;
  }
}
