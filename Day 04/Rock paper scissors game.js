// The choice variable(used to store the available choice)
const Choices = ["Rock", "Paper", "Scissors"];

// function to take users choice
function playGame(userChoice) {
  // comp choice
  const computerChoice = Choices[Math.floor(Math.random() * 3)];

  // condition to determine who has won
  if (
    (userChoice === "Rock" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Paper")
  ) {
    return "It's a tie!";
  }

  // {
  // displays the results 'a tie' if both user and computer choose same choice
  //console.log("It's a tie!");

  // }
  //   other condition to determine winner
  else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock")
  ) {
    console.log(`You win! Computer chose ${computerChoice}.`);
  } else {
    console.log(`You lose! Computer chose ${computerChoice}.`);
  }
}
// uUsers choice input
playGame("Paper");
