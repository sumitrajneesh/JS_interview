const basket = ['apples','oranges','grapes']

for(let i = 0; i< basket.length; i++){
    console.log(basket[i]);
}

basket.forEach(item => {
    console.log(item)
})

/**
 * for of 
 * Iterating- arrays, strings
 */

//  for(item of 'basket'){
//      console.log(item)
//  }

//  basket ={
//      0:'apples',
//      1:'oranges',
//      2:'_grapes'
//  }

 //for in
//enumerating - object
//  for(item in detailedBasket){
//      console.log(item)
//  }

