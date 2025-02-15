/**
 * Algorithm and Problem Solving Patters
 * 
 */

 /**
  * Define what an algorithms
  * Ans: A process or set of steps to accomplish a certain task.
  */
/**
 * Devise a plan for solving problems
 * Master common problem solving patterns
 */

 /**
  * Problem solving startegies:
  * 1.understand the problem:
  * a.can i restate the problem in my own words?
  * b.what are the inputs that go into the problem?
  * c.what are the outputs that should come from the solution to the problem?
  * d.can the outputs be determined from the inputs? in other words, do i have enough information to solve the problem ?(you may not be able to answer this question
  * until you set about solving the problem. That's okay; it's still worth considering the question at this early stage)
  * e.how should i label the important pieces of data that are a part of the problem?
  *  
  * 2.Explore examples
  * Ans: 
  * a.start with simple exmaples
  * b.progress to more complex example
  * c.explore examples with empty inputs
  * d.explore examples with invalid inputs
  * 
  * 
  * 3.Break it Down
  * Ans:
  * 
  * 
  * 4.solve/simplify
  * 1.find the core difficulty in what your're trying to do
  * 2.Temporarily ignore that difficulty
  * 3.write a simplified solution
  * 4.Then incorporate that difficulty back in
  * 
  * 
  * 5.Look back and refactor
  */

  /**
   * Questions: write a function to take a string and count every character and print in output
   *  
   */

   function charCount(str){
     //make object to return at end
     var obj = {}
     //loop over string , for each character...
     for(var i = 0; i< str.length; i++){
       //if the char is a number/letter AND is a key in object , add one to count
       var char = str[i].toLowerCase();
       if(/[a-z0-9]/.test(char)){
         if(obj[char] > 0){
           obj[char]++;
         }else{
           obj[char] = 1;
         }
       }
       return obj
     }
     //if the char is a number/letter AND not in object , add it to object and set value to 1
     //if character is something else (space, period,etc) don't do anything
     //return object at end
   }

   function charCount1(str){
     var obj = {};
     for(var char of str){
       if(isAlphaNumeric(char)){
         char = char.toLowerCase();
         obj[char] = ++obj[char] || 1;
       }
     }
     return obj;
   }


   function isAlphaNumeric(char){
     var code = char.charCodeAt(0);
     if(1(code > 47 && code < 58) &&
     !(code > 64 && code < 91) &&
     !(code > 96 && code < 123)){
       return false
     }

     return true
   }