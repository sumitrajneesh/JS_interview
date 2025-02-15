//console.log('functionsAreObjects');

/**
 * Invoking a function
 */

// function one(){
//     return 1;
// }

// console.log(one());
/*
const obj = {
    // two: function(){
    //     return 2;
    // }
    // two(){
    //     return 2;
    // }
    two: () =>{
        return 2;
    }
}

// console.log(obj.two())
console.log(obj.two())
*/

// function three(){
//     return 3
// }

// console.log(three.call())

// const four = new Function('num', 'return num');
// console.log(four(4));

// function woohoo(){
//     console.log('woohoo')
// }

// woohoo.yell = 'ahhhhhh'
// console.log(woohoo.name)

/**
 * function is special type of object that is callable object
 * function take as object in javascript
 * const specialObj = {
 * yell: 'ahhhh',
 * hame:'woohoo',
 * (): console.log('woohooo')
 * }
 */


 /**
  * Functions are first class citizens in JS
  * functions can be assign to varible and object properties
  */

  //var stuff = fuction(){}

//   function a(fn){
//       fn()
//   }
//   a(function(){console.log('hi there')}) //pass a function as parameter to a function

/**
 * return function as a value in javascript
 */

//  function b(){
//      return function c(){
//          console.log('bye')
//      }
//  }

// //  console.log(b()())

// var d = b();
//  console.log(d())

/**
 * don't initialize a function inside the loop
 */

//  for(let i = 0; i< 5; i++){ //don't do that
//      function a(){

//      }
//      a()
//  }

// function a(){

// }
//  for(let i = 0; i< 5; i++){ //do this
    
//      a()
//  }

/**
 * set the default parameter to function
 */

 function a(param =6){
     return param
 }
 console.log(a())
   