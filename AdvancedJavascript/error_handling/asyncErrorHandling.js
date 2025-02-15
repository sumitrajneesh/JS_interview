(async function(){
    try{
        await Promise.resolve('oopsie #1')
        await Promise.reject('oopsie #2')

    }catch(err){
        console.log(err)

    }
    console.log('is the still good?')
})()


/**
 * in Promise we use .catch() to catch the error 
 * and in async await we use try{ } catch{}
 */