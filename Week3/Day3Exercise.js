function playTheGame() {
  if (confirm("Are you sure you would like to play?") == true) {
    let guess = Number(prompt("Enter a number between 0 and 10"));
    while (!(guess >= 0 && guess <= 10)) {
      guess = Number(prompt("Not a valid number, try again"));
    }
    let computerNumber = Math.floor(Math.random() * 11);
    compareNumbers(guess, computerNumber);
  } else {
    alert("No problem, goodbye");
  }
}

function compareNumbers(userNumber, computerNumber) {
  for (let i = 0; i < 3; i++) {
    if (userNumber == computerNumber) {
      alert("WINNER");
      return 0;
    }
    if (i == 2) {
      break;
    } else if (userNumber > computerNumber) {
      userNumber = Number(
        prompt("Your number is bigger than the computer's, guess again")
      );
    } else {
      userNumber = Number(
        prompt("Your number is smaller than the computer's, guess again")
      );
    }
  }
  alert("Out of attempts");
  return 0;
}
