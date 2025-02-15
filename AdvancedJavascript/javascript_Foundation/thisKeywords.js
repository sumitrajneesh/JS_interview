console.log('thisKeyword');
/**
 * this in javascript
 * normal function this reference to window
 * object method this reference to object
 * 1.gives methods to their object
 * 2.execute same code for multiple object
 */

 /*
 function a(){
     console.log(this)
 }
 a() //it will refer to window object

 function b(){
     'use strict'
     console.log(this)
 }
 b()
 */
/*
 const obj = {
     name:"sumit",
     sing(){
         return 'lalala' + this.name
     },
     singAgain(){
         return this.sing() + '!'
     }
 }

 console.log(obj.singAgain());
 */
// const name = 'Sunny';
//  function importantPerson(){
//      console.log(this.name+ "!")
//  }


//  const obj1 = {
//      name:'anish',
//      importantPerson:importantPerson

//  }

//  const obj2 = {
//      name:'sumit',
//      importantPerson:importantPerson
//  }

//  console.log(obj1.importantPerson())

var b = {
    name:'sumit',
    say(){console.log(this)}
}
var c = {
    name:'sumit',
    say(){return function(){ console.log(this)}}
}
var d = {
    name:'sumit',
    say(){return () =>{ console.log(this)}}
}

console.log(d.say()())

