/**
 * 1.how objects and arrays work through the lens of Big O.
 * 2.Explain why adding elemennts to the beginning of an array is costly
 * 3.Compare and contrast the runtime for arrays and object , as well as built-in methods
 *
 *  
 */

 /**
  * Big O of objects 
  * insertion O(1)
  * removal - O(1)
  * searching - O(n)
  * accesss - O(1)
  * when we don't need any ordering objects are excellent choice
  */

  let instructor = {
      firstName:"kelly",
      isInstructor:true,
      favoriteNumbers:[1,2,3,4]
  }

  /**
   * Object.keys - O(n)
   * Object.values - O(n)
   * Object.entries - O(n)
   * hasOwnProperty - O(1)
   */

   /**
    * Arrays
    * 1.when to use Arrays
    * 2.when a need to add and delelte , it takes more time
    * 
    */

    let names =["sumit","amit"]
    let values =[true, {},[],2,"awesome"]

    /***
     * insertion - it depends
     * removal - it depends
     * searching - O(n)
     * access - O(1)
     */

     /**
      * Built in array method
      * push -O(1)
      * pop -O(1)
      * shift -O(n)
      * unshift -O(n)
      * concat -O(n)
      * slice -O(n)
      * splice -O(n)
      * sort -O(n*longn)
      * forEach/map/filter/reduce -O(n)
      */

    