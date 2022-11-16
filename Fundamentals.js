 // In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
 // Examples
 // makeNegative(1);    // return -1
 // makeNegative(-5);   // return -5
 // makeNegative(0);    // return 0
 // makeNegative(0.12); // return -0.12
 // Notes
 // The number can be negative already, in which case no change is required.
 // Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 
function makeNegative(num) {
     return num >=0 ? num * -1 : num
}


// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
function openOrSenior(data){
     let localArray = []
     data.forEach(e => {
       if (e[0] >= 55 && e[1] > 7) {
         localArray.push("Senior")
       } else {
         localArray.push("Open")
       }
     })
     return localArray
   }

   console.log()

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
function persistence(num, index) {
     if (typeof num === 'number' && typeof index === 'number' ) {
          let number = [...num.toString()].map(Number)
          for (i =1 ; i <= index; i++){
               if (number.length > 1) {
                    let numArr = number.reduce((prevValue, currentValue) => prevValue * currentValue, 1)
                    number = [...numArr.toString()].map(Number)
               } else {
                    return `Ваше число ${number}`
               }
          }
          return `Ваше число ${number}`
     } else {
          return 'Вообще то, ты ввёл не целые числа'
     }
  }
//   На CodeWars не совсем понял что от меня хотят, хотя задание выполняет своё действие
console.log(persistence(4232, 2))

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const regex = /\s/g;
    const lowercase = string.toLowerCase().replace(regex, "");

    for (let i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }

    return true;
} 
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
// function booleanToString(b){
//      return b.toString()
//    }

// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
     const arraySum = array.reduce((prevValue, item) => {
          return prevValue + item;
     }, 0)
     if (arraySum % 2 ==0) {
          return 'odd'
     } else {
          return'even'
     }
}

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends){
     return friends.filter(e => e.length == 4)
   }

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
     return l.filter(e => typeof e === "number")
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
function abbrevName(name){
     return name.split(' ').map(e => (e.slice(0,1))).join('.').toUpperCase() 
 }
// Часы показывают hчасы, mминуты и sсекунды после полуночи.
// Ваша задача — написать функцию, которая возвращает время с полуночи в миллисекундах.
// Пример:
// h = 0
// m = 1
// s = 1
// result = 61000
// Входные ограничения:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
function past(h, m, s){
     let hours = h * 3600000
     let minute = m * 60000
     let seconds = s * 1000
     if (h <= 23 && m <= 59 && s <= 59) {
          return hours+minute+seconds
     } else (
          console.log('Вы ввели что то неправильно')
     )
     
   }

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