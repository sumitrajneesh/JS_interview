/*
function two(){
    var isValid;
    console.log(isValid)
}

function one(){
    var isValid = true;
    console.log(isValid)
    two()
}
var isValid = false;
one()
*/

// var b = "sumit"

// function findName(){
//     let b = 'b';
//     return printName()
// }
// console.log(b)

// function printName(){
//     var c = 'c'
//     return 'sumit choudhary'
// }

// function sayMyName(){
//     var a = 'a';
//     return findName()
// }

// sayMyName()
/**function lexical environmet */
/*
function sayMyName(){
    var a = 'a';
    return function findName(){
        var b = 'b';
      
        return function printName(){
            var c = 'c';
            console.log(a)
            return 'sumit choudhary'
        }
    }
}

console.log(sayMyName()()())
*/

/**exercise
 * 
 */
// 'use strict'
// function weird(){
//     var height = 50;
//      return height;
// }

// console.log(weird())

// var heyhey = function doodle(){
//     //do something
//     doodle();
//     return 'heyhey'
// }

// console.log(heyhey());

/**
 * Function scope va Block scope
 */
//function scope
//  function a(){
//      var secret = '12345'
     
//  }

//  console.log(secret)

 //block scope by using let and const
//  if(true){
//     let secret = '12345' 
//  }
//  console.log(secret)


// function loop(){
//     //let create for loop to block scope
//     for(let i = 0; i < 5; i++){
//    console.log(i)
//     }
//     console.log('final',i)
// }

// console.log(loop())
