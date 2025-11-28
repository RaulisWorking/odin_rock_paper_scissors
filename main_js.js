


// Get random int between 1 and 3
function getRandomInt() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + 1);
}

function getHumanChoice() {
   
    let choice = prompt("Rock, Paper or Scissors?", "Rock").toLowerCase();

    if ((choice === "rock") || (choice === "paper") || (choice === "scissors")) {
        return choice;
    }
    else {
        console.warn("Wrong answer buddy. Reply with: rock, paper or scissors!");
        return getHumanChoice();
    };
}

// Prompt user for choice convert it to int
function getComputerChoice() {
    const draw = getRandomInt();

    switch(draw) {
        case(1): 
            return "rock";
        case(2):
            return "paper";
        case(3):
            return "scissors";   
    };
};


function playRound(humanChoice, computerChoice) {  

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        return 0;
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")) {
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
                return 1;
            }   
    else {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}` );
        return 2;
    };        
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`ROUND ${i + 1}`);
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        let score = playRound(humanChoice, computerChoice);

        if (score === 1) {
            humanScore += 1;
        }
        else if (score === 2) {
            computerScore += 1;
        };
    };

    if (humanScore < computerScore) {
        console.log("You lost the game!");
    }
    else if (humanScore > computerScore) {
        console.log("You won the game! Congratulations!");
    }
    else {
        console.log("It's a draw");
    };
    console.log(`Final Score: \n Human: ${humanScore} \n Computer: ${computerScore}`);
}

playGame()