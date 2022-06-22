//Random Number:
let rand = Math.floor(Math.random() * 3 + 1);
console.log(rand);

//Computer Player:
function playerComp() {
  let element;
  let data = rand;
  if (data === 1) {
    element = 'rock';
  } else if (data === 2) {
    element = 'paper';
  } else if (data === 3) {
    element = 'scissors';
  }
  return element;
}
// console.log(playerComp());

//Real Player:
function playerReal() {
  let element = prompt('Enter Rock, Paper or Scissors: ').toLowerCase();
  return element;
}
// console.log(playerReal());

let comp = playerComp();
let real = playerReal();

//Game Logic:
let playRound = function (real, computer) {
  if (real === computer) {
    return `Match Drawn!`;
  } else {
    if((real === 'rock' && computer === 'scissors') || (real === 'paper' && computer === 'rock') || (real === 'scissors' && computer === 'paper')){
        return `You Won! ${real} beats ${computer};`
    }else{
        return `You Lose! ${computer} beats ${real}`;
    }
  }
};

const game = function(n){
    let i = 0;
    while (i<n){
        playRound(real, comp);
        i++;
    }
    console.log(playRound(real, comp));
}
game(5);
