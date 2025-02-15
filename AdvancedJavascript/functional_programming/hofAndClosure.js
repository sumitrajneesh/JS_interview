/**
 * HOF : take a one or function as argument and return function
 * Closures
 */


//  const hof = (fn) => () =>  5;
//  //console.log(hof())
//  console.log(hof()())

const hof = (fn) => fn(5);
console.log(hof(function a(x){return x}))

//Closure
/**
 * closure make a impure the function
 * we can create data privacy
 */
// const closure = function(){
//     let count = 0;
//     return function increment(){
//         count ++
//         return count;
//     }
// }

// const incrementFn = closure();
// console.log(incrementFn());
// console.log(incrementFn());
// console.log(incrementFn());

const closure = function(){
    let count = 55;
    return function increment(){
        return count
    }
}

const getCounter = closure();
console.log(getCounter());
console.log(getCounter());
console.log(getCounter());
