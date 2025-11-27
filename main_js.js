
// Get random int between 1 and 3
function getRandomInt() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + 1);
}

// Prompt user for choice convert it to int
function getPlayerChoice() {
    const draw = prompt("Rock, Paper or Scissors?", "Rock").toLowerCase();

    switch(draw) {
        case("rock"): 
            return 1;
        case("paper"):
            return 2;
        case("scissors"):
            return 3;  
        default:
            console.error("Wrong answer buddy. Reply with: Rock, paper or scissors!");  
            break;
    };
};

function playRockPaperScissors() {
    const playerDraw = getPlayerChoice();
    const computerDraw = getRandomInt();    

    if (playerDraw === computerDraw) {
        console.log("It's a draw!");
    };


};
