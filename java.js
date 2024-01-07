let choices = document.querySelectorAll(".choice");
let your_score = document.querySelector("#your-score");
let computer_score = document.querySelector("#computer-score");
let message = document.querySelector("#msg");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const your_choice = choice.getAttribute("id");
        playGame(your_choice);
    });
});

const computer = () => {
    let options = ["rock", "paper", "scissors"]
    let randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}


let draw_game = () => {
    console.log("Game was draw!");
}

const playGame = (your_choice) => {
    const computer_choice = computer();

    if (your_choice === computer_choice) {
        message.style.backgroundColor = "#11192f";
        message.innerText = "It's a tie!";
    } else if ((your_choice === "rock" && computer_choice === "scissors") ||
        (your_choice === "paper" && computer_choice === "rock") ||
        (your_choice === "scissors" && computer_choice === "paper")
    ) {
        message.innerText = "You win!";
        your_score.innerText++
        message.style.backgroundColor = "green";
    } else{
        (your_choice === "rock" && computer_choice === "paper") ||
        (your_choice === "paper" && computer_choice === "scissors") ||
        (your_choice === "scissors" && computer_choice === "rock")
        message.innerText = "You loss!";
        computer_score.innerText++
        message.style.backgroundColor = "red";
    }
}