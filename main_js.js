
function getRandomInt() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + 1);
}

function getPlayerChoice() {
    const draw = prompt("Rock, Paper or Scissors?", "Rock")

    switch(draw) {
        case("Rock"): 
            return 1;
        case("Paper"):
            return 2;
        case("Scissors"):
            return 3;  
        default:
            console.error("Wrong answer buddy. Reply with: Rock, paper or scissors!");  
    };
};

function playRockPaperScissors() {
    const playerDraw = getPlayerChoice();
    const computerDraw = getRandomInt();

    

    
};