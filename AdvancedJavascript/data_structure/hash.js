/**
 * Hash tables
 *  Hash function is responsible , put the key ,generate hash
 * md5 Hash Generator
 * in javascript object use hash table
 */

 /**
  * Hash Collisions
  * insert o(1)
  * lookup o(1)
  * delete o(1)
  * search o(1)
  */

  let user = {
      age: 54,
      name:'sumt',
      magic: true,
      screm: function(){
       console.log('ahhhh!')
      }
  }

  console.log(user.age)
  user.spell = "abra kadara"
  console.log(user.screm())


  const a  = new Map() //map contain all kind of the data

  const b = new Set() //contain a key

  /**
   * execrise for hash
   * 
   * 
   */

   class HashTable {
       constructor(size){
           this.data = new Array(size);

       }

       _hash(key){
           let hash = 0;
           for(let i = 0; i< key.length;i++){
               hash = (hash + key.charCodeAt(i)*i)% this.data.length
            //    console.log(hash)

           }

           return hash
       }
       set(key, value){
           let address = this._hash(key);
           if(!this.data[address]){
               this.data[address] = [];
            //    this.data[address].push([key,value])
            //    console.log(this.data)
           }else{
               this.data[address].push[[key,value]]
               return this.data
           }
       }
       get(key){
           let address = this._hash(key);
           const currentBucket = this.data[address];
           console.log(currentBucket)
           if(currentBucket){
               for(let i = 0; i<currentBucket.length ; i++){
                   if(currentBucket[i][0] === key){
                       return currentBucket[i][1]
                   }
               }
           }
           return undefined

       }
       key(){
           const keyArray = [];
           for(let i = 0; i < this.data.length; i++){
               if(this.data[i]){
                   keyArray.push(this.data[i][0][0])
               }
           }

           return keysArray;
       }
   }

   const myHashTable = new HashTable(50);
   console.log( myHashTable.set('grapes',10000))
   myHashTable.set('apple',54)
   myHashTable.get('apple');
   myHashTable.keys();

//  console.log(myHashTable._hash('amis'))