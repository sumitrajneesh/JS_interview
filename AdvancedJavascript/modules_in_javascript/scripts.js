//console.log('script');
//tightly couple

/**
 * Global scope
 * module scope:share the variable in function scope
 * function scope
 * Block scope:-let and const
 */
/**
 * CommonJS and AMD
 */
//  var module1 = require('module1') //.fight
//  var module2 = require('module2') //.importedFunc2;

//  function fight(){

//  }
//  module1.exports ={
//      fight:fight
//  }

/**
 * AMD:it design for browser
 * UMD: universal module definition
 */

 define(['module1','module2'],
 function(module1Import , module2Import){
     var fight = module1Import.fight;
     var module2 = module2Import //.importedFunc2
     function dance(){

     }
     return {
         dance:dance
     }
 })



 //IIFE


 //module pattern
var fightModule = (function(){
    var harry = 'potter';
    var voldemort = 'He who must not be named'
    //var privateFunction()
    //var privateVariable  
    function fight(char1, char2){
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length);
        return attack1 > attack2  ? `${char1} wins `: `${char2} wins`
    }
    // console.log(fight(harry, voldemort))
    return {
        fight:fight
    }
})()

console.log(fightModule.fight('sumit',"Anish jha"));


