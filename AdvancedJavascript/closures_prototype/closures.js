/**
 * closures is combination of function and lexical scope environments
 * closures is lexical scoping , lexical means where is written
 * function return a function is call lexical
 */

 //console.log('closures')

//  function a(){
//      let grandpa = 'grandpa'
//      return function b(){
//          let father = 'father';
//          return function c(){
//              let son = 'son'
//              return `${grandpa} > ${father} > ${son}`
//          }
//      }
//  }

//  console.log(a()()());

// function boo(string){
//     return function(name){
//         return function(name2){
//             console.log(`${string} ${name} ${name2}`)

//         }

//     }
// }
// const  boo = (string) => (name) => (name2) =>  console.log(`${string} ${name} ${name2}`)
// console.log(boo('hi'))

// function callMeMaybe(){
//     const callMe = 'Hi I am now here !';
//     setTimeout(function(){
//         console.log(callMe)
//     },4000)


// }

// console.log(callMeMaybe())
// function callMeMaybe(){
  
//     setTimeout(function(){
//         console.log(callMe)
//     },4000)
//     const callMe = 'Hi I am now here !';

// }

// console.log(callMeMaybe())

/**
* Clousre and Memory
 benefit
 : memory efficient
  :encapsulation
*/

//Memory efficient

// function heavyDuty(index){
//     const bigArray = new Array(70000).fill('smile')
//     console.log('created')
//     return bigArray[index]
// }
// //without closure we create and delete from call stack many times
// console.log(heavyDuty(688))
// console.log(heavyDuty(688))
// console.log(heavyDuty(688))
// console.log(heavyDuty(688))

/**
 * 
 *by closure we can effeciently use 
 */
// function heavyDuty(){
//         const bigArray = new Array(70000).fill('smile') //this is create space once in memory , we can use multiple times 
//         console.log('created Again!')
//         return function(index){
//             return bigArray[index]
//         }
//     }

//    const getHavyDuty = heavyDuty()
//    console.log(getHavyDuty(3000) )
//    console.log(getHavyDuty(600) )
//    console.log (getHavyDuty(400) )

//Encapsulation

// const makeNuclearButton = () => {
//     let timeWithoutDestruction = 0;
//     const passTime = () => timeWithoutDestruction++;
//     const totalPeaceTime = () => timeWithoutDestruction;
//     const launch = () => {
//         timeWithoutDestruction = -1;
//         return "explosion"
//     }

//     setInterval(passTime,10000)
//     // return{
//     //     launch:launch,
//     //     totalPeaceTime:totalPeaceTime
//     // }
//     //hide the launch , encapsulate
//     return{
        
//         totalPeaceTime:totalPeaceTime
//     }

// }

// const ohno = makeNuclearButton();
// console.log(ohno.totalPeaceTime)
// console.log(ohno.passTime)

/**
 * Questions
 */
/*
let view ;
function initialize() {
    let called = 0;
    
    return function(){
        if(called > 0 ){
            return ;
        } else {

            view = "sumit view";
            called++;
            console.log('view has been set')
        }
       
    }
    
   // view = "sumit view";
    //console.log('view has been set')

}

const startOnce = initialize();
console.log(startOnce());
console.log(startOnce());
console.log(startOnce());
// console.log(initialize())
// console.log(initialize())
// console.log(initialize())
console.log(view)
*/

/**
 * Question
 */

//  const array = [1,2,3,4];
//  for(var i = 0; i< array.length;i++){
//      setTimeout(function(){
//          console.log('I am at index ' +i)
//      },3000)
//  }

 /**
  * solution
  */
//  const array = [1,2,3,4];
//  for(let i = 0; i< array.length;i++){
//      setTimeout(function(){
//          console.log('I am at index ' +array[i])
//      },3000)
//  }

/**
 * by closure
 */
 const array = [1,2,3,4];
 for(var i = 0; i< array.length;i++){
     (function(closureI){
        setTimeout(function(){
            console.log('I am at index ' +array[closureI])
        },3000)
     })(i)
    
 }
