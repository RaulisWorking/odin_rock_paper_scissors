
function getRandomInt() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + 1);
}

function getComputerChoice() {
    const draw = getRandomInt();

    switch(draw) {
        case(1): 
            return "Rock";
        case(2):
            return "Paper";
        case(3):
            return "Scissors";    
    };
};

function playRockPaperScissors() {
    const draw = prompt("Rock, Paper or Scissors?", "Rock");
};