// let play=document.getElementById('status-head');
// let rock=document.getElementById('rock-button');
// let paper=document.getElementById('paper-button');
// let scissors=document.getElementById('scissors-button');
// let displayMessage = document.querySelector('.move-display')

// let moveList=['Rock','Paper','Scissors']
// rock.addEventListener("click", ()=> startGame(moveList[0]));
// paper.addEventListener("click", () => startGame(moveList[1]));
// scissors.addEventListener("click", ()=> startGame(moveList[2]));

// function  randomMove(){
//     return moveList[Math.floor(Math.random()*moveList.length)];
// }
// function startGame(playerChoice){
//     let computerchoice=randomMove()
//     displayMessage.children[0].innerHTML = `PLAYER  : ${playerChoice}`;
//     displayMessage.children[1].innerHTML = `COMPUTER  : ${computerchoice}`;
//     let result =calResult(playerChoice,computerchoice);
//     play.innerHTML = result;

//     if (result==="You Win" || result==="You Lose" || result==="Draw"){
//         rock.style.display="none";
//         scissors.style.display="none";
//         paper.innerText="Play Once More"
//         paper.addEventListener('click',PlayAgain)
//     }




//     }
//     function calResult(move1, move2){
//         if(move1 === move2){
//             return "Draw";
//         }else if((move1 === moveList[0] && move2 === moveList[2]) ||
//         (move1 === moveList[1] && move2 === moveList[0]) ||
//         (move1 === moveList[2] && move2 === moveList[1])){
//             return "You Win";
//         }else{
//             return "You Lost";
//         }
        
//         }
        
        

// function PlayAgain(){
//     rock.style.display="inline-block";
//     scissors.style.display="inline-block";
//     paper.innerHTML="Papers";
//     play.innerHTML="Lets Play";
//     displayMessage.children[0].innerHTML = '';
//     displayMessage.children[1].innerHTML = '';
//     paper.removeEventListener('click',PlayAgain)
// }



let play = document.getElementById('status-head');
let rock = document.getElementById('rock-button');
let paper = document.getElementById('paper-button');
let scissors = document.getElementById('scissors-button');
let displayMessage = document.querySelector('.move-display');

let moveList = ['Rock', 'Paper', 'Scissors'];

rock.addEventListener("click", () => startGame(moveList[0]));
paper.addEventListener("click", () => startGame(moveList[1]));
scissors.addEventListener("click", () => startGame(moveList[2]));

function randomMove() {
  return moveList[Math.floor(Math.random() * moveList.length)];
}

function startGame(playerChoice) {
  let computerChoice = randomMove();
  displayMessage.children[0].innerHTML = `PLAYER: ${playerChoice}`;
  displayMessage.children[1].innerHTML = `COMPUTER: ${computerChoice}`;
  let result = calResult(playerChoice, computerChoice);
  play.innerHTML = result;

  if (result === "You Win" || result === "You Lose" || result === "Draw") {
    rock.style.display = "none";
    scissors.style.display = "none";
    paper.innerText = "Play Once More";

    if (!paper.hasAttribute('click-listener')) {
      paper.setAttribute('click-listener', 'true');
      paper.addEventListener('click', PlayAgain);
    }
  }
}

function calResult(move1, move2) {
  if (move1 === move2) {
    return "Draw";
  } else if ((move1 === moveList[0] && move2 === moveList[2]) ||
    (move1 === moveList[1] && move2 === moveList[0]) ||
    (move1 === moveList[2] && move2 === moveList[1])) {
    return "You Win";
  } else {
    return "You Lose";
  }
}

function PlayAgain() {
  rock.style.display = "inline-block";
  scissors.style.display = "inline-block";
  paper.innerHTML = "Papers";
  play.innerHTML = "Let's Play";
  displayMessage.children[0].innerHTML = '';
  displayMessage.children[1].innerHTML = '';
  paper.removeEventListener('click', PlayAgain);
  paper.removeAttribute('click-listener');
}
