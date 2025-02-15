//console.log('array')
/**
 * Arrays , arrange data sequentially
 * lookup O(1)
 * push O(1)
 * insert O(n)
 * delete O(n)
 * 
 */

 /**
  * array if fast to lookup
  * arrary is fast to  push/pop
  * slow inserts
  * slows deletes
  * fixed size problem
  */

 /*
 const strings = ['a','b','c','d'];  

 //push
 console.log(strings[2]); // o(1)

 //pop 
 strings.pop() //0(1)
 strings.pop() //0(1)

 //unshift
 strings.unshift('x'); //0(n)

 //splice 

 //strings.splice(2,1,'sumit'); //0(n)
//  strings.splice(2,0,'sumit'); //0(n)

 strings.slice(1);

 console.log(strings)
/**
 * static vs dynamic array
 * not think about memory , it automatically grow
 * dynamic array:
 * 
 */




 /**
  * Impelementing array
  */

  class MyArray{
      constructor(){
          this.length = 0;
          this.data = {};
      }

      get(index){
          return this.data[index]
      }
      push(item){
          this.data[this.length] = item;
          this.length++
          return this.length
      }
      pop(){
          const lastItem = this.data[this.length - 1]
          delete this.data[this.length - 1];
          this.length -- 
          return lastItem
      }

      delete(index){
          const item = this.data[index]; 
          this.shiftItems(index)

      }
      shiftItems(index){
          for(let i = index; i< this.length - 1; i++){
              this.data[i] = this.data[i+1];
          }
        delete  this.data[this.length - 1];
        this.length--
      }
  }

  const newArray = new MyArray();
//   console.log(newArray)
//   console.log(newArray.get(0))
  console.log(newArray.push('hi'))
  console.log(newArray.push('you'))
  console.log(newArray.push('!'))
//   console.log(newArray.pop())
//   console.log(newArray.pop())
  console.log(newArray.delete(1))
  console.log(newArray)
