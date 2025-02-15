// console.log('advancedObject');

/**
 * reference type
 * context
 * intatiation
 */

 /**
  * object are reference type
  */
 var obj1 = {value:10};
 var obj2 = obj1;
 var obj3 = {value:10};

 obj1.value = 15;
 console.log(obj1)

 console.log(obj1 === obj2); //both reference same
 console.log(obj2 === obj3);

 /**
  * context vs scope
  * this , shows where are we, about context,where we are
  */

//   function b(){
//       let a = 4
//   }

/**
 * instantiation
 */

 class Player {
     constructor(name, type){
         this.name = name;
         this.type  = type;
     }
     introduce(){
         console.log(`Hi I am ${this.name} , I'm a ${this.type}`)
     }
 }

 class Wizard extends Player{
     constructor(name, type){
         super(name, type)
     }

     play(){
         console.log(`WEEEEE I'm a ${this.type}`);
     }
 }

 const wizard1 = new Wizard('Shelly','Healer');
 const wizard2  = new Wizard('Shawn','Dark Magic')