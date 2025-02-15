// var a = 5; // a has address where 5 in memory
// var b = 10; // b has address where 10 in memory
// var b = a; //primitives pass by value
// b++
// console.log(a)
// console.log(b)



// let obj1 = {name:'sumit', password:'123'};
// let obj2 = obj1;

// obj2.password= '345';
// console.log(obj1) //pass by reference
// console.log(obj2)  //pass by reference


// var c = [1,2,3]
// var d = c;
// d.push('23');
// console.log(d)
// console.log(c)

/**
 * clone the object
 */

//  let obj = {a:'a', b:'b', c:'c'};
//  let clone = Object.assign({},obj);
// //  let clone = obj
// let clone2  = {...obj}
//  obj.c = 5;
//  console.log(obj)
//  console.log(clone)
//  console.log(clone2)
 let obj = {a:'a', b:'b', c:{
     deep:'try and copy me'
 }};
 let clone = Object.assign({},obj);
//  let clone = obj
let clone2  = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))
 obj.c.deep= 'sumit';
 console.log(obj)
 console.log(clone)
 console.log(clone2)
 console.log(superClone)