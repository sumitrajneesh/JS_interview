/**
 * class is static sugar
 * class is use prototypal inheritance
 */

 class Elf {
     constructor(name, weapon){
         this.name = name;
         this.weapon = weapon;
     }
     attack(){
         return 'attack with  ' + this.weapon
     }
     build(){
         return 'build'
     }
 }

 const peter = new Elf('Peter', 'Stones')
 console.log(peter instanceof Elf) //instance of class
 console.log(peter.attack())
 const sumit = new Elf('Sumit', 'Fire')
 console.log(sumit.attack())

 /**
  * Object.create() vs Class
  */

  