// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
     let calculationBMI = weight / Math.pow(height, 2)
     if (calculationBMI <= 18.5) {
          return console.log('Underweight')
     } else if (calculationBMI <= 25){
          return console.log('Normal')
     } else if (calculationBMI <= 30){
          return console.log('Overweight')
     } else {
     return console.log('Obese')
     }
}
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
function greetOne (name, owner) {
     switch (name) {
          case owner:
               return 'Hello boss';
          default: 
               return 'Hello guest';
     }
   }

// Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
function opposite(number) {
     return number * -1
}

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]
function greet(name){
     return `Hello, ${name} how are you doing today?`
}

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
     return [...n.toString()].reverse().map(Number);
}
// We need a function that can transform a number (integer) into a string. What ways of achieving this do you know?
function numberToString(num) {
     return String(num) 
}