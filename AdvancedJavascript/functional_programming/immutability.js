
/**
 * Immutability: not changing the data and not the state
 */

//  const obj = {name : 'sumit'}
//  function clone(obj){
//      return {...obj} //this is pure
//  }

//  obj.name = "choudhary"
//  console.log(obj.name);
//  console.log(obj);

const obj = {name: 'sumit'}
function clone(obj){
    return {...obj}; //this is pure
}

function updateName(obj){
    const obj2 = clone(obj);
    obj2.name = 'choudhary'
    return obj2
}

const updatedObj = updateName(obj)
console.log(obj, updatedObj)