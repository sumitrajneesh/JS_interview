
/**first function */
// function addUpTo(n){
//     let total = 0;
//     for(let i = 1; i<=n; i++){
//         total += i
//     }

//     return total
// }

/**
 * function with timing
 */

//  function addUpTo(n){
//      let total = 0;
//      for(let i = 1; i<=n ; i++){
//          total += i
//      }

//      return total;
//  }

//  let t1 = performance.now()
//  addUpTo(1000000000);
//  let t2 = performance.now();

//  console.log(`Time Elapsed: ${(t2 - t1) / 1000}   seconds.`)

// console.log(addUpTo(6))
// console.log(addUpTo(3))


/**second function */
// function addUpTo1(n){
    //     return n*(n+1)/2
    // }
    
    // console.log(addUpTo1(6))
    
    /**function with timing */
//     function addUpTo1(n){
//         return n*(n+1)/2
//     }
    
//     let t1 = performance.now();
//     addUpTo1(1000000000);
    
//     let t2 = performance.now();
//      console.log(`Time Elapsed: ${(t2 - t1) / 1000}   seconds.`)


// console.log(addUpTo1(6))

/**another function */

// function countUpAndDown(n){
//     console.log("Going up!");
//    for(var i = 0; i < n; i++){
//        console.log(i);
//    }

//    console.log("At the top!\nGoing down....");
//    for(var j = n-1; j>=0; j--){
//        console.log(j)
//    }

//    console.log("back donw bye!")
// }
/**
 * 
 * Big O(n)
 */


// function printAllPairs(n){
//     for(var i = 0; i< n; i++){
//         for(var j = 0; j< n; j++){
//             console.log(i,j)
//         }
//     }
// }
/**
 * Big 0(n^2)
 */


//  function logAtLeast5(n){
//      for(var i = 1; i < Math.max(5,n);i++){
//          console.log(i)
//      }
//  }


//  function logAtMost5(n){
//      for(var i = 1; i<= Math.min(5,n); i++){
//          console.log(i)
//      }
//  }

/**space complexity */

// function sum(arr){
//     let total = 0;
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i]
//     }

//     return total
// }


// function double(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(2 * arr[i])
//     }
//     return newArr;
// }