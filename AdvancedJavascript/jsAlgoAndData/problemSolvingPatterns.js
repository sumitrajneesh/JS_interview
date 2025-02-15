/**
 * Some Patterns
 * 1.Frequency Counter
 * 2.Multiple Pointers
 * 3.Sliding Window
 * 4.Divide and Conquer
 * 5.Dynamic Programming
 * 6.Greedy Algorithms
 * 7.Backtracking
 * 8.Many More
 */

 /**
  * Frequency Counters: This Pattern uses objects or sets to collect values/frequencies of values,
  * this can often avoid the need for nested loops or O(n^2) operations with arrays/strings
  */

  /**
   * Question: write a function called same, which accepts two arrays. The function should return true if every value
   * in the array has it's corresponding value squared in the second array.The frequency of values must be the same
   * 
   * same([1,2,3] , [4,1,9]) true
   * same([1,2,3] , [1,9]) false
   * same([1,2,1] , [4,4,1]) false (must be same frequency)
   */

//    function same(arr1, arr2){
//        if(arra1.length !== arr2.length){
//            return false
//        }

//        for(let i = 0; i < arr1.length; i++){
//            let correctIndex = arr2.indexOf(arr1[i] ** 2)
//            if(correctIndex === -1){
//                return false;
            
//            }
//            arr2.splice(correctIndex,1)
//        }

//        return true  
//    }

   /**
    * Sliding Window approch
    * This patteren involves creating a window which can either be an array or number from one position to another
    * Depending on a certin condition , the window either increase or close(and a new window is created)
    * very useful for keeping trach of a subset of data in an array/string etc.
    */

    /**
     * Questions 
     * Write a function called maxSubarraySum which accepts an array of integers and number called n. the function should calculate the maximum sum of n consecutive elements
     * in the array
     */

    //   function maxSubarraySum(arr, num){
    //       if(num > arr.length){
    //           return null
    //       }

    //       var max = -Infinity;
    //       for(let i = 0; i< arr.length - num + 1; i++){
    //           temp = 0;
    //           for(let j = 0; j < num; j++){
    //               temp += arr[i + j];
    //           }
    //           if(temp > max){
    //               max = temp;
    //           }

    //           console.log(temp, max)
    //       }

    //       return max;
    //   }


    //   maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
    
    /**
     * Better solution
     */
    
    // function maxSubarraySum(arr,num){
    //     let maxSum = 0;
    //     let tempSum = 0;
    //     if(arr.length < num) return null;
    //     for(let i = 0; i < num; i++){
    //         maxSum += arr[i]
    //     }
    //     tempSum = maxSum;
    //     for(let i = num ; i < arr.length ; i++){
    //         tempSum = tempSum - arr[i -num] + arr[i];
    //         maxSum = Math.max(maxSum, tempSum)
    //     }
    //     return maxSum
    // }
    //  console.log( maxSubarraySum([2,6,9,2,1,8,5,6,3],3))


    /**
     * Divide and Conquer
     * This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
     * This patteren can temendously decrease time complexity 
     */