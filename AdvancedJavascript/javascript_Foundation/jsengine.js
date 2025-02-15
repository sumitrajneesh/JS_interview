//javascript Engine
/*
function jsengine(code){
    return code.split(/\s+/)
}

console.log(jsengine('var a = 5'))    


/**
 * inline caching
 */
/*
 function findUser(user){
     return `found ${user.firstName}.${user.lastName}`
 }

 const userData = {
     firstName:'sumit',
     lastName:'choudhary'

 }
 */

 //findUser(userData) //if you call multiple times , becasuse of inline caching , the code will not execute again and again

 /**
  * hidden classes
  */
/*
  function Animal(x,y){
      this.x = x;
       
      this.y = y;
  }

  const obj1 = new Animal(1,2);
  const obj2 = new Animal(3,4);

  obj1.x = 30;
  obj2.y = 40;

  delete(obj1.x = 30)

  //call stack + memory heap

  const num = 49 //allocate memory for number
  const string = 'some text' //allocate memory for string
  const human ={ //allocation memory for an object ... and it's value
      first:'sumit',
      last:'choudhary'
  }

  function substarctTwo(num){
    return num - 2;
  }

  function calculate(){
      const sumTotal = 4 + 5;
      return substarctTwo(sumTotal);
  }

  calculate()
  //call stack : FIRST IN AND LAST OUT

  //memory heap gragbase collections ,memory leaks
  let array =[];
  for(let i = 5; i > 1; i++){
      array.push(i - 1)
  }

  //memory leaks
  
  //global variable
   var  a = 1;
   var b = 1;
   var c = 1;

   //event listeners

   var element = document.getElementById('button');
   element.addEventListener('click',onclick)

   //setInterval
   setInterval(() => {
       //referencing objects .. 
        
   })

   //callback
   console.log('1');
   setTimeout(() => {console.log('2')},1000)
   console.log('3');
  */ 

  /**
   * execution Context
   */

//    function printName(){
//        return 'sumit choudhary'
//    }

//    function findName(){
//        return printName()
//    }

//    function sayMyName(){
//        return findName()
//    }

//    sayMyName()

