//console.log(new Error('error'))
// console.log(throw new Error())

// throw 'string'
// throw true;
// throw Error()
// throw new Error()

//  const myError = new Error('oopsie');
//  myError.name
//  myError.message
//  myError.stack

// function a(){
//     const b = new Error('what ??')
//     return b
// }

// console.log(a())
// console.log(a().stack)
/**
 * built in constructor
 * new SyntaxError
 * new ReferenceError
 * throw : it generate the error
 * 
 * 
 */
/**
 * handling the error step:
 * 1.ERROR!
 * 2.Is there a catch?
 * 3.Is there a catch?
 */

//  try catch() {} block
//catch()

function fail(){
    try{
        throw new Error('oopsie')
        console.log('this works');
    }catch(error){
        // console.log('we have made an oopsie',error);
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);

    } finally{
        console.log('still good')
        return 'returning Fail'
    }

    console.log('!!!!!!!') //will not run
}
console.log(fail())

/**
 * Error extends
 * 
 */

 class AuthenticationError extends Error {
     constructor(message){
         super(message)
         this.name = 'authenticationError'
         this.favouriteSnack = "mango"
     }
 }

 class DatabaseError extends Error {
     constructor(message){
         super(message)
         this.name = 'authenticationError'
         this.favouriteSnack = "mango"
     }
 }
 class PermissionError extends Error {
     constructor(message){
         super(message)
         this.name = 'permissionError'
         this.favouriteSnack = "grapes"
     }
 }


 const a = new DatabaseError('oopise')
 console.log(a instanceof DatabaseError)


// try{
//     try{
//         somethig();
//     }catch(e){
//         throw new Error(e)
//     }
// }catch(e){
//     console.log('got it ' ,err)
// }
