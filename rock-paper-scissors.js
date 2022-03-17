let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0;

/*alert("Rock Paper Scissors prompt edition!\n\n"
    +"Yeah, it sucks. Will be updated in the future.")

prompt("What's your name?");
alert("whatever, I'll call you Wiggles.");

game()

alert("End of the match! The scores are:\n"
+"Player: "+playerScore+" points.\n"
+"Computer: "+computerScore+" points.\n\n"
+declareWinner())*/

/*-----functions-----*/

function game(){
    while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        playerSelection = prompt("Rock, paper or scissors?").toLocaleLowerCase();
    }
    computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
    playerSelection = ""; /*clears value or the while won't let player write*/
}

function computerPlay(){
    random = Math.floor(Math.random()*3);
    
    switch(random){
        case 0:
            random = "rock";
            return random;
        case 1:
            random = "paper";
            return random;
        case 2:
            random = "scissors";
            return random;
        default:
            alert("The programmer wannabe screwed up "+
            "something.\nRefresh the page and try again.");
            break;
    }
}
/*-----*/
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        /*alert("It's a tie!");*/
        message.textContent = "It's a tie!"

    } else if((playerSelection == "rock" && computerSelection == "paper")
    || (playerSelection == "paper" && computerSelection == "scissors")
    || (playerSelection == "scissors" && computerSelection == "rock")){
        /*alert(computerSelection+" beats "+playerSelection+". Computer wins!");*/
        computerScore++;
        round++;
        roundCount.textContent = "Round "+round+"/5";
        showPcScore.textContent = "PC score: "+computerScore;
        message.textContent = computerSelection+" beats "+playerSelection+". Computer wins!"
        

    } else if((playerSelection == "rock" && computerSelection == "scissors")
    || (playerSelection == "paper" && computerSelection == "rock")
    || (playerSelection == "scissors" && computerSelection == "paper")){
        /*alert(playerSelection+" beats "+computerSelection+". Player wins!");*/
        playerScore++;
        round++;
        roundCount.textContent = "Round "+round+"/5";
        showPlayerScore.textContent = "Player score: "+ playerScore;
        message.textContent = playerSelection+" beats "+computerSelection+". Player wins!"

    } else {
        alert("Something went wrong. Ugh!");
    }
    
    if(round >= 5){
        message.textContent = declareWinner();
        playRock.style.display = "none";
        playPaper.style.display = "none";
        playScissors.style.display = "none";
    }
    
}

function declareWinner(){
    if(playerScore > computerScore){
        return "Victoly! A winner is you!";
    } else if(playerScore < computerScore){
        return "Computer wins! You lost, nyah-nyah-nyah-nyah.";
    }else{
        return "it's a tie! Well, that sucks.";
    }
}

/*-----DOM interaction-----*/

let playRock = document.querySelector("#rock");
playRock.addEventListener('click', () => {
    playRound("rock", computerPlay())
})
let playPaper = document.querySelector("#paper");
playPaper.addEventListener('click', () => {
    playRound("paper", computerPlay())
})
let playScissors = document.querySelector("#scissors");
playScissors.addEventListener('click', () => {
    playRound("scissors", computerPlay())
})
let message = document.querySelector(".message");
let showPlayerScore = document.querySelector(".player.score");
let showPcScore = document.querySelector(".pc.score");
let roundCount = document.querySelector(".round");