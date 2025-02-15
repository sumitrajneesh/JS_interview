// console.log('scope');

//scope
/**
 * root scope
 */
/**
 * each of this create own scopre
 */
 var fun = 5;
 function funFunction(){
     //child scope
     var fun ="hello"
     console.log(1,fun)
 }
 function funerFunction(){
     //child scope
     var fun ="Byee"
     console.log(2,fun)
 }
 
 function funestFunction(){
     //child scope
     var fun ="AHHHHHH"
     console.log(3,fun)
 }

 console.log("window",fun)
 
 console.log(funFunction())
 console.log(funerFunction())
 console.log(funestFunction())

