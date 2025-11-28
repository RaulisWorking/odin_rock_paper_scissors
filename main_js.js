
let humanScore = 0;
let computerScore = 0;


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
        console.warning("Wrong answer buddy. Reply with: Rock, paper or scissors!");
        getHumanChoice();
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
        default:
              
            break;
    };
};


function playRound(humanChoice, computerChoice) {  

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" & computerChoice === "paper")) {
                humanScore += 1;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}` );
    }        
    console.log(`Score: \n Human: ${humanScore} ---- Computer ${computerScore}`);

};
