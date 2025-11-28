


// Get random int between 1 and 3
function getRandomInt() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + 1);
}

// Generate computer choice
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

// Prompt user for choice
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

// Play round of rock paper scissors
function playRound(humanChoice, computerChoice) {  

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        return "draw";
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")) {
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
                return "human";
            }   
    else {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}` );
        return "computer";
    };        
};

// Play a 5 round game of rock paper scissors
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`ROUND ${i + 1}`);
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        let score = playRound(humanChoice, computerChoice);

        if (score === "human") humanScore++ 
        else if (score === "computer") computerScore++
          
    }

    if (humanScore < computerScore) console.log("You lost the game!");
    else if (humanScore > computerScore) console.log("You won the game! Congratulations!");
    else console.log("It's a draw");
    
    console.log(`Final Score: \n Human: ${humanScore} \n Computer: ${computerScore}`);
}

playGame()