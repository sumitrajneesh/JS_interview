

const first = () => {
    const greet ='Hi';
    const second = () =>{
        console.log(greet)
    }

    return second;
}

const newFunc = first();
console.log(newFunc())

/**
 * Closure: a function ran , the function executed . It is never going execute again
 * But it is going rember that there are reference to those variable
 * so the child scope always has access to the parent scope
 */

 /**
  * currying 
  * 
  */

//   const multiply = (a,b) => a*b;
//   const curriedmultiply1 = (a) => (b) => a*b;
//   console.log(curriedmultiply1(3)(4))

/**
 * compose
 */

//  const compose = (f,g) => (a) => f(g(a));

//  const sum = (num) => num + 1;
//  console.log(compose(sum, sum)(5))

/**
 * Avoiding Side Effects, functional purity
 */

 var a = 1;
 function b(){
     a = 2
 }