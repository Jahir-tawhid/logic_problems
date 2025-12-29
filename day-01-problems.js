console.log("Day 1: My JS Journey Started");
function add(a, b){
                return a + b;
}
console.log("Sum :", add(5, 10 )); //Output: 15


// 1. Sum of Two Numbers
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(10, 20)); // Output: 30
// Explanation: Here, a and b are parameters. When the function is called, it adds the two numbers and returns the sum.

// 2. Even or Odd
const isEven = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};
console.log(isEven(7)); // Output: Odd
console.log(isEven(8)); // Output: Even
//Explanation: The % (Modulus) operator finds the remainder. num % 2 === 0 means the number is perfectly divisible by 2.

//3. Find the Largest Number
const findMax = (a, b, c) => {
    return Math.max(a, b, c);
};
console.log(findMax(10, 45, 20)); // Output: 45
//Explanation: Math.max() is a built-in JavaScript function that returns the largest of the given numbers.

//4. Celsius to Fahrenheit
const convertToF = (celsius) => {
    return (celsius * 9/5) + 32;
};
console.log(convertToF(30)); // Output: 86
//Formula: F = (C * 9/5) + 32

// 5. Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
//Explanation: This is called Recursion (when a function calls itself). It continues like a loop until n equals 1.

// 6. Prime Number Check
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(11)); // Output: true
//Explanation: We use a for loop to check for divisibility from 2 up to the number itself. If it's divisible by any number, it is not prime (false).

// 7. Random Number Generation
const getRandom = () => {
    return Math.floor(Math.random() * 100) + 1;
};
console.log(getRandom()); // Any number between 1 and 100
// Explanation: Math.random() gives a decimal between 0 and 1. Multiplying it by 100 and using Math.floor() gives us a whole number.

// 8. Reverse a String
const reverseStr = (str) => {
    return str.split('').reverse().join('');
};
console.log(reverseStr("hello")); // Output: "olleh"
//Explanation: 1. split(''): Breaks the string into an array. 2. reverse(): Flips the array. 3. join(''): Puts it back together into a string.

// 9. Palindrome Check
const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};
console.log(isPalindrome("level")); // Output: true

// 10. Sum of Array Elements
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); // Output: 15
//Explanation: The reduce() method adds each number in the array to an accumulator (acc) to give a single final result.
