// Numbers pipeline
const nums = [10, 20, 30, 40]; // Array of numbers

let addNums = nums => nums.reduce((acc, x) => acc + x); // Adds all numbers in an array together
let divideByTwo = number => number / 2;

// Function to be used as callback in reduce. Will pass function a as an argument (callback) in function b (higher order function).
let _pipe = (a,b) => arg => b(a(arg))
// Reduces a potentially infinite number of operations using the above '_pipe' function.
// This allows two function at a time, one as a callback to the other (higher order) function. The result of which is then
// passed as a callback to the next function to be reduced.
let pipe = (...ops) => ops.reduce(_pipe); 

// Returns a function which awaits an argument (the 'arg' parameter in the '_pipe' function).
let addDivide = pipe(addNums, divideByTwo);
console.log(addDivide(nums));
// Prints 50
