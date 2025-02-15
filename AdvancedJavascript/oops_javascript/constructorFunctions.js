/**
 * Constructor Functions
 */

 /**
  * new keywords automatically return the object for us and create elf constructor
  * Number(), Object(), Function() all are constructor function
  * we have constructor function for everythig except null and undefined
  */

   function Elf(name, weapon){
       //console.log('this',this)
       this.name = name;

       this.weapon = weapon
       //var a = 5; //in constructor function only add to properties by this keyword
       console.log('this',this)

   }
 //same memory contain attack
 /**
  * regular function this is dynamic scope
  * arrow function lexical scope
  */
 console.log(Elf.prototype)

   Elf.prototype.attack = function() {
       return 'attack with ' + this.weapon
   }
 
   Elf.prototype.build = function() {
    //    function building(){
    //        return this.name + 'builds a house'
    //    }
    //    return building.bind(this)
     const self = this
       function building(){
           return self.name + 'builds a house'
       }
       return building()
   }
 

   const peter = new Elf('Peter', 'stones')
   console.log(peter.attack())
  // console.log(peter.build()())
   console.log(peter.build())
   //console.log(peter.__proto__)
   console.log(peter.prototype)
//    console.log(Elf.prototype)
   const sam = new Elf('sam', 'fire');
   console.log(sam.name)
   console.log(sam.attack())
   /**
    * because of new keyword this refer to object that is created by Function constuructor
    */


//    const Elf1 = new Function ('name', 'weapon',` this.name = name;
//    this.weapon = weapon`)
//    const sarah = new Elf1('Sarah', 'fireworks')
//    console.log(sarah);