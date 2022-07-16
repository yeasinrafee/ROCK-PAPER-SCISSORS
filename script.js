const selections = document.querySelectorAll("[data-selection]");
const you = document.querySelector("[data-select-you]");
const scoreYou = document.querySelector("[data-score-you]");
const scoreComp = document.querySelector("[data-score-comp]");
const allResults = document.querySelector(".allResults");
const resultText = document.querySelector(".resultText");
const btn = document.querySelector("[data-restart-btn]");
const btn_restart = document.querySelector("[data-btn]");
let selectionName, comp, resultUI;
let youScore = 0;
let compScore = 0;

// Computer will randomly select
function computerSelection() {
  const rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// Game function which also update the score
function result(you, comp) {
  if (comp === you) return you;
  else if (
    (you === "rock" && comp === "scissors") ||
    (you === "paper" && comp === "rock") ||
    (you === "scissors" && comp === "paper")
  ) {
    scoreYou.textContent = youScore + 1;
    youScore++;
    return you;
  } else {
    scoreComp.textContent = compScore + 1;
    compScore++;
    return comp;
  }
}

// This will update the game UI
function updateUI(select, result) {
  let element = document.createElement("div");
  if (select === "rock") {
    if (select === result) {
      element.textContent = "✊";
      element.classList.add("winner");
    } else {
      element.textContent = "✊";
    }
  }
  if (select === "paper") {
    if (select === result) {
      element.textContent = "✋";
      element.classList.add("winner");
    } else {
      element.textContent = "✋";
    }
  }
  if (select === "scissors") {
    if (select === result) {
      element.textContent = "✌";
      element.classList.add("winner");
    } else {
      element.textContent = "✌";
    }
  }
  element.classList.add("selected-item");
  allResults.prepend(element);
}

// It'll make finish the game and remove current UI and Create result also visible restart button
function removeUI(youScore, compScore) {
  if (youScore == 5 || compScore == 5) {
    allResults.classList.add("remove");
    let text = document.createElement("p");
    text.textContent = `${
      youScore > compScore ? "You Won the Game!" : "You lose the Game!"
    }
    Your Score: ${youScore}, Computer Score: ${compScore}.`;
    text.classList.add("active");
    resultText.append(text);
    btn.classList.add("btn-active");

    //After finishing the game It'll disable the buttons.
    selections.forEach((selection) =>
      selection.setAttribute("disabled", "disabled")
    );
  }
}

// This will restart the UI
function restartUI() {
  youScore = 0;
  compScore = 0;
  scoreYou.textContent = 0;
  scoreComp.textContent = 0;
  let firstChild = resultText.firstElementChild;
  firstChild.remove();
  btn.classList.remove("btn-active");
  removeUI(youScore, compScore);
  window.location.reload();
}

// This is Controlling the whole game
selections.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    let selectionName = selection.dataset.selection;
    let selectionComp = computerSelection();
    resultUI = result(selectionName, selectionComp);
    updateUI(selectionComp, resultUI);
    updateUI(selectionName, resultUI);
    removeUI(youScore, compScore);
  });
});

// After Clicking restart button It'll restart the whole UI
btn_restart.addEventListener("click", restartUI);
