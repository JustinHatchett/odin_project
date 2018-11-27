var GameChoice = {
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors"
};

// The computer makes a random choice
function computerPlay() {
    var computerChoices = [
        GameChoice.Rock, GameChoice.Paper, GameChoice.Scissors
    ];
    var randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return randomChoice;
}

var computerSelection = computerPlay();

// Set buttons to choices
const buttons = document.querySelectorAll('input');

buttonPlay = 0;
gamesPlayed = 0;
let playerSelection = buttons.forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        playRound(buttons.id, computerPlay());
        buttonPlay++;
        gamesPlayed++;
        if (buttonPlay === 5) {
            game();
        }
    });
});

// Game result functions
function printRoundResultMessage(message) {
    let getRoundResultParagraph = document.getElementById('round-result-text');
    getRoundResultParagraph.innerHTML = message;
}

function printFiveRoundResultMessage(message) {
    // let getFiveRoundResultParagraph = document.getElementById('five-round-result-text')
    // getFiveRoundResultParagraph.innerHTML = message;
    alert(message); // alert box instead
}

// Input scores into boxes
function setBoxScores(boxId, result) {
    let boxScore = result;

    updateScoreBox = document.getElementById(boxId);
    updateScoreBox.innerHTML = boxScore;

}

// Plays one round
let draw = 0;
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        printRoundResultMessage(`Draw. The computer also picked ${computerSelection}.`);
        buttonPlay--;
        draw++;
        setBoxScores('draws', draw);
    }
    else if (playerSelection == GameChoice.Paper) {
        if (computerSelection == GameChoice.Rock) {
            youWon(playerSelection, computerSelection);
        }
        else {
            youLost(playerSelection, computerSelection);
        }
    }
    else if (playerSelection === GameChoice.Rock) {
        if (computerSelection == GameChoice.Scissors) {
            youWon(playerSelection, computerSelection);
        }
        else {
            youLost(playerSelection, computerSelection);
        }
    }
    else if (playerSelection == GameChoice.Scissors) {
        if (computerSelection == GameChoice.Paper) {
            youWon(playerSelection, computerSelection);
        }
        else {
            youLost(playerSelection, computerSelection);
        }
    }
}

// Win or lose messages
let win = 0;
let loss = 0;
function youWon(playerSelection, computerSelection) {
    printRoundResultMessage(`You beat the computer's ${computerSelection} with ${playerSelection}.`);
    win++;
    setBoxScores('player-score', win);
}
function youLost(playerSelection, computerSelection) {
    printRoundResultMessage(`The computer's ${computerSelection} beats ${playerSelection}.`);
    loss++;
    setBoxScores('computer-score', loss);
}

// Singular or plural draws
function checkSingularOrPlural(num) {
    if (num !== 1 ) {
        return "s";
    } else {
        return "";
    }
}

function game() {
    let i;
    for (i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    if (win >= 3) {
        // FINAL win condition here
        printFiveRoundResultMessage(`You won! Out of ${gamesPlayed} games, you had ${draw} draw${checkSingularOrPlural(draw)},
            but you won ${win} of the 5 non-draw games`);
        buttonPlay = 0;
        gamesPlayed = 0;
        draw = 0;
        loss = 0;
        win = 0;
        while (el.firstChild) el.removeChild(el.firstChild);
    }
    else {
        // FINAL lose condition
        printFiveRoundResultMessage(`You lost. Out of ${gamesPlayed} games, you had ${draw} draw${checkSingularOrPlural(draw)},
            but you lost ${loss} of the ${gamesPlayed - draw} non draw games.`);
        buttonPlay = 0;
        gamesPlayed = 0;
        draw = 0;
        loss = 0;
        win = 0;
        while (el.firstChild) el.removeChild(el.firstChild);
    }
}

// [X] Create three buttons, one for each selection. Add an event listener to the buttons that
    // calls your playRound function with the correct playerSelection every time a button is
    // clicked. (you can keep the console.logs for this step)
// [ ] Add a div for displaying results and change all of your console.logs into DOM methods.
// [ ] Display the running score, and announce a winner of the game once one player reaches 5
    // points.
// [ ] You will likely have to refactor (rework/rewrite) your original code to make it work
    // for this. That’s OK! Reworking old code is an important part of the programmer’s life.
// [ ] Don’t forget to go back and add your new version to the original Rock Paper Scissorss
    // Project!