/**
 * recursions
 */

 /**
  * Why use recursion
  * What is recursion : A process (a function in our case ) that calls itself.
  * 
  * use of Recursion:-
  * 1. JSON.parse/JSON.stringfy
  * 2. documents.getElementById and DOM traversal algorithms
  * 3.Object traversal
  * 4.We will see it with more complex data structures
  * 5.It's sometimes a cleaner alternative to iteration.
  */

  /**
   * Call stack
   * Why do i care?
   * 1.your'e used to functions being pushed on the call stack and poppped off when they are done
   * 2.when we write recursive functions, we keep pushing new function onto the call stack!
   */

//    function takeShower(){
//        return 'Showering'
//    }

//    function eatBreakfast(){
//        let meal = cookFood()
//        return `Eating ${meal}`
//    }
//    function cookFood(){
//        let items = ["Oatmeal","Eggs", "Protein Shake"]
//        return items[Math.floor(Math.random()*items.length)]
//    }

//    function wakeUp(){
//        takeShower()
//        eatBreakfast()
//        console.log('Ok ready to go to work!')
//    }

//    console.log(wakeUp())

/**
 * First Recursive function
 * 1.Base case
 * 2.Different input
 */

//  function countDown(num){
//      if(num <= 0){
//          console.log("All done!")
//          return;
//      }
//      console.log(num);
//      num--;
//      countDown(num)
//  }

//  console.log(countDown(3))

/**
 * second recursive function
 */

//  function sumRange(num){
//      if(num === 1) return 1;
//      return num + sumRange(num - 1)
//  }

//  console.log(sumRange(3))

/**
 * factorial function by recursion
 */

 /**
  * 
  * non-recursive solution
  */
//  function factorial(num){
//      let total = 1;
//      for(let i = num ; i > 0; i++){
//          total *= i
//      }

//      return total
//  }

//  console.log(factorial(4))

// function facorial(num){
//     if(num === 1) return 1;
//     return num* facorial(num - 1);
// }

// console.log(facorial(5))

/**
 * Helper method recursions
 * 
 * function outer(input){
 * var outerScopedVariable =[]
 * function helper(helperInput){
 * //modify the outerScopedVariable 
 * helper(helperInput--)
 * }
 * helper(input)
 * return outerScopedVariable;
 * }
 */


//  function collectOddValues(arr){
//      let result = [];
//      function helper(helperInput){
//          if(helperInput.length === 0){
//              return ;
//          }
//          if(helperInput[0] % 2 !== 0){
//              result.push(helperInput[0])
//          }
//          helper(helperInput.slice(1))
//      }

//      helper(arr)
//      return result
//  }

//  console.log(collectOddValues([1,2,3,4,5,6,7]))

/**
 * pure recursion
 */

//  function collectOddValues(arr){
//      let newArr = [];
//      if(arr.length === 0){
//          return newArr;
//      }
//      if(arr[0] % 2 !== 0){
//          newArr.push(arr[0])
//      }
//      newArr = newArr.concat(collectOddValues(arr.slice(1)))
//      return newArr;
//  }

//  console.log(collectOddValues([1,2,3,4,5]))

/**
 * Pure Recursion Tips
 * 1.For arrays , use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
 * 2.Remember that string are immutable so you will need to use methods like slice, substr , or substring to make copies of string
 * 3.To make copies of objects use Object.assign  , or the spread opeartor
 */