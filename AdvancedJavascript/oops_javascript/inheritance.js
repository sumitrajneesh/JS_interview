/**
 * inheritance
 * object inheritaed from other object
 * extends don't copy object , they just link to parent object
 */

 class Character{
     constructor(name, weapon){
         this.name = name;
         this.weapon = weapon;
     }

     attack(){
         return 'attack with' 
     }
 }

 class Elf extends Character {

    constructor(name, weapon,type){
        //console.log(this) //show error
        super(name,weapon) //this is the parent class constructors, we can't use this without super()
       // console.log(this)
        this.type = type
    }
    attack(cry){
        return 'attack the ' + cry;
    }

 }

 class Ogre extends Character {
     constructor(name, weapon, color){
         super(name, weapon);
         this.color = color
     }
     attack(){
         return 'ahhhhhhh';
     }
     makeFort(){
         return 'strongest fort in the world made'
     }
 }





 const dolby = new Elf('Dolby', 'cloth', 'house')
 //console.log(dolby.attack())

 const shrek = new Ogre('Shrek', 'club','green')
 console.log(shrek)
 console.log(shrek.makeFort())

 console.log(Ogre.prototype.isPrototypeOf(shrek));
 console.log(Character.prototype.isPrototypeOf(Ogre));
//  console.log(Ogre.prototype);
console.log(dolby instanceof Elf);
console.log(dolby instanceof Character);
console.log(shrek.attack())
console.log(dolby.attack('weep'))
//  const ogre ={...fiona}
//  console.log(fiona)
//  console.log(ogre)
//  console.log(ogre === fiona)

/**
 * private and public field
 * you don't have public and private in javascript we use _ underscore 
 */

