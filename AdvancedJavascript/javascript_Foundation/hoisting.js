//Hoisting
/*
console.log('1_____')
console.log(hi)
var hi = 'sumit';

function sing(){
    console.log('hi sumit');
}
*/
// one = undefined
// var one = 1;
// var one = 2;
// console.log(one)


/*
function a(){
    console.log('hi')
}

function a(){
    console.log('bye')
}

a()
*/


// const favouriteFood = "grapes";

// let foodThoughts = function(){
//     console.log('Original favourite food: ' + favouriteFood)
//     const favouriteFood = "sushi";

// console.log("New favourite food: " + favouriteFood)
// }


// foodThoughts()

//Function Expression
/**it execute at runtime */
// var canada = () => {
//     console.log('cold')
// }


//Function Declaration
/**it execute at parse time */
// function india(){
   // console.log(arguments)
//     console.log('war')
// }

//Function Invocation/Call/Execution

// canada()
// india()

/**
 * Arguments key words in javascripts
 */
/*
 function marry(person1, person2){
     console.log('arguments',arguments)
     console.log(Array.from(arguments))
     return `${person1} is now married to ${person2}`
 }

 console.log(marry('Tim','Tina'));
 function marry1(...args){
    console.log('arguments',arguments)
    console.log(Array.from(arguments))
    return `${args[0]} is now married to ${args[1]}`
}

console.log(marry1('Tim','Tina'));

*/