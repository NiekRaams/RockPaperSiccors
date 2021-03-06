let userScore= 0;
let computerScore= 0;
const userScore_span = document.getElementById("User-Score");
const computerScore_span = document.getElementById("Computer-Score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sciccors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()* 3); 
    return choices [randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Steen";
    if (letter === "p") return "Papier";
     return "Schaar";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallRobotWord = "robot".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} verslaat ${convertToWord(computerChoice)}${smallRobotWord}. Jij Wint!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}
function lose(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallRobotWord = "robot".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} is verslagen door ${convertToWord(computerChoice)}${smallRobotWord}. jij hebt verloren...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}
function draw(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallRobotWord = "robot".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `Jullie hebben hetzelfde kozen ${convertToWord(userChoice)}${smallUserWord} , ${convertToWord(computerChoice)}${smallRobotWord}. Het staat gelijk!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice);
         break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);
            break;
    }
} 

function main (){

    rock_div.addEventListener('click', () =>  game("r"));
    paper_div.addEventListener('click',() =>  game("p"));
    sciccors_div.addEventListener('click',()=>game("s"));
}

main();