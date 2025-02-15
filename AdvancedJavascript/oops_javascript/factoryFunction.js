/**
 * Procedural to OOP
 */

 //factory functions
 const elfFunctions ={
    attack(){
        return 'attack with' + this.weapon
    }
 }
//  function createElf(name, weapon){
//      return{
//          name,
//          weapon,
//         //  attack(){
//         //     return 'attack with' + weapon
//         // }
        
//      }
//  }
 function createElf(name, weapon){
     let newElf = Object.create(elfFunctions) //create link between createElf and elfFunction
     newElf.name = name
     newElf.weapon = weapon;
     return newElf;
 }

 const peter = createElf('Peter','stones')
 const sam = createElf('Sam','fire')
//  peter.attack = elfFunctions.attack
//  sam.attack = elfFunctions.attack
 console.log(peter.attack())
 console.log(sam.attack())
