/**
 * What is the sorting
 * sorting is the process of rearranging the items in a collection(e.g an array) 
 * so that the items are in some kind of order
 * 
 * Example
 * 1.Sorting numbers from smallest to largest
 * 2.Sorting names alphabetically
 * 3.Sorting movies based on release year
 * 4.Sorting movies based on revenue
 */

//  function sortArray( arr ){
//      newArray = []
     
//      return arr.sort((a,b) => b- a)
//  }

//  console.log(sortArray([45,6,87,9,23,43]))



// function compareByLen(str1, str2){
//     return str2.length - str1.length
// }



// console.log(["steele","colt", "Data structures", "Algorithms"].sort(compareByLen))

/**
 * Bubble Sort
 * A sorting algorithm where the largest values bubble up to the top
 * 
 * 
 * Pseudocode
 * 1.Start looping from with a variable called i the end of the array towards the beginning.
 * 2.Start an inner loop with a variable called j from the beginning until i -1
 * 3.if arr[j] is greater than arr[j+1], swap those two values!.
 * 4.Return the sorted array 
 */
/**
 * ES5
 */

//  function bubbleSort(arr){
//      for(var i = 0; i < arr.length; i++){
//          for(var j = 0; j < i - 1; j++){
//              if(arr[j] > arr[j+1]){
//                  var temp = arr[j];
//                  arr[j] = arr[j+1];
//                  arr[j + 1] = temp
//              }
//          }
//      }

//      return arr;
//  }

//  console.log(bubbleSort([37,45,29,8,12,88,1]))

function bubbleSort(arr){
    const swap = (arr, idx1,idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for(let i = arr.length; i > 0; i-- ){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, i, j + 1)
            }
        }
    }
    return arr
}
 console.log(bubbleSort([37,45,29,8,12,88,1]))
  

