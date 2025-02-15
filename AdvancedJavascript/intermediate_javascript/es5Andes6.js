// console.log('es5Andes6');

/**
 * let and const
 * don't use variable var
 */

 const player ="body";
 let experience = 100;
 let wizardLevel =false;
 //var wizardLevel =false;
 console.log('outside',wizardLevel)
 if(experience > 90){
     let wizardLevel = true
     //var wizardLevel = true
     console.log('inside',wizardLevel) //because of scoping both will print different value
 }


//  const obj ={
//      player:'boddy',
//      experience : 200,
//      wizardLevel:false
//  }

//  obj = 8//shows error

 /**
  * destructring
  */

//  const obj ={
//     player:'boddy',
//     experience : 200,
//     wizardLevel:false
// }
// const {player,experience} = obj
// let {wizardLevel} = obj

// const name = 'sumit';

// const obj ={
//     [name]:'hello',
//     [1+2]:'hihi'
// }
// console.log(obj)

// const a = "sumit"
// const b = true
// const c ={}

// const obj ={
//     a,
//     b,
//     c
// }

// console.log(obj)

/**
 * template string
 */
// const name = "sumit"
//  const greeting = `hi how are you ${name}`
//  console.log(greeting)

/**
 * default araguments
 */
// function greet(name='',age=30,pet='cat'){
//     return `Hello ${name} you seem to be ${age }. what is lovely`
// }
// console.log(greet())

//Symbol

// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo');

// console.log(sym2 === sym3)


/**
 * arrow function
 */

 function add(a,b){
     return a+b;
 }
 const add1 = (a,b) => {
     return a + b;
 }
 console.log(add(2,3))