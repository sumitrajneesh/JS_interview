/**
 * Currying :  function takes multiple arguments, modify the function to take a prameter at time
 */

// const multiply = (a, b) => a*b;
// const curriedMultiply = (a) => (b) => a*b;
// const curriedMultiplyBy5 = curriedMultiply(5);

// //after 10 years

// console.log(curriedMultiplyBy5(4));
// console.log(curriedMultiplyBy5(4));
// console.log(curriedMultiplyBy5(4));

/**
 * Partial Application
 */

const multiply = (a,b,c) => a*b*c;
const partialMultiplyBy5 = multiply.bind(null, 5)
console.log(partialMultiplyBy5(4,10))