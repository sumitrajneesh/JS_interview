/**
 * Compose or composition
 * Pipe
 */

 /**
  *Arity:no of arguments function takes called arity
  */



// fn1(fn2(fn3(50)));
// compose(fn1,fn2,fn3)(50)
// pipe(fn3,fn2,fn1)(50)
//  data --> fn --> data --> fn --->
 
const compose = (f, g) => (data) => f(g(data))
const pipe = (f, g) => (data) => g(f(data))

const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

console.log(multiplyBy3AndAbsolute(-50))