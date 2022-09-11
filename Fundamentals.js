// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
function squareDigits(num){
     let arrMas = String(num).split('')
     let arr = []
     for (i = 0; i < arrMas.length; i++) {
          arr.push(Math.pow(Number(arrMas[i]), 2))
     }
     return Number(arr.join(''));
}
// 
//      for (i < 0; i < arrMas.length; i++) {
//          
//      }
console.log(squareDigits(432432))
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
     let arr = str.split(' ').reverse()
     let arrItog = [];
     for (i=0; i<arr.length; i++) {
          arrItog.push(arr[i].split('').reverse().join(''))
     }
     return arrItog.reverse()
   }

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
     switch (numbers.length){
          case 10:
               let codeCountry = numbers.slice(0,3).join('')
               let number1 = numbers.slice(3,6).join('')
               let number2 = numbers.slice(6).join('')
               return `(${codeCountry}) ${number1}-${number2}`
          default:
               break;
     }
}


// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
     let calculationBMI = weight / Math.pow(height, 2)
     if (calculationBMI <= 18.5) {
          return 'Underweight'
     } else if (calculationBMI <= 25){
          return 'Normal'
     } else if (calculationBMI <= 30){
          return 'Overweight'
     } else {
     return 'Obese'
     }
};
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