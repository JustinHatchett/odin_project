
enum GameChoice {
    Rock = "Rock",
    Paper = "Paper",
    Scissors = "Scissors"
}

// the computer makes a random choice

function computerPlay() {
    const computerChoices = [
        GameChoice.Rock, GameChoice.Paper, GameChoice.Scissors
    ];

    let randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return randomChoice;
}

const computerSelection = computerPlay();
let playerSelection;

// draw: computer and player make the same choice
// win: paper beats rock, rock beats scissors, scissors beat paper
// lose: paper loses to scissors, rock loses to peper, scissors lose to rock

function drawReplay() {
    play(playerSelection, computerSelection);
}

function play(playerSelection, computerSelection) {
    playerSelection = prompt("Choose rock, paper, or scissors");
    if (playerSelection === computerSelection) {
        console.log(`It's a draw, ${playerSelection} ties ${computerSelection}, try again.`);
        drawReplay();
    } else if (playerSelection == GameChoice.Paper){
        if (computerSelection == GameChoice.Rock){
            youWon(playerSelection, computerSelection);
        } else {
            youLost(playerSelection, computerSelection);
        }
    } else if (playerSelection === GameChoice.Rock){
        if (computerSelection == GameChoice.Scissors){
            youWon(playerSelection, computerSelection);
        } else {
            youLost(playerSelection, computerSelection);
        }
    } else if (playerSelection == GameChoice.Scissors){
        if (computerSelection == GameChoice.Paper){
            youWon(playerSelection, computerSelection);
        } else {
            youLost(playerSelection, computerSelection);
        }
    }
}

let win = 0;
function youWon(playerSelection, computerSelection) {
    console.log(`Nice job ${playerSelection} beats ${computerSelection}, you won!`);
    win++;
}

function youLost(playerSelection, computerSelection) {
    console.log(`Darn, ${computerSelection} beats ${playerSelection} you lost that one.`);
}

function game() {
    let i;
    for (i = 0; i < 5; i++) {
        play(playerSelection, computerSelection);
    }
    if (win >= 3) {
        console.log(`You won! You beat the computer ${win} out of 5 games!`)
    } else {
        console.log(`You lost. You only won ${win} out of 5.`)
    }
}

// still to do:
    // figure out why my if/else statement is broken
    // make case irrelevant
    // put into another function and run 5 times for a best out of 5 scenario to determine winner

// [x] Start a new git repo for your project.
// [x] Create a blank HTML document with a script tag. This game is going to be played completely from the console,
//     so don’t worry about putting anything else in there.
// [x] Your game is going to play against the computer, so begin with a function called computerPlay that will randomly
//     return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.
// [x] Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the
//     playerSelection and computerSelection - and then return a string that declares the winner of the round like so:
//     [ ] make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)
//     [x] Important note: you want to return the results of this function call, not console.log() them. To test this
//         function console.log the results:
    // function playRound(playerSelection, computerSelection) {
    //     // your code here!
    // }

    // const playerSelection = 'rock'
    // const computerSelection = computerPlay()
    // console.log(playRound(playerSelection, computerSelection)) ​

// [ ] Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps
//     score and reports a winner or loser at the end.
//     [x] At this point you should still just be using console.log() to display the results of each round and the winner
//         at the end.
//     [x] Use prompt() to get input from the user. Read: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt if 
//         you need to.
//     [x] Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return 
//         value to something more useful.
//     [x] Feel free to create more “helper” functions if you think it would be useful.


