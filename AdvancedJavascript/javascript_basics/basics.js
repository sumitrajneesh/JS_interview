/**
 * JAVASCRIPT TYPES
 * Number
 * String
 * Boolean
 * Undefined: variable not has been assign the value
 * Null
 * Symbol
 * Object
 */
/**
 * THis isn\t very nic, //\t is back ticks
 * 
 * 10 + "30" /////30
 * 10 - "3" // 7
 * "hello" - "bye" //NaN : not a number meaning of NaN
 * 
 * boolean : true  , false
 */

 /**
  * JAVASCRIPT COMPARISIONS
  * !== gives boolean value
  * >=  gives boolean value
  * ===  gives boolean value
  * >=   gives boolean value
  * <=   gives boolean value
  * >  gives boolean value
  * <   gives boolean value
  */

  /**
   * convert string to number
   * Number("5") //5
   */

  /**
   * JAVASCRIPT VARIABLES
   * var
   * let
   * const
   */

   /**
    * run in chrome
    * var first = promt('enter the first number')
    * var second = promt('enter the second number')
    * var sum = Number(first) + Number(second);
    * alert('The sum is :' + sum);
    * (;) semiclone means end of expression
    */

    /**
     * control flow
     * if
     * else
     * else if
     * ternary operator
     * switch
     */

     /**
      * !true 
      * !false
      */

    // var name = "sumit" ///run in chrome

    //  if(name === 'Billy'){
    //      alert("hi billy")
    //  }

    /**
     * function has input to gives output
     * 
     * function takes first return , they avoid the other return
     * in funciton we should have one return statement
     */

    //  function multiply(a,b){
    //      return a*b;
    //      return a;
    //      return b;
    //  }

    //  function multiply(a,b){
    //    if(a > 10 || b > 10){
    //        return "that's too hard";
    //    } else{
    //        return a*b;
    //    }
    //  }
    // console.log(multiply(5,40))
   var s =   function multiply(a,b){
       if(a > 10 || b > 10){
           return "that's too hard";
       } else{
           return a*b;
       }
     }

     console.log(s(5,40))