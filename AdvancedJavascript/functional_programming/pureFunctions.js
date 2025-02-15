/**
 * Pure functions :no side effect
 * same input get same ouptut
 */

// const array = [1,2,3];
// function mutateArray(arr){
//     arr.pop()
// }

// function mutateArray2(arr){
//     arr.forEach(item => {
//         arr.push(1)
//     });
// }
// mutateArray(array); //this function is not pure function
// mutateArray2(array); //this function is not pure function
// console.log(array);
/**
 * create a pure function without side effects
 */
/*
 const array = [1,2,3]
 function removeLastItem(arr){
     const newArray = [].concat(arr);
     newArray.pop()
     return newArray
 }

 function multiplyBy2(arr){
     return arr.map(item => item*2)
 }

 const array2 = removeLastItem(array);
 const array3 = multiplyBy2(array);
 console.log(array, array2,array3)

 /**
  * same input give same output
  */
/*
  function a(){
      console.log('hi')
  }
 //referencal transparency in functioal programming, avoid the outside world
  function a1(num1 , num2){
      return num1+ num2
  }

  function b(num){
      return num*2
  }
  console.log(b(a1(3,4)))// 14
  console.log(b(7)) //14

//   console.log(a(3,4))

/**
 * can everything be a Pure functions : No
 * function doing inside the function block , not use the outside the world
 * function:
 * 1.Task
 * 2.return statment
 * 3.Pure
 * 4.NO shared state
 * 5.Immutable State
 * 6.Composable 
 * 7.Predictable
 */





//Amazon shopping

 const user ={
     name:'Kim',
     active: true,
     cart:[],
     purchases:[]
 }

 let amazonHistory = []
 const compose = (f,g) => (...args) => f(g(...args));

console.log(purchasesItem(
     emptyCart,
     buyItem,
     applyTaxToItems,
     additemToCart,
 )(user, {name:'laptop',price:200}))

 function purchasesItem(...fns){
     return fns.reduce(compose)
 }


function additemToCart(user, item){
    const updateCart = user.cart.concat(item)
    return Object.assign({},user,{cart:updateCart})
}
function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name:item.name,
            price:item.price*taxRate
        }
    })
    return Object.assign({},user, {cart:updatedCart})
}
function buyItem(user){
    return Object.assign({},user,{purchases:user.cart})
}
function emptyCart(user){
    return Object.assign({},user,{cart:[]})
}

/**
 * Implement a cart featrue:
 * 1.Add items to cart.
 * 2.Add 3% tax to item in cart.
 * 3.Buy item: cart --> purchases
 * 4.Empty cart
 */



 /**
  * Bonus
  * 1.accept refunds.
  * 2.Track user history.
  */