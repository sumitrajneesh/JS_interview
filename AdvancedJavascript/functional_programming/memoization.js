/**
 * Caching
 * memoziation is special type of caching 
 */

// function addTo80(n){
//     console.log('long time');
//     return n + 80;
// }

// console.log(addTo80(5))
// console.log(addTo80(5))
// console.log(addTo80(5))

// let cache = {};
// function memoizedAddTo80(n){
//     if(n in cache){
//         return cache[n];
//     }else{
//         console.log('long time');
//         cache[n] = n + 80;
//         return cache[n]
//     }
// }

// console.log('1',memoizedAddTo80(5))
// console.log('2',memoizedAddTo80(6))



function memoizedAddTo80(){
let cache = {};
return function(n){
    if(n in cache){
        return cache[n];
    }else{
        console.log('long time');
        cache[n] = n + 80;
        return cache[n]
    }}
}
const memoized = memoizedAddTo80()
console.log('1',memoized(5))
console.log('2',memoized(5))