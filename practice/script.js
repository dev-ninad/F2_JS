// //console.log("hello world")

// let a ={
//     name: "ninad",
//     age : 25
// }

// console.log(a["name"])
// console.log(a.age)

// for(let i in a){
//     console.log(i)
// }

// let arr = [1, 2, 3]
//  // literal values
// let x = 20;
//  // number literal
// let c = {name: 'aravind'}
// // Object literal

// //other way pf declaring array

// let arr1 = new Array(10,20,30)
// //Array(class => constructor function) Array is constructor here

//number game

const random = Math.floor(Math.random() * 100);
console.log(random);

let guess = parseInt(prompt("Enter the number you have guessed..."));
if (guess > random) {
  console.log("too high");
} else if (guess < random) {
  console.log("too low");
} else if (guess == random) {
  console.log("you guessed it right");
} else {
  console.log("you guessed it wrong");
}
