/**
 * Call ,apply , bind
 */

//  function a(){
//      console.log('hi')
//  }

//  a.apply()
//  a.call()

// const wizard = {
//     name:'Merlin',
//     health:50,
//     heal(){
//         return this.health = 100;
//     }
// }
const wizard = {
    name:'Merlin',
    health:50,
    heal(num1,num2){
        return this.health += num1 + num2;
    }
}

const archer = {
    name:'sumit choudhary',
    health:30
}

console.log(archer);
//wizard.heal.call(archer);
//wizard.heal.call(archer,50, 30);
//wizard.heal.apply(archer,[50, 30]);
const healArcher = wizard.heal.bind(archer,100, 30);
console.log(healArcher())
console.log(archer)