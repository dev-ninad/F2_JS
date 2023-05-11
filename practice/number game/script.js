const random = Math.floor(Math.random() * 100);
//console.log(random);
let guess;
let chances =0;
while(random != guess) {
  guess = parseInt(prompt("Enter the number you have guessed..."));
  if (guess > random) {
    console.log("Too high");
  } else if (guess < random) {
    console.log("Too low");
  } else if (guess == random) {
    console.log("You guessed it right");
  } else {
    console.log("You guessed it wrong");
  }
  chances += 1;
}

console.log(`Good!! Your Score is ${100-chances}`)

