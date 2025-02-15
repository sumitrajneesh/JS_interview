/**
 * promises
 * 
 * A promises is an object that may produce a single value some time in the future,,
 * either a resovleve value or a reson that it's not resolved(rejected)
 */

 /**
  * Callback hell
  */

//   el.addEventListener('click',submitForm);

//   //callback pyramid of dom

//   movePlayer(100,'Left',function(){
//       movePlayer(400,'Left',function(){
//           movePlayer(10,'Right',function(){
//               movePlayer(300,'Left',function(){

//               })
//           })
//       })
//   })

/**
 * by using promise
 */

//  movePlayer(100,'Left')
//   .then(() => movePlayer(400,'Left'))
//   .then(() => movePlayer(10,'Right'))
//   .then(() => movePlayer(330, 'Left'))

const promise = new Promise((resolve, reject) => {
    if(true){
         resolve('stuff Worked')
    } else{ 
        reject('Error it broke')
    }
})

// promise.then(result => console.log(result))

/*
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Is it me you are looking for ?')
})
/**
 * it take large one time 50000
 */
/*

Promise.all([promise,promise2,promise3,promise4]).then(values => {
    console.log(values)
})
*/

// promise
// .then(result => 
//      {throw Error 
//     result + '!'})
//     .then(result2 => 
//     console.log(result2))
//     .catch(() => console.log('error'))

/**
 * real example of promises
 */

 const urls = [
   'https://jsonplaceholder.typicode.com/users',  
   'https://jsonplaceholder.typicode.com/posts',  
   'https://jsonplaceholder.typicode.com/albums'  
 ]

 Promise.all(urls.map(url => {
     return fetch(url).then(resp => resp.json())
 })).then(results => {
     console.log(results[0])
     console.log(results[1])
     console.log(results[2])
 })
 .catch(() => console.log('error'))