//console.log('idempotent')
/**
 * idempotence: a function is always
 * 
 */


//  function notGood(num){ //not a pure function bcz of console link with outside world
//      console.log(num)
//  }

//  function notGood1(num){
//      return Math.random(num)
//  }

//  console.log(notGood(5))
//  console.log(notGood1(5))

/**
 * If we calling one function again and again inside it owns we get similar result
 */

 console.log(Math.abs(Math.abs(-50)));
 console.log(Math.abs(Math.abs(Math.abs(-50))));