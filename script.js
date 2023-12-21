// script.js

// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function to calculate the area of a rectangle
function calculateArea(width, height) {
  return width * height;
}
clear();
// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

fetchSecretMessage('task-1');

// Function to find the maximum number in an array
function findMax(...nums) {
  return Math.max(...nums);
}
clear();
// Function to check if a string is a palindrome
function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

fetchSecretMessage('task-2');

// Function to count vowels in a string
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
clear();
// Fibonacci sequence function
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fetchSecretMessage('task-3');

// Function to sort an array
clear();
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Function to calculate factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

fetchSecretMessage('task-4');

// Function to convert temperature from Celsius to Fahrenheit
clear();
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Function to check if a number is prime
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

fetchSecretMessage('task-5');

// Function to find the longest word in a sentence
clear();
function findLongestWord(sentence) {
  const words = sentence.split(' ');
  return words.reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, '');
}

fetchSecretMessage('task-6');

// Function to check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Function to calculate the sum of an array
clear();
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

fetchSecretMessage('task-7');

// Function to generate a random number between two values
clear();
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if a string contains a certain substring
function containsSubstring(str, substring) {
  return str.indexOf(substring) !== -1;
}

fetchSecretMessage('task-8');

// Function to convert a string to uppercase
clear();
function toUpperCase(str) {
  return str.toUpperCase();
}

// Function to check if an array contains a specific element
function arrayContains(arr, element) {
  return arr.includes(element);
}

fetchSecretMessage('task-9');

// Function to replace a substring in a string
clear();
function replaceSubstring(str, oldSubstring, newSubstring) {
  return str.replace(oldSubstring, newSubstring);
}

fetchSecretMessage('task-10');

function clear() {
  const messageContainer = document.getElementById('messageContainer');
  messageContainer.innerText = '';
}
setTimeout(clear, 100);
setTimeout(clear, 50);
setTimeout(clear, 200);
setTimeout(clear, 300);
