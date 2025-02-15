/**
 * Searching in Javascript
 * 1.Describe what a searching algorithms is
 * 2.Implement linear search on arrays
 * 3.Implement binary search on sorted arrays
 * 4.Implement a naive string searching algorithm
 * 5.Implement the KMP string searching algorithm
 */

 /**
  * JavaScript has Search
  * There are many different search methods on arrays in javaScript:
  *  1.indexOf
  *   2.includes
  *  3.find
  *  4.findIndex 
  */

 /**
  * linear search
  */



  /**
   * linear search 
   * Pseudocode
   * 1.This function accepts an array and a value
   * 2.Loop through the array and check if the current array element is equal to the value
   * 3.If it is , return the index at which the element is found
   * 4.If the value is never found , return -1
   */

//    function linearSearch(arr,val){
//        for(var i = 0; i < arr.length; i++){
//            if(arr[i] === val) return i
//        }
//        return -1
//    }

//    console.log(linearSearch([34,51,1,2,3,45,56,687],100))

/**
 * Linear Search
 * best case 
 * O(1)
 */

 /**
  * Binary Search
  * 1.Binary search is a much faster form of search
  * 2.Rather than eliminating one element at a time, you can eliminate half of the remaining
  *  elements at a time
  * 3.Binary search only works on sorted arrays
  */

  /**
   * Binary Search Pseudocode
   * 1.This function accepts a sorted array and a value.
   * 2.Create a left pointer at the start of the array , and a right pointer at the end of the array
   * 3.while the left pointer comes before the right pointer: 
   *   1.Create a pointer in the middle
   *   2.If you find the value you want , return the index
   *   3.If the value is too small , move the left pointer up
   *   4.If the value is too large , move the right pointer down
   * 4.If you never find the value, return - 1
   */

     
//    function binarySearch(arr,elem){
//        var start = 0;
//        var end = arr.length - 1;
//        var middle = Math.floor((start + end) / 2);
//        while(arr[middle] !== elem && start <= end){
//            if(elem < arr[middle] ) end = middle - 1;
//            else start = middle + 1;
//            middle = Math.floor((start + end) / 2)
//        }
//        return arr[middle] === elem ? middle : -1;
//    }

//    console.log((binarySearch([2,5,6,9,13,15,28,30],30)))

/**
 * Naive String Search
 * Pseudocode
 * 1.Loop over the longer string
 * 2.loop over the shorter string
 * 3.if the characters don't match , break out of the inner loop
 * 4.If you complete the inner loop and find a match, increment the count of matches
 * 5.Return the count
 */


 function naiveSearch(long, short){
     var count = 0;
     for(var i = 0; i < long.length; i++){
         for(var j = 0; j < short.length; j++){
             if(short[j] !== long[i+j]) break;
             if(j === short.length - 1) count++;
         }
         
     }
     return count
 }

 console.log(naiveSearch("lorie loled", "lol"))