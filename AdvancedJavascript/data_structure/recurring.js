/**
 * Google question
 * Given an array = [2,5,1,2,3,5,1,2,4]
 * It should return 2
 */

 /**
  * Given an array = [2,1,1,2,3,5,1,2,4]:
  * It should return 1
  */

  /**
   * Given an array = [2,3,4,5]:
   * It should return undefined
   */
  /**
   * 
   *  fast lookups
   * fast inserts
   * flexible keys
   * Bad:
   * unordered
   * slow key iteration 
   */


   function firstRecurringCharacter(input){
       for(let i = 0; i< input.length;i++){
           for(let j = i + 1; j< input.length; j++){
               if(input[i] === input[j]){
                   return input[i];
               }
           }
       }
       return undefined
   } //o(n^2)


   function firstRecurringCharacter2(input){
       let map ={};
       for(let i = 0; i< input.length ; i++){
           if(map[input[i]] !== undefined){
               return input[i]
           }else {
               map[input[i]]= i
           }
           console.log(map)
       }

       return undefined;
   } //o(n)
   console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]))