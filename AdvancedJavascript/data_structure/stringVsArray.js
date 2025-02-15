/**
 * reverse a strings
 * 
 */

 /**
  * 
  * steps 
  * 1.check the input
  * 2.crete array, while return convert into string
  * 
  */
 /*
function reverse(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'hm that is not good'
    }

    const backwards = [];
    const totalItems = str.length -1;
    for (let i = totalItems; i>= 0; i--){
        backwards.push(str[i]);
    }
    console.log(backwards);

    return backwards.join('');

}

console.log(reverse("hi sumit choudhar how are you"));

function reverse2(str){
    return str.split('').reverse().join('')
}

console.log(reverse2('hi sumit choudhary how are you'))


const reverse3 = str => [...str].reverse().join('')
console.log(reverse3('hi sumit choudhary how are you'))
*/

/**
 * MergeSortedArray
 * 
 * step:1   
 * 
 * 
 */

 function mergeSortedArrays(array1,array2){
     const mergedArray = [];
     let array1Item = array1[0];
     let array2Item = array2[0];
     let i = 1, j=1;


     //check input
     if(array1.length === 0){
         return array2;
     }
     if(array2.length === 0){
         return array1;

     }

     while(array1Item || array2Item){
         if(!array2Item || array1Item < array2Item){
             mergedArray.push(array1Item)
             array1Item = array1[i];
             i++;
         } else {
             mergedArray.push(array2Item);
             array2Item = array2[j];
             j++;
         }
     }

     return mergedArray
 }




 console.log(mergeSortedArrays([0,3,4,31],[4,6,30]))
