/**
 * Advanced Array
 */

 var array = [1,4,5,60,6];

// const double = []
//  const newArray = array.forEach((num ) => {
//      double.push(num*2)
//  })

//  console.log(double)
/**
 * forEach loop something
 * map() loop and return new array
 */

/**
 * map
 * filter
 * reduce
 */

 //map: create new array, don't need to push like forEach , forEach just care about just iterate
 //map alwarys return something
// const mapArray = array.map((num) => {
//     return num*2;
// })

// console.log(mapArray);

// console.log(array);

//filter: it return newArray
// const filterArray = array.filter((num) => {
//    return num> 5
// })


// console.log(filterArray)

//reduce
const reduceArray = array.reduce((accumlator,num) =>{
    return accumlator + num
},5)

console.log(reduceArray)
console.log(array)

