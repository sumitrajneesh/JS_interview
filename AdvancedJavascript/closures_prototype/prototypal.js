/**
 * prototypal inheritance
 * object get access properties and var to other object , window is object, 
 */

//  const array = [];
//  console.log(array.__proto__)
//  console.log(array.__proto__.__proto__)

// function a(){}
// console.log(a.__proto__)
// console.log(a.__proto__.__proto__) //base object


// const obj1 ={}
// console.log(obj1.__proto__)

let dragon = {
    name:'Sumit',
    fire:true,
    fight(){
        return 5
    },
    // sign(){
    //     return `I am ${this.name}, the breather of fire`
    // }
    sign(){
        if(this.fire){
            return `I am ${this.name}, the breather of fire`

        }
    }
}

// console.log(dragon.sign())
// console.log(dragon.fight())


/**
 * use the fucnction of another object
 */

 let lizard ={
     name:'kiki',
     fight(){
         return 1
     }
 }

//  const singLizard = dragon.sign.bind(lizard)
//  console.log(singLizard())
// lizard.__proto__ = dragon; //prototypal inheritance
// console.log(lizard.sign())
// console.log(lizard.fire)
// console.log(lizard.fight())
// console.log(dragon.__proto__)
// console.log(dragon.isPrototypeOf(lizard))
// console.log(lizard.isPrototypeOf(dragon))

lizard.__proto__ = dragon

// for(let prop in lizard){
//     console.log(prop)
// }
// for(let prop in lizard){
//     if(lizard.hasOwnProperty(prop)){
//         console.log(prop)

//     }
// }

/**
 * don't use the __proto__ directly
 * 
 */
// const obj = {}
//  console.log( obj.__proto__.__proto__)  //output: null


//  const obj ={name:"sumit"};
// console.log( obj.hasOwnProperty('name')) //true
// console.log( obj.hasOwnProperty('hasOwnProperty')) //false


/**
 * all function has call ,apply , bind
 */

//  function a(){

//  }
// console.log( a.hasOwnProperty('call'))//false
// console.log( a.hasOwnProperty('apply'))//false
// console.log( a.hasOwnProperty('bind'))//false
// console.log( a.hasOwnProperty('name'))//true

// const temp1 = function a(){}
// console.log(temp1.hasOwnProperty('call')) //true
// console.log(temp1.hasOwnProperty('apply')) //true
// console.log(temp1.hasOwnProperty('bind')) //true
// console.log(temp1.hasOwnProperty('hasOwnProperty')) //true

/**
 * every function and object has prototype:{..} object
 */
/**
 * run in chrome console
 */

//  function multiplyBy5(){

//  }

//  multiplyBy5.__proto__
//  Function.prototype
//  Object.prototype


/**
 * run in chrome console
 */

//  const array = []
//  array.__proto__.hasOwnProperty('map')
//  Array.prototype //same 
//  array.__proto__ //same

/**
 * __proto__ never use because of performance reason
 */

 /**
  * Object.create(), use for prototypal inheritance
  */

//   let human = {
//       martal:true
//   }
//  let socrates = Object.create(human)
//  socrates.age = 45
//  console.log(human.isPrototypeOf(socrates))

/**
 * only function has the prototype property
 */

//  console.log(typeof Object.prototype)
//  console.log(typeof Object)
// const obj = {}
// console.log(obj.prototype)//undefined
// const arr =[]
// console.log(arr.prototype)//undefined
// console.log('string'.prototype)//undefined
// console.log(String.prototype)//undefined


/**
 * Exercise
 */
/**
 * Date object => to have new method .lastyear()
 * which shows you last year 'YYYY' format
 */
 Date.prototype.lastYear = function(){
     return this.getFullYear() - 1;
 }
//  Date.prototype.lastYear = () => {
//      return getFullYear() - 1;
//  }
 console.log(new Date('1988-10-10').lastYear())



 /**
  * Modify .map() to print at the end of each ite
  * 
  */

//   Array.prototype.map = function(){
//       let arr = [];
//       for(let i = 0; i < this.length; i++){
//           arr.push((this[i] + 'map'))
//       }

//       return arr;
//   }
//  console.log([1,2,4].map())


 /**
  * scheme + java
  */

  var array = [1,2,3,4,5]
  for(let i = 0; i<array.length; i++){
      setTimeout(() =>{
          console.log(i, array[i])
      },1000)
  }