/**
 * new binding this
 */

function Person(name,age){
    this.name = name;
    this.age = age;
}
const person1 = new Person('Sumit',27)
console.log(person1)
/**
 * implicit binding this
 */

 const person = {
     name:'sumit',
     age:34,
     hi(){
         console.log('hi ' + this.name)
     }
 }
 /**
  * explicit binding
  */

 const person3 = {
    name:'sumit',
    age:34,
    hi: function(){
        console.log('hi ' + this.setTimeout).bind(window)
    }
}
console.log(person3.hi)

/**
 * arrow function
 * lexical scoping
 */

const person4 = {
    name:'sumit',
    age:34,
    hi: function() {
        var inner = () => 
        {console.log('hi ' + this.name)}
        return inner()
    }
}
console.log(person4.hi())
