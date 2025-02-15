/**
 * function()
 * function(a,b)
 * HOF(higher order function)
 */

 /**
  * problem with normal function
  */

//   function letAdamLogin(){
//       let array = [];
//       for(let i = 0; i < 10000000; i++){
//           array.push(i)
//       }
//       return 'Access Granted to Adam'
//   }

//   console.log(letAdamLogin());

//   function letEvaLogin(){
//       let array = [];
//       for(let i = 0; i < 10000000; i++){
//           array.push(i)
//       }
//       return 'Access Granted to Eva'
//   }

//   console.log(letEvaLogin());
 /**
  * problem with function(a,b)
  */

//   const giveAccessTo = (name) => 
//    'Access Granted to ' + name

//   function letUserLogin(user){ //we now tell what data to use 
//       let array = [];
//       for(let i = 0; i < 10000000; i++){
//           array.push(i)
//       }
//       return giveAccessTo(user)
//   }

//   console.log(letUserLogin('Sumit'));

//   function letAdminLogin(admin){ //we now tell what data to use 
//       let array = [];
//       for(let i = 0; i < 50000000; i++){
//           array.push(i)
//       }
//       return giveAccessTo(admin)
//   }

//   console.log(letAdminLogin('Sumit'));

/**HOF
 * a function return a function and take a function as param is called high order function
 * can tell to function what to do , in time of invocation in high order function
 */

//   const giveAccessTo = (name) => 
//    'Access Granted to ' + name

//    function authenticate(verify){
//        let array = [];
//        for(let i = 0; i < verify; i++){
//            array.push(i)
//        }
//       // return true
//       return giveAccessTo(person.name)
//    }

//    function sing(person){
//        return 'la lal la my name is' + person.name
//    }

//  function letPerson(person, fn){ // ++ tell it what data to user + function
//      if(person.level === 'admin'){
//          //fn(5000000)
//          return fn(person)
//      }else if(person.level === 'user'){
//          //fn(100000)
//          return fn(person)
//      }

     
//  }
//  console.log(letPerson({level:'admin',name:'sumit'},sing))

//multiplyBy is higherOrder function
// const multiplyBy = function(num1){
//     return function(num2){
//         return num1*num2
//     }
// }

const multiplyBy = (num1) => (num2) => num1*num2

console.log(multiplyBy(4)(6))

// const multiplyByTwo = multiplyBy(2);
// const multiplyByFive = multiplyBy(5);
// console.log(multiplyByTwo(4));
// console.log(multiplyByTwo(10))
// console.log(multiplyByFive(10))
  
